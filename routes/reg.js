// reg.js

var express = require('express');
var router = express.Router();
var User = require("../modules/users.js");
var TITLE_REG = '注册';


router.get('/', function(req, res, next) {

    console.log("register routes success");

    // res.end(JSON.stringify(req.query));
    var newUser = new User(req.query);
    User.getUserNumByName(newUser.username, function(err, results) {

        if (results != null && results[0]['num'] > 0) {
            err = '用户名已存在';
        }

        if (err) {
            // res.locals.error = err;
            // res.render('reg', { title: TITLE_REG });
            res.end(JSON.stringify({ error: err }));
            return;
        }

        newUser.save(function(err, result) {
            if (err) {
                // res.locals.error = err;
                // res.render('reg', { title: TITLE_REG });
                res.end(JSON.stringify({ error: err }));
                return;
            }

            if (result.insertId > 0) {
                // res.locals.success = '注册成功,请点击   <a class="btn btn-link" href="/login" role="button"> 登录 </a>';
                console.log("注册成功！");
                res.end(JSON.stringify({ result: result }))
            } else {
                // res.locals.error = err;
                res.end(JSON.stringify({ error: err }))
            }

            // res.render('reg', { title: TITLE_REG });
            res.end(JSON.stringify({ result: result }))
        });
    });


});

module.exports = router;
