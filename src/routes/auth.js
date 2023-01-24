const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.post('/signup', authController.signup);
router.post('/signup-admin', authController.signupAdmin);

router.post('/login', authController.login);


module.exports = router;