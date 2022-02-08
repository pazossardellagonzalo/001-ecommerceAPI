"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const schemaCliente_1 = require("../model/schemaCliente");
class DatoRoutes {
    constructor() {
        this.getCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dni = req.params.dni;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaCliente_1.Clientes.findOne({ _dni: dni });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaCliente_1.Clientes.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.postCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, dni, nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, correo, socio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
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
            };
            const oSchema = new schemaCliente_1.Clientes(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.putCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { id } = req.params;
                const { dni, nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, correo, socio } = req.body;
                yield schemaCliente_1.Clientes.findOneAndUpdate({
                    _id: id,
                }, {
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
                }, {
                    new: true,
                })
                    .then((docu) => res.send(docu))
                    .catch((fail) => res.send(fail));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield schemaCliente_1.Clientes.findOneAndDelete({ _dni: dni })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/getCliente/:dni', this.getCliente),
            this._router.get('/getClientes', this.getClientes),
            this._router.post('/postCliente', this.postCliente),
            this._router.put("/putCliente/:dni", this.putCliente),
            this._router.delete("/delCliente/:dni", this.deleteCliente);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
