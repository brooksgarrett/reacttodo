var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

// Components
var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

// App CSS
require('style!css!sass!ApplicationStyles');

store.subscribe(() => {
    console.log('newState', store.getState());
});

store.dispatch(actions.addTodo('Clean the Yard'));
store.dispatch(actions.setSearchText('Clean'));

$(document).foundation();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
