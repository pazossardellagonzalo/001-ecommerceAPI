"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const mongoose_1 = require("mongoose");
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
});
exports.Clientes = (0, mongoose_1.model)('clientes', clienteSchema);
