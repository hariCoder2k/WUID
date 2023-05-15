const mongoose = require('mongoose');

const user = mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

const User = module.exports = mongoose.model('Donor', user);

