const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database',
  port: 3002
});

// con.connect((err) => {
//   if (err) {
//     console.log('Connection created..!!', err);
//     // throw err;
//   }
//   console.log('Connection created..!!');
// });

module.exports.con = con;
