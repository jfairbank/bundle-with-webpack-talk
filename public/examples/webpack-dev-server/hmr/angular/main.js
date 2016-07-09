import angular from 'angular';
import ngRedux from 'ng-redux';
import { reducer } from '../../../redux-shared';
import DefaultNameTag from './components/NameTag';

const app = angular.module('app', [ngRedux]);
let store = null;

app.config($ngReduxProvider => {
  const initialState = store ? store.getState() : undefined;
  $ngReduxProvider.createStoreWith(reducer, [], [], initialState);
});

app.run($ngRedux => {
  store = $ngRedux;
});

app.component('nameTag', DefaultNameTag);

if (module.hot) {
  module.hot.accept('./components/NameTag', () => {
    const NewNameTag = require('./components/NameTag').default;
    const newNameTagEl = document.createElement('name-tag');
    const currentAppEl = document.getElementById('app');
    const newAppEl = document.createElement('div');

    newAppEl.id = 'app';
    newAppEl.appendChild(newNameTagEl);

    currentAppEl.parentNode.replaceChild(newAppEl, currentAppEl);

    app._invokeQueue[0][2][1] = NewNameTag;
    angular.bootstrap(newAppEl, ['app']);
  });
}

angular.element(document).ready(() => {
  angular.bootstrap(document.getElementById('app'), ['app']);
});
