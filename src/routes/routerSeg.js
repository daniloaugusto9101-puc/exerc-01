const express = require('express');
const routerSeg = express.Router();
const jwt = require('jsonwebtoken');

const knexConfig = require('../models/knexfile')
const knex = require('knex')(knexConfig.development);

require('dotenv').config()

routerSeg.post('/login', (req, res) => {
    let { login, senha } = req.body
    // senha = bcrypt.hashSync(senha, 10)
    knex('usuarios').where({ 'login': login })
        .then((dados) => {
            if (dados.length > 0) {
                if (dados[0].senha != senha) {
                    res.status(401).json({ message: 'usuario ou senha inválidos' })
                } else {
                    jwt.sign({ userID: dados[0].id, roles: dados[0].roles },
                        process.env.SECRET_KEY,
                        { algorithm: 'HS256' },
                        (err, token) => {
                            if (err)
                                res.status(500).json({ message: `Erro ao criar o token: ${err.message}` });
                            else
                                res.status(200).json(`Autenticação realizado com sucesso sucesso, token: ${token}`)
                        })
                }
            } else {
                res.status(401).json({ message: 'usuario ou senha inválidos' })
            }
        })
        .catch((err) => {
            res.status(500).json({ message: `Erro ao obter o usuario: ${err.message}` })
        })
})


module.exports = routerSeg;