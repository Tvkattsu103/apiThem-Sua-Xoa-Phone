// const mongoose = require('mongoose');
const mongoose = require('../db')(); //nguyên nhân lỗi uri
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
    phoneNumber:{
        type:String
        // minLength: 9,
        // maxLength: 12,
        // required:true
    },
    owner:{
        type:String
    }
    // email:{
    //     type:String
    // },
    // adress:{
    //     type:String
    // },
    // date:{
    //     type:Date,
    //     default: Date.now
    // }
});

const Phone = mongoose.model('Phone', PhoneSchema);
module.exports = Phone;