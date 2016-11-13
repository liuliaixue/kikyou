var express = require('express');
var router = express.Router();

router.post('/addBook',function(req,res,next){
    console.log(req.query);
    console.log(req.params);
    console.log(req.body)
    res.send(req.params);  
})

module.exports = router;