
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const tokenExpiryTime = 60 * 60  // 1 hour



const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;

        const hash = await bcrypt.hash(password, saltRounds);
        const response = await UserModel.create({ firstName, lastName, username, password: hash, role: 'user' });

        res.status(201).send(response);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send({ error });
    }
}

const signupAdmin = async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;

        const hash = await bcrypt.hash(password, saltRounds);
        const response = await UserModel.create({ firstName, lastName, username, password: hash, role: 'admin' });

        res.status(201).send(response);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send({ error });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username: username });
        const hash = user.password;
        const passwordResult = await bcrypt.compare(password, hash);

        if (passwordResult) {
            const token = jwt.sign({ role: user.role, id: user._id, username: user.username }, process.env.JWT_KEY, { expiresIn: tokenExpiryTime });
            res.send({ token });
        } else {
            res.status(400).send('Username or password is incorrect.')
        }

        res.send('ok');

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send({ error });
    }
}



module.exports = {
    signup,
    signupAdmin,
    login,
}