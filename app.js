var express = require('express');
var app = express();
var path = require('path');
var crypto = require('crypto');
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser('alan'));
app.use(session({
    secret: '12345',
    name: 'testapp', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 60 * 1000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static('public'));
console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.get('/what', function (req, res, next) {
    console.log(__dirname);
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(path.join(__dirname, 'public', 'index.html'));
    next();
})

var reg = require("./routes/reg");
var login = require("./routes/login");
app.use("/register_get", reg);
app.use("/login_get", login);




app.get("/home/logincookies.html", function (req, res, next) {
    console.log('logincookies');
    req.session.isLogin = "YES";
    res.cookie('islogin', 'YES', { maxAge: 60 * 1000 });
    res.end(JSON.stringify({
        result: "session and cookies login"
    }));
    next();

})


app.use("/home/usecookies.html", function (req, res, next) {
    var result;
    if (req.cookies.islogin) {
        console.log('usecookies-cookies:' + req.cookies.islogin);
        req.session.islogin = req.cookies.islogin;
        result = {
            result: "cookies already login"
        };

    } else if (req.session.islogin) {
        console.log('usecookies:' + req.session.islogin);
        res.locals.islogin = req.session.islogin;
        result = {
            result: "session already login"
        };
    } else {
        result = {
            error: "session and cookies not found ,please login"
        };

    }
    res.end(JSON.stringify(result));
    next();

});







var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
