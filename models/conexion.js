const db = require('./../db.js')

const list = (params = {}) => db(process.env.T_REGISTROS) // Para buscar todos los registros o un registro especifico por id
.where (params)
.select(
    "id",
    "nombre",
    "apellido",
    "telefono",
    "localidad"
);

const create = (obj) => db(process.env.T_REGISTROS).insert(obj) // Para crear un nuevo registros

const update = (params, obj) => db(process.env.T_REGISTROS).where(params).update(obj)

const eliminar = (params) => db(process.env.T_REGISTROS).where(params).delete(params)

module.exports = { list, create, update, eliminar };