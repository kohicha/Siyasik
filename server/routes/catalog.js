const express = require('express')
const router = express.Router();
const{ isLoggedIn } = require('../middleware/checkAuth')
const catalogController = require('../controllers/catalogController')


/**
 * Router
 */

router.get('/catalog', isLoggedIn , catalogController.catalog)

module.exports = router;