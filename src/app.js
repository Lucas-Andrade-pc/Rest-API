const express = require('express');
const routeProduto = require('./routes/produtos')
const routPedido = require('./routes/pedido')
const routeH = require('./routes/health')
const app = express() // instancia do express



app.use('/produtos', routeProduto)
app.use('/pedido', routPedido)
app.use('/health', routeH)

module.exports = app //exportando aplicação
