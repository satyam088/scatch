const {genToken, getTokenData} = require('../utils/jwtFunction');
const userModel = require('../models/userModel');

async function isLoggedIn(req, res , next){
    if(!req.cookies.token){
        req.flash("error","YOu Need to login first");
        return res.redirect('/');
    }

    try{
        let data = getTokenData(req.cookies.token);
        let user = await userModel
        .findOne({email : data.email})
        .select("-password");
        req.user = user ;
        return next();
    }catch(err){
        req.flash("error","something went wrong");
        return res.redirect('/');
    }
}

module.exports = isLoggedIn ; 