"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(dni, nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, socio) {
        this._dni = dni;
        this._nombre = nombre;
        this._primerApellido = primerApellido;
        this._segundoApellido = segundoApellido;
        this._edad = edad;
        this._pais = pais;
        this._sexo = sexo;
        this._tlf = tlf;
        this._socio = socio;
    }
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get primerApellido() {
        return this._primerApellido;
    }
    get segundoApellido() {
        return this._segundoApellido;
    }
    get edad() {
        return this._edad;
    }
    get pais() {
        return this._pais;
    }
    get sexo() {
        return this._sexo;
    }
    get tlf() {
        return this._tlf;
    }
    get socio() {
        return this._socio;
    }
}
exports.Cliente = Cliente;
