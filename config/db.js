const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");
function connectDb(){
    try{
        mongoose.connect(process.env.MONGODB_URL);
        dbgr("Connected to DB");
    }catch(err){
        dbgr(err);
        dbgr("Not connected to DB");
    }
}

module.exports = connectDb ;