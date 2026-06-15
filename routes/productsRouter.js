const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const upload = require('../config/multerConfig');
const productModel = require('../models/productModel');


router.get('/',function (req,res){
    res.send("HELLO");
});

router.post('/create', upload.single('image') , async(req,res)=>{
    try{let {
        name ,
        price ,
        discount ,
        bgcolor ,
        panelcolor ,
        textcolor 
       
    } = req.body ;
   let product =  await productModel.create({
       image : req.file.buffer,
       name ,
       price ,
       discount ,
       bgcolor ,
       panelcolor,
       textcolor
   });
   req.flash("success","Product created successlfully");
   res.redirect('/owners/adminpanel');
    }catch(err){
        res.send(err.message);
    }
});

module.exports = router ;