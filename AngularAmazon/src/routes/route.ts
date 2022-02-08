import { Request, Response, Router } from 'express'
import { Dirent } from 'fs'
import { stringify } from 'querystring'
import { db } from '../database/database'
import { Clientes, iCliente } from '../model/schemaCliente'

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }

    private getCliente = async (req:Request, res: Response) => {
        const dni = req.params.dni
        await db.conectarBD()
        .then(async (mensaje) => {
            const query = await Clientes.findOne({_dni: dni})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private getClientes = async (req:Request, res: Response) => {
        await db.conectarBD()
        .then(async (mensaje) => {
            const query = await Clientes.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private postCliente = async (req: Request, res: Response) => {
        const { id, dni, nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, correo, socio } = req.body
        await db.conectarBD()
        const dSchema={
            _id: id,
            _dni: dni,
            _nombre: nombre,
            _primerApellido: primerApellido,
            _segundoApellido: segundoApellido,
            _edad: edad,
            _pais: pais,
            _sexo: sexo,
            _tlf: tlf,
            _correo: correo,
            _socio: socio
        }
        const oSchema = new Clientes(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private putCliente = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const {id} = req.params
            const { dni, nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, correo, socio } = req.body
            await Clientes.findOneAndUpdate(
              {
                _id: id,
              },
              {
                _dni: dni,
                _nombre: nombre,
                _primerApellido: primerApellido,
                _segundoApellido: segundoApellido,
                _edad: edad,
                _pais: pais,
                _sexo: sexo,
                _tlf: tlf,
                _correo: correo,
                _socio: socio
              },
              {
                new: true,
              }
            )
              .then((docu: any) => res.send(docu))
              .catch((fail: any) => res.send(fail));
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
    
        db.desconectarBD();
    }

    private deleteCliente = async (req: Request, res: Response) => {
        const { dni } = req.params
        await db.conectarBD()
        await Clientes.findOneAndDelete(
                { _dni: dni }
            )
            .then( (doc: any) => {
                    if (doc == null) {
                        res.send(`No encontrado`)
                    }else {
                        res.send('Borrado correcto: '+ doc)
                    }
            })
            .catch( (err: any) => res.send('Error: '+ err)) 
        db.desconectarBD()
    }

    misRutas() {
        this._router.get('/getCliente/:dni', this.getCliente),
        this._router.get('/getClientes', this.getClientes),
        this._router.post('/postCliente', this.postCliente),
        this._router.put("/putCliente/:dni", this.putCliente),
        this._router.delete("/delCliente/:dni", this.deleteCliente)
    }

}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router