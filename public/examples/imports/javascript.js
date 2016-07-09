// Custom Namespaces
var React = window.React;
var FooBar = My.Namespace.Foo.Bar;

// AMD, require.js
require(['react', 'foo/bar'], function(React, FooBar) {
  // ...
});

// CommonJS, Node
var React = require('react');
var FooBar = require('foo/bar');

// ES2015
import React from 'react';
import FooBar from 'foo/bar';
