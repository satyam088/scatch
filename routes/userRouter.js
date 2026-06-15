const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const dbgr = require('debug')("development:userRoute");
const {registerUser , loginUser} = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/',function (req,res){
    res.send("HELLO");
});


router.post('/register',registerUser);

router.post('/login',loginUser);

module.exports = router ;