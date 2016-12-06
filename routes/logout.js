// logout.js

var express = require('express');
var router = express.Router();
// var User = require("../modules/users.js");
var TITLE_REG = '登录';

router.get('/logout', function (req, res, next) {
    if (req.session) {
        req.session.user = undefined
    }
    req.isLogin = undefined;
    res.redirect('/');
    next();
})

module.exports = router;