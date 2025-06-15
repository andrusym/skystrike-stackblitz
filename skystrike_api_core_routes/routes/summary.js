
const express = require('express');
const router = express.Router();
const { getSummaryData } = require('../controllers/summaryController');

router.get('/', getSummaryData);

module.exports = router;
