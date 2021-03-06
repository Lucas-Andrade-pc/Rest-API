const express = require('express');
const rota = express.Router();

rota.get('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Buscando pedido'
    })
})

rota.post('/', (req,res,next) =>{
    res.status(201).send({
        message: 'Usando post pedido'
    })
})

rota.delete('/:id_produto', (req,res,next) =>{
    const id_produto = req.params.id_produto
    res.status(201).send({
        message: 'deletando pedido',
        id: id_produto
    })
})

rota.patch('/:id_produto', (req,res,next) =>{
    const id_produto = req.params.id_produto
    res.status(201).send({
        message: 'Usando patch pedido',
        id: id_produto
    })
})

module.exports = rota