import createLogger from 'log';
import hobbies from './hobbies';

const logger = createLogger(document.getElementById('log'));

logger.log('Hobbies:');

hobbies.forEach(hobby => {
  logger.log(hobby);
});
