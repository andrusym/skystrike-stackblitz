
const express = require('express');
const router = express.Router();
const { getJournalData } = require('../controllers/journalController');

router.get('/', getJournalData);

module.exports = router;
