//login.js

var express = require('express');
var router = express.Router();
var User = require("../modules/users.js");
var TITLE_REG = '登录';

router.get('/', function(req, res, next) {
	console.log("login login");
})

module.exports = router;