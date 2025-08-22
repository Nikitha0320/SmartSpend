const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.home);
router.get('/expenses', ctrlMain.expenses);
router.get('/budget', ctrlMain.budget);
router.get('/login', ctrlMain.login);

module.exports = router;
