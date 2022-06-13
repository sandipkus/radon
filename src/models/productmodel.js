const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    _id:String,
	name:String,
	category:String,
	price:{
        type:Number,
        require:true,
    }
},{timestamps:true});

module.export = mongoose.model('Product', productSchema);