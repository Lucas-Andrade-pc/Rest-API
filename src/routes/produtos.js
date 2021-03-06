const express = require('express');
const rota = express.Router();

rota.get('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Buscando todos produtos'
    })
})

rota.post('/', (req,res,next) =>{
    res.status(201).send({
        message: 'Usando post produto'
    })
})

rota.delete('/:id_produto', (req,res,next) =>{
    const id_produto = req.params.id_produto
    res.status(201).send({
        message: 'deletando produto',
        id: id_produto
    })
})

rota.patch('/:id_produto', (req,res,next) =>{
    const id_produto = req.params.id_produto
    res.status(201).send({
        message: 'Usando patch produto',
        id: id_produto
    })
})

module.exports = rota