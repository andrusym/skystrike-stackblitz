
const express = require('express');
const router = express.Router();
const { getWealthData } = require('../controllers/wealthController');

router.get('/', getWealthData);

module.exports = router;
