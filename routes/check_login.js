// 检查用户是否已登陆
var check_login = require('./check_login');

module.exports = function (req, res, next) {

	// app.get("/",check_login,function(req, res, next){
	// 	console.log(req);

	// });
	if (req.session.isLogin) {
		res.send(JSON.stringify({
			result: "already login",
			session: "YES"
		}))
	} else {
		res.cookie("isLogin", "YES");
		res.send(JSON.stringify({
			error: "please login"
		}))
	}
	next();
};
