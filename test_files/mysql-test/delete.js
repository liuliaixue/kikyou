var mysql  = require('mysql');  

//创建一个connection
var connection = mysql.createConnection({
    // host: '192.168.1.2', //主机
    user: 'root', //MySQL认证用户名
    password: 'liuliaixue', //MySQL认证用户密码
    port: '3306', //端口号
    database: 'nodesample'
});


connection.connect();

var  userDelSql = 'DELETE FROM userinfo';
//删
connection.query(userDelSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();