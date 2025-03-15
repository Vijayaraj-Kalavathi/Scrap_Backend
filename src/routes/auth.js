const express = require('express')
const  { registerUser, loginUser } = require('../controllers/authController');
const { getSocial } = require('../controllers/socialController');
const { PostProduct, GetProductAll, UpdateSingleProduct } = require('../controllers/productController');

const router = express.Router();

router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/social').post(getSocial);
router.route('/post/product').post(PostProduct);
router.route('/get/product').post(GetProductAll);
router.route('/update/product').post(UpdateSingleProduct);

module.exports = router;