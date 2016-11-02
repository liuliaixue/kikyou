var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log(req.session);

    if (req.session.isLogin) {
        res.end(JSON.stringify({
        	result: "already login"
        }))
    }else{
    	res.cookie("isLogin","YES");
    	res.end(JSON.stringify({
        	error: "please login"
        }))
    }

});

// router.post('/', function(req, res) {
//     if (req.session) {
//         req.session.islogin = 'success';
//         res.locals.islogin = req.session.islogin;

//     }
//     res.render('usesession', { title: '使用session示例' });
// });

module.exports = router;
