const express = require('express');
const routeProduto = require('./routes/produtos')
const app = express() // instancia do express


app.use('/produtos', routeProduto)


module.exports = app //exportando aplicação