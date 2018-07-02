var moment = require('moment-timezone');

var date = moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
console.log(date);
