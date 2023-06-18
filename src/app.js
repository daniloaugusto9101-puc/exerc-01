const express = require('express') //Framework rotas e servidor
const app = express()
const router = require('./routes/routerAPI2'); // rotas da API V2

const morgan = require('morgan') // para criação de logs

app.use(express.json()) //aceita corpo json
app.use(morgan('common')) //criar log da API
app.use(router);


// variaveis da API
const END_POINT_V1 = process.env.END_POINT_V1 //recupera end point v2 do arquivo .env 
const END_POINT_V2 = process.env.END_POINT_V2 //recupera end point v2 do arquivo .env 

// Dados de acesso apiV1
const routerAPI1 = require('./routes/routerAPI1') // arquivos de rotas V1
app.use(END_POINT_V1, routerAPI1)

// Dados de acesso apiV2
const routerAPI2 = require('./routes/routerAPI2') // arquivos de rotas V1
app.use(END_POINT_V2, routerAPI2)


module.exports = app;