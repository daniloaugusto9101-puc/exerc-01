// pacote necessário para a API
const express = require('express') //Framework rotas e servidor
const app = express()
const morgan = require('morgan') // para criação de logs
const routerAPI = require('./routes/router') // arquivos de rotas
require('dotenv').config() //da acesso as variaveis de ambiente dentro do aruqivo .env

// variaveis da API
const PORT = process.env.PORT || 3333 //recupera porta do arquivo .env 
const endPoint = '/api' // define a variavel padrao do endPoint


app.use(express.json()) //aceita corpo json
app.use(morgan('common')) //criar log da API
app.use(endPoint, routerAPI)

app.use('/', (req, res) => {
    res.status(200)
    res.send(`Bem vindo a minha API, acesse: \n /api/produtos`)
})

// app.use((req, res) => {
//     res.status(404)
//     res.send(`Desculpe! Recurso solicitado não existe acesse \n /api/produtos`)
// })


// Inicializa o servidor
app.listen(PORT, () => console.log(`Servidor rodando com sucesso na porta: ${PORT}`))