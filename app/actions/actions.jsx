export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var addBulkTodos = (todos) => {
  return {
    type: 'ADD_BULK_TODOS',
    todos
  };
};

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