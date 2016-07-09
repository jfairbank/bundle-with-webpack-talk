// main.js
const leftPad = require('left-pad');
const createLogger = require('./modules/log');
const math = require('./modules/math');

const logger = createLogger(document.getElementById('log'));

logger.log('From Command Line ($ webpack ./main.js ../bundle.js)');
logger.log('29 =', leftPad(Number(29).toString(2), 8, 0));
logger.log('40 + 2 =', math.add(40, 2));
logger.log('10 x 2 =', math.multiply(10, 2));
