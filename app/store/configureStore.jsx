import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  
  var rootReducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
  );
    
  return store;
};