const express = require('express');
const router = express.Router();

const { postSignUp } = require('../controllers/authController');

router.post('/sign-up', postSignUp);

module.exports = router;
