//Framework rotas e servidor
const express = require('express')
const app = express()

// para utilizar variaveis de ambiente
require('dotenv').config();

//aceita corpo json
app.use(express.json())

// Para criação de logs
const morgan = require('morgan')
app.use(morgan('common'))


// variaveis da API
const END_POINT_V2 = process.env.END_POINT_V2 //recupera end point v2 do arquivo .env 
const routerAPI2 = require('./routes/routerAPI2') // arquivos de rotas V1
app.use(END_POINT_V2, routerAPI2)


module.exports = app;