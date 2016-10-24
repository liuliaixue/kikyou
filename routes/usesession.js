var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log(req.session);

    if (req.session) {
        res.locals.islogin = req.session.islogin;
    }

    res.render('usesession', { title: '使用session示例' });
});

router.post('/', function(req, res) {
    if (req.session) {
        req.session.islogin = 'success';
        res.locals.islogin = req.session.islogin;

    }
    res.render('usesession', { title: '使用session示例' });
});

module.exports = router;
