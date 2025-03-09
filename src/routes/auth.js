const express = require('express')
const  { registerUser } = require('../controllers/authController');
const { getSocial } = require('../controllers/socialController');

const router = express.Router();

router.route('/register').post(registerUser)
router.route('/social').post(getSocial);

module.exports = router;