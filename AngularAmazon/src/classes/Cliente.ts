export class Cliente{
    protected _dni: string
    protected _nombre: string
    protected _primerApellido: string
    protected _segundoApellido: string
    protected _edad: number
    protected _pais: string
    protected _sexo: string
    protected _tlf: number
    protected _socio: boolean
    
    constructor(dni: string, nombre: string, primerApellido: string, segundoApellido: string, edad:number,
         pais:string, sexo:string, tlf:number, socio:boolean){
        this._dni = dni
        this._nombre = nombre
        this._primerApellido = primerApellido
        this._segundoApellido = segundoApellido
        this._edad = edad
        this._pais = pais
        this._sexo = sexo
        this._tlf = tlf
        this._socio = socio
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
}