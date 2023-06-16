const express = require('express')
require('dotenv').config() //da acesso as variaveis de ambiente dentro do aruqivo .env
const fs = require('fs')
const routerAPI2 = express.Router()

const knexConfig = require('../knexfile')


// const produtos = [
//     { id: 1, descricao: "Arroz", preco: "R$ 20,00" },
//     { id: 2, descricao: "Feijao", preco: "R$ 25,00" }
// ]

// Conexao com o Bnaco
const knex = require('knex')(knexConfig.staging);

routerAPI2.get(`/produtos`, (req, res) => {
    knex('produtos')
        .then((dados) => {
            res.json(dados)
        })
        .catch((err) => {
            res.json({ message: `Erro ao obter produtos: ${err.message}` })
        })
})

routerAPI2.get(`/produtos/:id`, (req, res) => {
    let produto = produtos.find(p => p.id == req.params.id)
    res.json(produto)
})

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
    let produto = produtos.find(p => p.id == req.params.id)
    let body = req.body
    if (produto) {
        produto.descricao = body.descricao
        produto.valor = body.valor
        produto.marca = body.marca
    }

    res.send(201)
        .json({
            messagem: "Produto adicionado com sucesso",
            data: { id: req.body.id }
        })
})


routerAPI2.delete(`/produtos/:id`, (req, res) => {
    const index = produtos.findIndex(obj => obj.id == req.params.id);
    if (index !== -1) {
        produtos.splice(index, 1)
        res.send('Produto deletado')
    } else {
        console.log("Produto nao encontrado nao encotrado");
    }
})


module.exports = routerAPI2;