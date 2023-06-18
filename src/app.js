//Framework rotas e servidor
const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config(); // para utilizar variaveis de ambiente

const routerAPI2 = require('./routes/routerAPI2') // arquivos de rotas V2
const END_POINT_V2 = process.env.END_POINT_V2 //recupera end point v2 do arquivo .env 


//aceita corpo json
app.use(express.json())

// Para criação de logs
app.use(morgan('common'))

// variaveis da API
app.use(END_POINT_V2, routerAPI2)

module.exports = app;