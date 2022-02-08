export class Cliente{
    protected _dni: string
    protected _nombre: string
    protected _primerApellido: string
    protected _segundoApellido: string
    protected _edad: number
    protected _pais: string
    protected _sexo: string
    protected _tlf: number
    protected _correo: string
    protected _socio: boolean
    
    constructor(_dni: string, _nombre: string, _primerApellido: string, _segundoApellido: string, _edad:number,
         _pais:string, _sexo:string, _tlf:number, _correo:string, _socio:boolean){
        this._dni = _dni
        this._nombre = _nombre
        this._primerApellido = _primerApellido
        this._segundoApellido = _segundoApellido
        this._edad = _edad
        this._pais = _pais
        this._sexo = _sexo
        this._tlf = _tlf
        this._correo = _correo
        this._socio = _socio
    }

    get dni(){
        return this._dni
    }

    get nombre(){
        return this._nombre
    }

    get primerApellido(){
        return this._primerApellido
    }

    get segundoApellido(){
        return this._segundoApellido
    }

    get edad(){
        return this._edad
    }

    get pais(){
        return this._pais
    }

    get sexo(){
        return this._sexo
    }

    get tlf(){
        return this._tlf
    }

    get socio(){
        return this._socio
    }

    get correo(){
        return this._correo
    }
}