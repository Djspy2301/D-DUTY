const mongoose = require('mongoose');

const HostSchema = new mongoose.Schema({
    user:{
        type:String,
        required: [true, "must required user name"],
        trim: true,
        maxlength:[20, "username must be within 20 characters"]
    },
    email:{
        type:String,
        required: [true, "must required email"],
        trim: true
    },
    password:{
        type:String,
        required: [true, "must required password"],
        trim: true,
        minlength:[8, "upassword atleast have 8 characters"]
    }
})

module.exports = mongoose.model('Host', HostSchema);