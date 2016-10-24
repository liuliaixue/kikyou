var mysql = require('mysql');
var DB_NAME = 'nodesample';
var crypto = require('crypto');

var pool = mysql.createPool({
    user: 'root', //MySQL认证用户名
    password: 'liuliaixue', //MySQL认证用户密码
    port: '3306', //端口号
    database: DB_NAME
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function User(user) {
    this.username = user.username;
    // this.userpass = user.userpass;
    var md5 = crypto.createHash('md5');
    this.userpass = md5.update(user.userpass).digest('hex');
    this.time = (user.time || new Date()).toUTCString();
};
module.exports = User;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);
            return;
        }
        console.log('USE succeed');
    });

    //保存数据
    User.prototype.save = function save(callback) {
        var user = {
            username: this.username,
            userpass: this.userpass,
            time: this.time
        };

        var insertUser_Sql = "INSERT INTO userinfo(id,username,userpass,createDate) VALUES(0,?,?,?)";

        connection.query(insertUser_Sql, [user.username, user.userpass, user.time], function(err, result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            // connection.release();

            console.log("invoked[save]");
            callback(err, result);
        });
    };

    //根据用户名得到用户数量
    User.getUserNumByName = function getUserNumByName(username, callback) {

        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM userinfo WHERE username = ?";

        connection.query(getUserNumByName_Sql, [username], function(err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            // connection.release();

            console.log("invoked[getUserNumByName]");
            callback(err, result);
        });
    };

    //根据用户名得到用户信息
    User.getUserByUserName = function getUserNumByName(username, callback) {

        var getUserByUserName_Sql = "SELECT * FROM userinfo WHERE username = ?";

        connection.query(getUserByUserName_Sql, [username], function(err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

            // connection.release();

            console.log("invoked[getUserByUserName]");
            callback(err, result);
        });
    };

    //用户的登录请求
    User.userLogin = function userLogin(username, userpass, callback) {
        var getUserByUserNameAndPassword = "SELECT * FROM userinfo WHERE (username =? AND userpass =?) ";
        connection.query(getUserByUserNameAndPassword, [username, userpass], function(err, result) {
            // body...
            if (err) {
                console.log("getUserByUserNameAndPassword Error: " + err.message);
                return;
            }
            callback(err, result);
        })
    }

});
