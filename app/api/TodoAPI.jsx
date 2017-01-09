var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var todosString = localStorage.getItem('todos');
    try {
      var todos =  JSON.parse(todosString);
      return $.isArray(todos) ? todos : [];
    } catch (e) {
      return [];
    }     
  },
  filterTodos: function (todos, showCompleted, searchText){
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    if (searchText != '') {
      filteredTodos = filteredTodos.filter((todo) => {
        var match = todo.text.toLowerCase().indexOf(searchText.toLowerCase());
        return (match === -1) ? false : true;
      });
    }

    // Sort Todos by showCompleted
    filteredTodos.sort((a, b) => {
      // -1 a first, 1 b first, 0 tie
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}