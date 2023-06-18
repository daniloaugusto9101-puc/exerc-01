const express = require('express')
require('dotenv').config() //da acesso as variaveis de ambiente dentro do aruqivo .env
const fs = require('fs')
const routerAPI2 = express.Router()

const knexConfig = require('../knexfile')


// Conexao com o Bnaco
const knex = require('knex')(knexConfig.staging);

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
});

routerAPI2.get(`/produtos/:id`, (req, res) => {
    const { id } = req.params;

    knex('produtos')
        .select()
        .where({ id })
        .then((dados) => {
            if (dados.length > 0) {
                res.status(200)
                    .json({
                        message: "Produto obtido com sucesso",
                        data: dados[0]
                    });
            } else {
                res.status(404)
                    .json({
                        message: "Produto não encontrado"
                    });
            }
        })
        .catch((err) => {
            res.json({ message: `Erro ao obter o produto: ${err.message}` });
        });
});


routerAPI2.post(`/produtos`, (req, res) => {
    knex('produtos')
        .insert(req.body, ['id'])
        .then((dados) => {
            if (dados.length > 0) {
                const id = dados[0].id
                res.status(201)
                    .json({
                        message: "Produto adicionado com sucesso",
                        data: { id }
                    })
            }
        })
        .catch((err) => {
            res.json({ message: `Erro ao adicionar o produto: ${err.message}` })
        })
})


routerAPI2.put(`/produtos/:id`, (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    knex('produtos')
        .where({ id })
        .update(updatedData)
        .then(() => {
            res.status(200)
                .json({
                    message: "Produto atualizado com sucesso"
                });
        })
        .catch((err) => {
            res.json({ message: `Erro ao atualizar o produto: ${err.message}` });
        });
});



routerAPI2.delete(`/produtos/:id`, (req, res) => {
    const { id } = req.params;

    knex('produtos')
        .where({ id })
        .del()
        .then(() => {
            res.status(200)
                .json({
                    message: "Produto removido com sucesso"
                });
        })
        .catch((err) => {
            res.json({ message: `Erro ao remover o produto: ${err.message}` });
        });
});



module.exports = routerAPI2;