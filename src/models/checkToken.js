const jwt = require('jsonwebtoken');
require('dotenv').config() //da acesso as variaveis de ambiente dentro do arquivo .env

const checkTokenController = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        else {
            req.id = decoded.id;
            req.roles = decoded.roles;
            next()
        }
    })
}

module.exports = checkTokenController;