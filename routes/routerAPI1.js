const express = require('express')
const fs = require('fs')
const routerAPI = express.Router()


const produtos = [
    { id: 1, descricao: "Arroz", preco: "R$ 20,00" },
    { id: 2, descricao: "Feijao", preco: "R$ 25,00" }
]

routerAPI.get(`/produtos`, (req, res) => {
    res.status(200)
    res.json(produtos)
})

routerAPI.get(`/produtos/:id`, (req, res) => {
    let produto = produtos.find(p => p.id == req.params.id)
    res.json(produto)
})

routerAPI.post(`/produtos`, (req, res) => {
    req.body.id = produtos.length + 1
    produtos.push(req.body)
    res.send(201)
        .json({
            messagem: "Produto adicionado com sucesso",
            data: { id: req.body.id }
        })
})


routerAPI.put(`/produtos/:id`, (req, res) => {
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


routerAPI.delete(`/produtos/:id`, (req, res) => {
    const index = produtos.findIndex(obj => obj.id == req.params.id);
    if (index !== -1) {
        produtos.splice(index, 1)
        res.send('Produto deletado')
    } else {
        console.log("Produto nao encontrado nao encotrado");
    }
})


module.exports = routerAPI;