const express = require('express');
const routeProduto = require('./routes/produtos')
const routPedido = require('./routes/pedido')
const app = express() // instancia do express


app.use('/produtos', routeProduto)
app.use('/pedido', routPedido)

module.exports = app //exportando aplicação