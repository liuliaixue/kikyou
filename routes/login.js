//login.js

var express = require('express');
var router = express.Router();
var User = require("../modules/users.js");
var TITLE_REG = '登录';

// var check_login = require('./check_login.js');

router.get('/login', function(req, res, next) {
    console.log("login route success");
    var user = new User(req.query);
    User.userLogin(user.username,user.userpass, function(error, result) {
        if (error) {
            res.send(JSON.stringify({
                error: error
            }));
        } else {
        	if(result.length){
                if (req.session) {
                    req.session.islogin = 'success';
                    console.log(result);
                    req.session.user = result;
                }
        		res.send(JSON.stringify({
        			result:result,

        		}))
        	}else{
                res.send(JSON.stringify({
                    error: "用户名或密码错误！"
                }));
            }

        }
        next();
    })
})

module.exports = router;
