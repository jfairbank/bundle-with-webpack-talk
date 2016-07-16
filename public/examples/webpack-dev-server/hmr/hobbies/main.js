import createLogger from 'log';
import defaultHobbies from './hobbies';

const logger = createLogger(document.getElementById('log'));

function logHobbies(hobbies) {
  logger.log('Hobbies:');

  hobbies.forEach(hobby => {
    logger.log(hobby);
  });
}

if (module.hot) {
  module.hot.accept('./hobbies', () => {
    const newHobbies = require('./hobbies').default;
    logHobbies(newHobbies);
  });
}

logHobbies(defaultHobbies);
