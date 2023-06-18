// https://app-danilo.herokuapp.com/api/v2/

// pacote necessário para a API
const express = require('express') //Framework rotas e servidor
const app = express()
const morgan = require('morgan') // para criação de logs
require('dotenv').config() //da acesso as variaveis de ambiente dentro do aruqivo .env


// variaveis da API
const PORT = process.env.PORT || 3333 //recupera porta do arquivo .env 

app.use(express.json()) //aceita corpo json
app.use(morgan('common')) //criar log da API

// Dados de acesso apiV1
const endPoint1 = '/api/v1' // define a variavel padrao do endPoint
const routerAPI1 = require('./routes/routerAPI1') // arquivos de rotas V1
app.use(endPoint1, routerAPI1)

// Dados de acesso apiV2
const endPoint2 = '/api/v2' // define a variavel padrao do endPoint
const routerAPI2 = require('./routes/routerAPI2') // arquivos de rotas V1
app.use(endPoint2, routerAPI2)

app.use('/', (req, res) => {
    res.status(200)
    res.send(`Bem vindo a minha API, acesse: \n ${endPoint2}/produtos`)
})

// Inicializa o servidor
app.listen(PORT, () => console.log(`Servidor rodando com sucesso na porta: ${PORT}`))