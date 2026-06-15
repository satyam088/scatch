const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/',function (req,res){
    res.send("HELLO");
});

module.exports = router ;