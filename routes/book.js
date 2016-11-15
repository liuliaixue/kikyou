var express = require('express');
var router = express.Router();
var Book = require('../modules/book.js');

router.post('/addBook',function(req,res,next){
    // console.log(__dirname);
    // console.log(req.params);
    // console.log(req.body);
    // res.send(req.params);  
    var newBook =new Book(req.body);
    newBook.save(function(err, result) {
            if (err) {
                res.send(JSON.stringify({ error: err }));
                return;
            }
            if (result.insertId > 0) {
                res.send(JSON.stringify({ result: result }))
            } else {
                res.send(JSON.stringify({ error: err }))
            }

        });
})

module.exports = router;