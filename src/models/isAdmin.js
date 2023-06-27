const isAdmin = (req, res, next) => {
    if (req.roles.indexOf('ADMIN') >= 0) {
        next()
    }
    else {
        return res.status(403).json({ message: 'Acesso negado' })
    }
}

module.exports = isAdmin;