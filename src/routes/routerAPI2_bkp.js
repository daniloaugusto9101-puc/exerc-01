
// Conexao com o Banco
const knexConfig = require('../models/knexfile')
const knex = require('knex')(knexConfig.production);

const express = require('express')
const routerAPI2 = express.Router()

routerAPI2.get(`/produtos`, (req, res) => {
    knex('produtos')
        .select()
        .then((dados) => {
            res.status(200)
                .json({
                    message: "Produtos obtidos com sucesso",
                    data: dados
                });
        })
        .catch((err) => {
            res.json({ message: `Erro ao obter os produtos: ${err.message}` });
        });
})


module.exports = routerAPI2;