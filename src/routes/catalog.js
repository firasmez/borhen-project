const express = require('express');
const router = express.Router();

const catalogController = require('../controllers/catalog');
const authMiddleware = require('../middlewares/auth')

router.get('/', authMiddleware.isAuthenticated, catalogController.getCatalogs);
router.post('/', authMiddleware.isUser, catalogController.createCatalogs);
router.put('/', authMiddleware.isAdmin, catalogController.updateCatalogs);


module.exports = router;