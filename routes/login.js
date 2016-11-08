//login.js

var express = require('express');
var router = express.Router();
var User = require("../modules/users.js");
var TITLE_REG = '登录';

var check_login = require('./check_login.js');

router.get('/',check_login, function(req, res, next) {
    console.log("已登录！");
    console.log("login route success");
    var user = new User(req.query);
    User.userLogin(user.username,user.userpass, function(error, result) {
        console.log(error);
        console.log(result);
        if (error) {
            res.end(JSON.stringify({
                error: error
            }));
        } else {
        	if(result.length){
                if (req.session) {
                    req.session.islogin = 'success';
                    // res.locals.islogin = req.session.islogin;
                }
        		res.end(JSON.stringify({
        			result:result,

        		}))
        	}
        	res.end(JSON.stringify({
                error: "用户名或密码错误！"
            }));


            
        }
    })
})

module.exports = router;
