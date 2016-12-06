var express = require('express');
var router = express.Router();
var Book = require('../modules/book.js');
var tool = require('../modules/tools.js');

router.get('/book', function (req, res, next) {

    if (req.session.user) {
        next();
    } else {
        res.render('book-list', { message: "not login" })
    }
})

router.get(['/book', '/book/:page'], function (req, res, next) {
    // console.log(req.params);
    var limit = req.params.limit || 10;
    var start = (parseInt(req.params.page) || 1) * limit - limit;
    var ownerID = req.session.user.id;
    console.log(req.session.user)
    Book.searchBookListByOwnerID({
        start: start,
        limit: limit,
        ownerID:ownerID
    }, function (err, result) {
        console.log(result)
        if (err) {
            res.send(JSON.stringify({ error: err }));
        }
        else {
            if (result.list && result.list.length) {
                res.render('book-list', { result: result })
            } else {
                res.render('book-list', { message: 'There is not any book' })
            }

        }
        next();
    })

})

router.get('/gateway/api/addBook', function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.render('book-list', { error: "not login" })
    }
})
router.post('/gateway/api/addBook', function (req, res, next) {

    // console.log(__dirname);
    // console.log(req.params);
    // console.log(req.body);
    var book = tool.extend({}, req.body, {
        owner: req.session.user.username,
        owner_id: req.session.user.id
    });
    var newBook = new Book(book);
    newBook.save(function (err, result) {
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