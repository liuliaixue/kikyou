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

app.get('/index.html', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    console.log(req.query);
    response = {
        first_name1: req.query.first_name,
        last_name1: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


var reg = require("./routes/reg");
var login = require("./routes/login");
app.use("/register_get", reg);
app.use("/login_get", login);


// var template = require('./routes/template-file');
// app.use('/template-file',template)

// var template = require('./routes/usesession');
// app.use('/home/usesession.html', template)

app.get("/home/loginsession.html", function (req, res, next) {
    console.log(req.session);
    console.log(req.session.isLogin);

    req.session.isLogin = "YES";
    res.end(JSON.stringify({
        result: "session  login"
    }))

})

app.get("/home/logincookies.html", function (req, res, next) {
    console.log(req.session);
    console.log(req.session.isLogin);

    res.cookie('islogin', 'YES', { maxAge: 60 * 1000 });
    res.end(JSON.stringify({
        result: "cookies  login"
    }))

})



app.get("/home/usesession.html", function (req, res, next) {
    console.log(req.session);
    console.log(req.session.isLogin);

    if (req.session.isLogin) {
        res.end(JSON.stringify({
            result: "already login",
            session: "YES"
        }))
    } else {
        res.cookie("isLogin", "YES");
        res.end(JSON.stringify({
            error: "please login"
        }))
    }
    next();
})

app.use("/home/usecookies.html", function (req, res, next) {
    if (req.cookies.islogin) {
        console.log('usecookies-cookies:' + req.cookies.islogin);
        req.session.islogin = req.cookies.islogin;
        res.end(JSON.stringify({
            result: "cookies already login"
        }))
    } else {
        res.end(JSON.stringify({
            error: "cookies not found ,please login"
        }))

    }

});







var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
