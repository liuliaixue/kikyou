var express = require('express');
var router = express.Router();
var Book = require('../modules/book.js');

router.get('/book',function(req,res,next){
    console.log(req.session.user);
    Book.searchBookList(req,function(err,result){
        if(err){
            res.send(JSON.stringify({ error: err }));
        }
        else{
            if(result.length){
                res.render('book-list', { result: result })
            }else{
                res.render('book-list', { message: 'There is not any book' })
            }
            
        }
        next();
    })


})


router.post('/gateway/api/addBook',function(req,res,next){
    console.log(req.session.user);

    // console.log(__dirname);
    // console.log(req.params);
    // console.log(req.body);
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