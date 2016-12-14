// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/Routes');

ReactDOM.render(
  Routes, 
  document.getElementById('app')
);
