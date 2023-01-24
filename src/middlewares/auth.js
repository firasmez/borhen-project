
const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
    try {
        const token = req.headers.Authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);
        if (decoded.role === 'admin') {
            next();
        } else {
            res.status(403).send('This is for admins only')
        }
    } catch (error) {

    }
}


const isUser = (req, res, next) => {
    try {
        const token = req.headers.Authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);
        if (decoded.role === 'user') {
            next();
        } else {
            res.status(403).send('This is for users only')
        }
    } catch (error) {

    }
}


const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.Authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        next();
    } catch (error) {
        res.status(401).send('You have to be authenticated')

    }
}

module.exports = {
    isUser,
    isAdmin,
    isAuthenticated,
}