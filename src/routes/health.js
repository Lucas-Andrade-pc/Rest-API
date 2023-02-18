const express = require('express');
const rota = express.Router();

rota.get('/health', (_req, _res, _next) =>{
    res.status(200).send({
        message: 'Aplicação Ok'
    })
})

module.exports = rota
