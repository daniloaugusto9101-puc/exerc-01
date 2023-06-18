//Framework rotas e servidor
const express = require('express')
const morgan = require('morgan')
const app = express()
const END_POINT_V2 = process.env.END_POINT_V2 //recupera end point v2 do arquivo .env
const routerAPI2 = require('./routes/routerAPI2') // arquivos de rotas V1

// para utilizar variaveis de ambiente
require('dotenv').config();

//aceita corpo json
app.use(express.json())

// Para criação de logs
app.use(morgan('common'))

// variaveis da API
app.use('/api/v2', routerAPI2)

module.exports = app;