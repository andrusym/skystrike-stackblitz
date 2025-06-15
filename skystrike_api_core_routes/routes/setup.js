
const express = require('express');
const router = express.Router();
const { getSetupData } = require('../controllers/setupController');

router.get('/', getSetupData);

module.exports = router;
