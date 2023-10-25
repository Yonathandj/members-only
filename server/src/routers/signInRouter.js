const express = require('express');
const passport = require('passport');
const router = express.Router();

const { handleLoginAuthentication } = require('../controllers/signInController');

router.post("/", passport.authenticate('local'), handleLoginAuthentication)

module.exports = router;