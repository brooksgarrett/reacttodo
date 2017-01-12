var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText;
    if (todoText.value.length > 0){
      // No longer use prop callbacks. Dispatch instead
      //this.props.onAddTodo(todoText.value);
      this.props.dispatch(actions.startAddTodo(todoText.value));
      todoText.value = '';
      
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
