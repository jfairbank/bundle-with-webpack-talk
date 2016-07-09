import leftPad from 'left-pad';
import createLogger from 'log';
import * as math from 'math';

const logger = createLogger(document.getElementById('log'));

logger.log('Resolution Example');
logger.log('29 =', leftPad(Number(29).toString(2), 8, 0));
logger.log('40 + 2 =', math.add(40, 2));
logger.log('10 x 2 =', math.multiply(10, 2));
