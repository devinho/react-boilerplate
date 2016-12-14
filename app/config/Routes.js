var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

/* Require components and containers */
var Base = require('../components/Base');
var Home = require('../components/Home');

var SampleContainer = require('../containers/SampleContainer');

var Routes = (
  <Router history={ hashHistory }>
    <Route path='/' component= { Base }>
      <IndexRoute component={ Home } />
      <Route path='sample' header='This is a container' component={ SampleContainer } />
    </Route>
  </Router>
);

module.exports = Routes;