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
  }
}