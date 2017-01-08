var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  handleAddTodo: function (todo) {
    var newTodos = this.state.todos;
    newTodos.push({id: newTodos.length + 1, text: todo});
    this.setState({todos: newTodos});
  },
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Clean the house'
        },
        {
          id: 4,
          text: 'Go to the gym'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state; 

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;