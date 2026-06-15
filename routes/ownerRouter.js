const express = require('express');
const ownerModel = require('../models/ownerModel');
const bcrypt = require('bcrypt');
const router = express.Router();

if(process.env.NODE_ENV ==='development'){
router.post('/create', async (req,res)=>{
    let owners = await ownerModel.find();
    if(owners.length > 0){
        return res.status(503).send("you don't have permission to create new owner");
    }else{
        let {name ,email , password} = req.body ;
        let hash = await bcrypt.hash(password,10);
        let createdOwner = await ownerModel.create({
            name ,
            email ,
            password : hash
        });
        return res.status(200).send(createdOwner);
    }
});

}
router.get('/',function (req,res){
    res.send("HELLO");
});

router.get('/adminpanel',(req,res )=>{
    let success = req.flash('success');
    res.render('createproducts',{success});
})
module.exports = router ;