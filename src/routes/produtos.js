const express = require('express');
const rota = express.Router();

rota.get('/', (_req, _res, _next) =>{
    res.status(200).send({
        message: 'Buscando todos produtos'
    })
})

rota.post('/', (_req, _res, _next) =>{
    res.status(201).send({
        message: 'Usando post produto'
    })
})

rota.delete('/:id_produto', (_req, _res, _next) =>{
    const id_produto = req.params.id_produto
    res.status(201).send({
        message: 'deletando produto',
        id: id_produto
    })
})

rota.patch('/:id_produto', (_req, _res, _next) =>{
    const id_produto = req.params.id_produto
    res.status(201).send({
        message: 'Usando patch produto',
        id: id_produto
    })
})

module.exports = rota
