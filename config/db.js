const mongoose = require('mongoose');

function connectDb(){
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to DB");
    }catch(err){
        console.log(err);
        console.log("Not connected to DB");
    }
}

module.exports = connectDb ;