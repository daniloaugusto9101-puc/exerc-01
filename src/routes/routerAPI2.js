const express = require('express')
const produtosController = require('../controllers/produtosController');
const checkToken = require('../models/checkToken');
const isAdmin = require('../models/isAdmin');
const routerAPI2 = express.Router()

routerAPI2.get('/produtos', checkToken, produtosController.getAll);
routerAPI2.get('/produtos/:id', checkToken, produtosController.getById);
routerAPI2.post('/produtos', checkToken, isAdmin, produtosController.postProduto);
routerAPI2.put('/produtos/:id', checkToken, isAdmin, produtosController.putProduto);
routerAPI2.delete('/produtos/:id', checkToken, isAdmin, produtosController.deleteProduto);


module.exports = routerAPI2;