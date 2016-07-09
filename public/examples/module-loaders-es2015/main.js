import leftPad from 'left-pad';
import createLogger from './modules/log';
import * as math from './modules/math';

const logger = createLogger(document.getElementById('log'));

logger.log('Module Loaders Example - ES2015');
logger.log('29 =', leftPad(Number(29).toString(2), 8, 0));
logger.log('40 + 2 =', math.add(40, 2));
logger.log('10 x 2 =', math.multiply(10, 2));
