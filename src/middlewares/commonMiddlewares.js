const userModel = require("../models/userModel")

const mid1 = function(req, res, next){
    if(!req.headers.isfreeappuser)
    return res.send({msg:"require is missing a mandatory header"})
    if(req.headers.isfreeappuser=="true" || req.headers.isfreeappuser=="false")
    return res.send({msg:"Working Well!"})
    next()
}

module.exports.mid1= mid1;