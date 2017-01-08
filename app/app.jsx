var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var TodoApp = require('TodoApp');

// App CSS
require('style!css!sass!ApplicationStyles');

$(document).foundation();

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
