const express = require('express');
const rota = express.Router();

rota.get('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Aplicação Ok'
    })
})

module.exports = rota