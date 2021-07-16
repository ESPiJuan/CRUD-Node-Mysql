const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host:'192.168.1.10',
    user:'root',
    password:'juan1212',
    database:'psicobotdb',
    insecureAuth : true
});
mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err)
        return;
    } else {
        console.log('Db is connect');
    }   
})

module.exports = mysqlConnection;