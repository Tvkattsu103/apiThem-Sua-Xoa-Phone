const mongoose = require('mongoose');
const PhoneSchema = new mongoose.Schema({
    phoneNumber:{
        type:String,
        required:true
    },
    owner:{
        type:String
    },
    email:{
        type:String
    },
    adress:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }
});

const Phone = mongoose.model('Phone', PhoneSchema);
module.exports = Phone;