var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = (todos) => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do. Add something!</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} onToggle={this.props.onToggle} {...todo} />
        )
      });
    };

    return (
      <div>
        {renderTodos(todos)}
      </div>
    );
  }
});

module.exports = TodoList;
