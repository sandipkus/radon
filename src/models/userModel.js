const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : {
        type:String,
        require:true,
        unique:true
    },
    password : {
        type:String,
        require:true,
    },
    gender : {
        type:String,
        enum:["male", "female", "LGBT"],
    },
	isDeleted: {
        type:Boolean,
        default:false
    },
    age :Number,
}, { timestamps: true });

module.exports = mongoose.model('JWTuser', userSchema)
