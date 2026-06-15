const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const dbgr = require('debug')("development:userRoute");
const {genToken ,getTokenData}= require('../utils/jwtFunction');
const {verifyPassword , hashPassword} = require('../utils/bcryptFunction');

async function  registerUser(req, res){
    try{
        let {email , password , fullname } = req.body;
        let findUser = await userModel.findOne({email});
        if(findUser){
            res.status(304).send("YOu alredy have an account please log in");
        }else{
            let hash = await hashPassword(password);
            let createdUser = await userModel.create({
                email , fullname , password : hash
            });
            if(createdUser){
                let token = genToken(createdUser);
                res.cookie('token',token);   
                res.status(201).send(createdUser);
            }else{
                res.status(500).send("Failed");
                res.status(500).send(err.message);
            }
        }
        
    }catch(err){
        dbgr(err.message);
        res.status(500).send("Error");
    }
}


async function  loginUser(req, res){
    try{
        let {email , password } = req.body;
        let user = await userModel.findOne({email});
        if(user){
            let verify = await verifyPassword(password , user.password);
            if(verify){
                let token = genToken(user);
                res.cookie('token',token);
                res.status(200).send("LOGGED IN");
            }else{
                res.send("Email or password Incorrect");
            }
        }else{
            res.send("Email or password Incorrect");
        }
    }catch(err){
        dbgr(err.message);
        res.status(500).send("Error");
    }
}


module.exports = {registerUser , loginUser};