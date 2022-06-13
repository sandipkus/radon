const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productController = require("../controllers/productController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser",commonMW.mid1, UserController.createUser)

router.post("/createProduct", productController.createProduct )


module.exports = router;