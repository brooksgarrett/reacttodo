import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  
  var rootReducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });
  const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk),
  );
  const store = createStore(rootReducer, undefined, enhancer);

  //const store = redux.createStore(reducer, composeEnhancers(redux.applyMiddleware(thunk)));

  return store;
};