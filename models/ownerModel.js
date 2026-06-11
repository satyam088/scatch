const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String ,
    email : String ,
    password : String ,
    products : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'product'
        }
    ],
    contactNo : Number ,
    picture : String ,
    gstin : String ,
});

module.exports = mongoose.model('user',userSchema , 'users');
