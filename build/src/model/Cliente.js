"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
const clienteSchema = new Schema({
    _id: {
        type: ObjectIdSchema, default: function () { return new ObjectId(); },
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
});
exports.Clientes = (0, mongoose_1.model)('clientes', clienteSchema);
