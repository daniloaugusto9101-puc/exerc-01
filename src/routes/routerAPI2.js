const express = require('express')
const produtosController = require('../controllers/produtosController');
const routerAPI2 = express.Router()


routerAPI2.get('/produtos', produtosController.getAll);
routerAPI2.get('/produtos/:id', produtosController.getById);
routerAPI2.post('/produtos', produtosController.postProduto);
routerAPI2.put('/produtos/:id', produtosController.putProduto);
routerAPI2.delete('/produtos/:id', produtosController.deleteProduto);


module.exports = routerAPI2;