import firebase, {firebaseDB} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var addBulkTodos = (todos) => {
  return {
    type: 'ADD_BULK_TODOS',
    todos
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseDB.child('todos').push(todo);
    todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
    
  };
}

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};