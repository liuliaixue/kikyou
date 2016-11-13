
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