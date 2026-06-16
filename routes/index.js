const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/productModel');
const userMOdel = require('../models/userModel');

router.get('/',(req , res)=>{
    let error = req.flash('error');
    res.render('index' , {error , loggedin : false });
});

router.get('/shop', isLoggedIn , async function(req, res){
    let products = await productModel.find();
    let success = req.flash('success');
    res.render('shop' , {products , success});
});
router.get('/addtocart/:productid',isLoggedIn , async (req, res)=>{
    let user = await userMOdel.findOne({email : req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success","Added to cart");
    res.redirect('/shop');
});

router.get('/cart',isLoggedIn , async (req, res)=>{
    // let productsid = req.user.cart ;
    // let products = await Promise.all(
    //     productsid.map(id =>{
    //         return productModel.findById(id);
    //     })
    // );
    
    let user = await userMOdel
    .findOne({email : req.user.email})
    .populate('cart');

    res.render('cart',{user});
});
module.exports = router ;
