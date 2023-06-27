//Framework rotas e servidor
const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config(); // para utilizar variaveis de ambiente

const routerAPI1 = require('./routes/routerAPI1') // arquivos de rotas V1
const END_POINT_V1 = process.env.END_POINT_V1 //recupera end point v1 do arquivo .env 

const routerAPI2 = require('./routes/routerAPI2') // arquivos de rotas V2
const END_POINT_V2 = process.env.END_POINT_V2 //recupera end point v2 do arquivo .env 

const routerSeg = require('./routes/routerSeg') // arquivos de rotas LOGIN
const END_POINT_SEG = process.env.END_POINT_SEG //recupera end point v2 do arquivo .env 


//aceita corpo json
app.use(express.json())

// Para criação de logs
app.use(morgan('common'))


app.use(END_POINT_V1, routerAPI1)
app.use(END_POINT_V2, routerAPI2)
app.use(END_POINT_SEG, routerSeg)

module.exports = app;