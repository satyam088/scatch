const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name : String ,
    email : String ,
    password : String ,
    products : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'product'
        }
    ],
    gstin : String ,
});

module.exports = mongoose.model('owner',ownerSchema , 'owners');
