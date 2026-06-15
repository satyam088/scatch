const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    filename : String ,
    originalname : String ,
    mimetype : String ,
    path : String ,
    size : Number ,
    createdAt : {
        type : Date,
        default : Date.now,
    }
});

module.exports = mongoose.model('image',imageSchema);