const express = require('express');
const router = express.Router();

const { handleSignUp } = require('../controllers/signUpController');

router.post('/', handleSignUp);

module.exports = router;
