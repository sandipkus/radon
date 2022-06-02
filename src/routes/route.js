const express = require('express');
const externalmodule = require('../logger/logger')
const externalmodule1 = require('../util/helper')
const externalmodule2 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalmodule.welcome()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    externalmodule1.printDate()
    externalmodule1.printMonth()
    externalmodule1.getBatchInfo()
    res.send('My 2nd ever api!')
});

router.get('/test-me2', function(req, res){
    externalmodule2.trim();
    externalmodule2.changetoLowerCase();
    externalmodule2.changetoUpperCase();
    res.send('my 3rd ever api!')
})

module.exports = router;
// adding this comment for no reason