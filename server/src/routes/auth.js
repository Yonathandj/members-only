const express = require('express');
const router = express.Router();

const { handleSignUp } = require('../controllers/auth');

router.post('/sign-up', handleSignUp);

module.exports = router;
