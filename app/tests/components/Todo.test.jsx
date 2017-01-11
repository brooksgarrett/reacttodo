var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
  it('should dispatch toggleTodo action with id on click', () => {
    var todoData = {
      id: 1,
      text: 'Test function',
      completed: true
    };

    var action = {
      type: 'TOGGLE_TODO',
      id: todoData.id
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo dispatch={spy} {...todoData} />);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});