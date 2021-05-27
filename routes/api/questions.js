const express = require('express');
const router = express.Router();
const questionsCtrl = require('../../controllers/api/questions');

// POST /api/users
router.get('/', questionsCtrl.random);
router.get('/seed', questionsCtrl.seedDefault);

module.exports = router;