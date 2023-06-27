
// Conexao com o Banco
const knexConfig = require('../models/knexfile')
const knex = require('knex')(knexConfig.development);

const getAll = (req, res) => {
    console.log(req.id, req.roles);
    const produtos = knex('produtos')
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
    return produtos
};

const getById = (req, res) => {
    const { id } = req.params;
    const produtos = knex('produtos')
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
    return produtos
};

const postProduto = (req, res) => {
    const { id } = req.params;
    const produtos = knex('produtos')
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
    return produtos
};

const putProduto = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    const produtos = knex('produtos')
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
    return produtos
};

const deleteProduto = (req, res) => {
    const { id } = req.params;

    const produtos = knex('produtos')
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
    return produtos
};


module.exports = {
    getAll,
    getById,
    postProduto,
    putProduto,
    deleteProduto,
}