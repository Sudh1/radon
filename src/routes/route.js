const express = require('express');
const externalmodule = require('../logger/logger.js')
const myHelper = require('../util/helper.js')
const format = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
 console.log(externalmodule.welcome)
myHelper.printDate()
myHelper.printMonth()
myHelper.getBatchInfo()

console.log(format.xyz)
console.log(format.xya)
console.log(format.xyb)

    res.send('My first ever api!')
});

router.get('/hello2', function (req, res) {

    res.send('My hello3  ever api!')
});
router.get('/test-api1', function (req, res) {

    res.send("my first api")
});

router.get('/test-api2', function (req, res) {

    res.send({a: 45,b:46,msg :"hii"})
});
router.post('/test-api3', function (req, res) {
let id = req.body.user
let pwd = req.body.password
console.log(id,pwd)


console.log(req.body)
res.send({ msg: "hii",status: true})
});


module.exports = router;
// adding this comment for no reason