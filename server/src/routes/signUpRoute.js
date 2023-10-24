const express = require('express');
const router = express.Router();

const { signUpNewuser } = require('../controllers/signUpController');

router.post('/', signUpNewuser);

module.exports = router;
