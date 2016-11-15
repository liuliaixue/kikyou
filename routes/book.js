var express = require('express');
var router = express.Router();

router.get('/addBook',function(req,res,next){
    console.log(__dirname);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    console.log(111333);
    res.send(req.params);  
})

module.exports = router;