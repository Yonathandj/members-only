const express = require('express');
const router = express.Router();

const handleSignUp = require('../controllers/signUp');

router.post('/', handleSignUp);

module.exports = router;
