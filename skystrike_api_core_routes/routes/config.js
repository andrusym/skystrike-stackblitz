
const express = require('express');
const router = express.Router();
const { getConfigData } = require('../controllers/configController');

router.get('/', getConfigData);

module.exports = router;
