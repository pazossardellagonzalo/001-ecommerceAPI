import { model } from 'mongoose'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const clienteSchema = new Schema({
    dni: String,
    nombre: String,
    primerApellido: String,
    segundoApellido: String,
    edad: Number,
    pais: String,
    sexo: String,
    tlf: Number,
    socio: Boolean
})

export type iCliente = {
    dni: string | null
    nombre: string | null
    primerApellido: string | null
    segundoApellido: string | null
    edad: number | null
    pais: string | null
    sexo: string | null
    tlf: number | null
    socio: boolean | null
}

export const Clientes = model('clientes', clienteSchema)