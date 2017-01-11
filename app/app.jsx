var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

// Components
var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import './playground/index.js';

// App CSS
require('style!css!sass!ApplicationStyles');

store.subscribe(() => {
    var state = store.getState();
    console.log('New State', state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addBulkTodos(initialTodos));

$(document).foundation();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
