// const mysql = require('mysql');

// // db 연결
// function connect() {
//   const db = mysql.createConnection({
//     host: '',
//     user: '',
//     password: '',
//     database: '',
//     multipleStatements: true,
//   });

//   db.connect(err => {
//     if (err) {
//       console.log(err.message);
//       setTimeout(connect(), 2000);
//     }
//   });

//   // mysql 에러 발생 시 실행됨
//   db.on('error', err => {
//     console.log(err.message);

//     // 장시간 미사용으로 연결이 끊겼을 때
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       return connect();
//     } else {
//       throw err;
//     }
//   });
// };

// module.exports = { connect };