const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fName:{
        type:String, required:[true, 'must required first name'], 
        trim: true,
    },
    mName:{
        type:String, required:[true, 'must required middle name'], 
        trim: true,
    },
    lName:{
        type:String, required:[true, 'must required last name'], 
        trim: true,
    },
    email:{
        type:String, required: [true, "must required email"],
        trim: true, unique: true
    },
    password:{
        type:String, required: [true, "must required password"],
        trim: true, minlength:[8, "upassword atleast have 8 characters"]
    },
    cPassword:{
        type:String, required: [true, "must required password"],
        trim: true, minlength:[8, "upassword atleast have 8 characters"]
    },
    gender:{
        type: String
    },
    degignation:{
        type: String
    },
    address:{
        type: String, maxlength:[250, 'address must be below 250 words!']
    },
    adminId:{
        type: String
    }

},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);