const date = require('date-and-time');

const now = new Date();
const pattern1 = date.compile('YYYY-MM-DD_HH:mm:ss');
const pattern2 = date.compile('HH:mm:ss');
const currentDate = date.format(now, pattern1);
const currentLive = date.format(now, pattern2);


module.exports = currentDate

module.exports = currentLive