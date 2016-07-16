import createLogger from 'log';
import * as array from 'array';
import * as math from 'math';

const logger = createLogger(document.getElementById('log'));
const numbers = [1, 2, 3, 4, 5];

logger.log('Numbers entry');
logger.log('Original:', numbers);

logger.log(
  'Doubled:',
  array.map(numbers, n => math.multiply(n, 2))
);

logger.log(
  'Filtered (> 3):',
  array.filter(numbers, n => n > 3)
);
