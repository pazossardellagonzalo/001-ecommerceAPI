"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(_dni, _nombre, _primerApellido, _segundoApellido, _edad, _pais, _sexo, _tlf, _correo, _socio) {
        this._dni = _dni;
        this._nombre = _nombre;
        this._primerApellido = _primerApellido;
        this._segundoApellido = _segundoApellido;
        this._edad = _edad;
        this._pais = _pais;
        this._sexo = _sexo;
        this._tlf = _tlf;
        this._correo = _correo;
        this._socio = _socio;
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
    get correo() {
        return this._correo;
    }
}
exports.Cliente = Cliente;
