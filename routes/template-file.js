var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('template-file', {
        name: "luojia"
    });
});

module.exports = router;