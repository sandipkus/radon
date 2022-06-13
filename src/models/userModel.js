const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    _id:String,
    name: String,
	balance:{
        type:Number,
        default:100
    },
	address:String,
	age: Number,
 	gender:{
        type:String,
        enum:["male", "female", "other"],
    }, 
	isFreeAppUser:{
        type:Boolean,
        default:false
    } // Default false value.

}, { timestamps: true });

module.exports = mongoose.model('User1', userSchema)
