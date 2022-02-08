import { model } from 'mongoose'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

const clienteSchema = new Schema({
    _id: { 
        type: ObjectIdSchema, default: function () { return new ObjectId()},
        auto: true 
    },
    _dni: Number,
    _nombre: String,
    _primerApellido: String,
    _segundoApellido: String,
    _edad: Number,
    _pais: String,
    _sexo: String,
    _tlf: Number,
    _correo: String,
    _socio: Boolean
})

export type iCliente = {
    _id : null
    _dni: number | null
    _nombre: string | null
    _primerApellido: string | null
    _segundoApellido: string | null
    _edad: number | null
    _pais: string | null
    _sexo: string | null
    _tlf: number | null
    _correo: string | null
    _socio: boolean | null
}

export const Clientes = model('clientes', clienteSchema)