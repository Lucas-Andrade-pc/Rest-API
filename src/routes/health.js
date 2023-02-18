const express = require('express');
const rota = express.Router();

rota.get('/', (_req, _res, _next) =>{
    _res.status(200).send({
        message: 'Aplicação Ok'
    })
})

module.exports = rota
