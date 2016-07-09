// main.js
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import FooBar from 'foo/bar';
import { getData } from 'util/data';

const apiKey = getData('api.key');
const date = moment();
const url = `/api/${apiKey}?${Number(date)}`;

$.get(url).then(data => {
  const el = document.getElementById('main');
  const app = <FooBar data={data} />;
  render(app, el);
});
