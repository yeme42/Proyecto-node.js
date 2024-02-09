const express = require('express');
const router = express.Router();
const service = require('./../models/conexion');

const list = (req,res)=> service
.list()
.then((response) => res.json(response))
.catch((e)=> res.json({e}));

const id = (req,res)=>
    service.list({id:req.params.id})
    .then((response) => res.json(response))
    .catch((e)=> res.json({e}));

const create = (req,res) => {
    const registro = ({nombre,apellido,telefono,localidad} = req.body)
    return service
        .create(registro)
        .then((response) => res.json(response))
        .catch((e)=> res.json({e}));
}

const update = (req, res)=>{
    const datos = ({ nombre, apellido, telefono, localidad} = req.body)
    return service.update({id:req.params.id}, datos)
    .then((res)=>res.json(res))
    .catch((e)=>res.json(e));

}

const deleteId = (req,res)=>
    service.eliminar({id:req.params.id})
    .then((response) => res.json(response))
    .catch((e)=> res.json({e}));


router.get('/', list)
router.get('/:id', id)
router.post("/",create)
router.put('/:id', update)
router.delete('/:id', deleteId)


module.exports = router;