const express = require('express');
const rota = express.Router();

rota.get('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando get'
    })
})

rota.post('/', (req,res,next) =>{
    res.status(201).send({
        message: 'Usando post'
    })
})

module.exports = rota