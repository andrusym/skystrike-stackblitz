
const express = require('express');
const router = express.Router();
const { getAdminData } = require('../controllers/adminController');

router.get('/', getAdminData);

module.exports = router;
