const express = require('express');
const rota = express.Router();

rota.get('/', (_req, _res, _next) =>{
    res.status(200).send({
        message: 'Buscando pedido'
    })
})

module.exports = rota
