const http = require('http');
const port = process.env.PORT || 3000 // caso a variavel de ambiente nao tenha sido preenchida, subi na porta 3000
const app = require('./app') // importando aplicação feita em app

//criando server
const server = http.createServer(app);

server.listen(port);