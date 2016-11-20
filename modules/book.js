var mysql = require('mysql');
var DB_NAME = 'nodesample';

var pool = mysql.createPool({
    user: 'root', //MySQL认证用户名
    password: 'liuliaixue', //MySQL认证用户密码
    port: '3306', //端口号
    database: DB_NAME
});

function Book(book) {
    // this.username = user.username;
    this.name = book.name;
    this.code = book.code;
    this.time = (book.time || new Date()).toUTCString();
    this.owner = this.owner;
    this.owner_id = this.owner_id;
};
module.exports = Book;

pool.getConnection(function (err, connection) {
    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
        if (err) {
            console.log("USE Error: " + err.message);
            return;
        }
        console.log('USE book succeed');
    });


    //保存数据
    Book.prototype.save = function save(callback) {
        var book = {
            name: this.name,
            code: this.code,
            time: this.time,
            owner: this.owner,
            owner_id: this.owner_id

        };

        var insertBook_Sql = "INSERT INTO book(id,name,code,createDate) VALUES(0,?,?,?,?,?)";

        connection.query(insertBook_Sql, [book.name, book.code, book.time, book.owner, book.owner_id], function (err, result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }
            callback(err, result);
        });
    };

    Book.prototype.getNumByName = function (name, callback) {
        var getBookByName_Sql = "SELECT * FROM book WHERE name = ?";
        connection.query(getBookByName_Sql, [name], function (err, result) {
            if (err) {
                console.log("insertBook_Sql Error :" + err.message);
                return;
            }
            callback(err, result);
        })
    }

    Book.searchBookList = function (searchBean, callback) {
        var start = searchBean.start || 0;
        var limit = searchBean.limit || 10;
        var getBookList_Sql = 'SELECT * FROM book order by id asc  limit ? ,? ';
        connection.query(getBookList_Sql, [start, limit], function (err, result) {
            if (err) {
                console.log("listBook_Sql Error :" + err.message);
                return;
            }
            callback(err, result);
        })

    }
})