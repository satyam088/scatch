let jwt = require('jsonwebtoken');

function genToken(user){
    let token = jwt.sign({email : user.email , id: user._id},process.env.JWT_KEY);
    return token;
}

function getTokenData(token){
    let data= jwt.verify(token , process.env.JWT_KEY);
    return data ;
}
module.exports = {genToken  ,getTokenData};