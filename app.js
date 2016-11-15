var express = require('express');
var app = express();
var path = require('path');
var crypto = require('crypto');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var fs = require('fs');
var tools = require('./modules/tools');

app.use(cookieParser('alan'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret: '12345',
    name: 'testapp', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 60 * 1000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));


app.use(express.static('public'));
// console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


var reg = require("./routes/reg");
var login = require("./routes/login");
app.use("/gateway/api", reg);
app.use("/gateway/api", login);

app.post("/testParams", function (req, res, next) {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    console.log(666);
    res.send({ ok: false });
    var filename = "Log/" + "NodePrintLog" + tools.getNowDateString() +".md";
    console.log(filename)
    fs.open(filename, 'a', function (err) {
        if (err) {
            console.log("open file fail");
        }
        fs.writeFile(filename,req, function (err) {
            if (err) {
                console.log("write file fail");
            }
            console.log("gogogo");
        });

    })
    next();
})

/*路由*/
// 路由：字符串类型


app.get('/book', function (req, res, next) {
    // res.send('book');
    res.render('book-list', { result: 'There is not any book' })
});

var bookAPI = require("./routes/book")
app.use('/gateway/api', bookAPI)

// 路由：字符串模式
app.get('/user/*man', function (req, res, next) {
    res.send('user');  // 比如： /user/man, /user/woman
});

// 路由：正则表达式
app.get(/animals?$/, function (req, res, next) {
    res.send('animal');  // 比如： /animal, /animals
});

// 路由：命名参数
app.get('/employee/:uid/:age', function (req, res, next) {
    res.json(req.params);  // 比如：/111/30，返回 {"uid": 111, "age": 30}
});

/*路由拆分*/
var user = express.Router();

user.get('/list', function (req, res, next) {
    res.send('/list');
});

user.get('/detail', function (req, res, next) {
    res.send('/detail');
});

app.use('/user', user); // mini app，通常做应用拆分





var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
