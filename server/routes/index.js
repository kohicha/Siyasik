const express = require('express')
const router = express.Router();
const mainController = require('../controllers/mainController')



/**
 * Main Routing
 */

router.get('/', mainController.homepage);
router.get('/dashboard', mainController.dashboard);





module.exports = router;