const productmodel = require("../models/productmodel")

const createProduct = async function(req, res){
    let data= req.body;
    let saveData =await productmodel.create(data)
    res.send({msg:saveData})
}

module.exports.createProduct= createProduct;