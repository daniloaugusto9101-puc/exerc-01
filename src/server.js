// Versão: API V2
// https://app-danilo.herokuapp.com/api/v2/

const app = require('./app');
require('dotenv').config() //da acesso as variaveis de ambiente dentro do arquivo .env
const PORT = process.env.PORT || 3333 //recupera porta do arquivo .env 

const END_POINT_V1 = process.env.END_POINT_V1 //recupera end point V1 do arquivo .env 
const END_POINT_V2 = process.env.END_POINT_V2 //recupera end point V2 do arquivo .env 

app.use('/', (req, res) => {
    res.status(200)
    res.send(`Bem vindo a minha API, acesse: \n ${END_POINT_V1}/produtos`)
})

app.use('/', (req, res) => {
    res.status(200)
    res.send(`Bem vindo a minha API, acesse: \n ${END_POINT_V2}/produtos`)
})

// Inicializa o servidor
app.listen(PORT, () => console.log(`Servidor rodando com sucesso na porta: ${PORT}`))