import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DefaultApp from './components/App';
import { reducer } from '../../../redux-shared';

const store = createStore(reducer);

function render(App) {
  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('main'));
}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}

render(DefaultApp);
