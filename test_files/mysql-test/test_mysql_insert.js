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

var  userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
var  userAddSql_Params = ['Wilson', 'abcd'];
//增
connection.query(userAddSql,userAddSql_Params,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        

       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();