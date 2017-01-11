var expect = require('expect');

var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };

    var actualAction = actions.setSearchText('Some text');

    expect(actualAction).toEqual(action);
  });
  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };

    var actualAction = actions.addTodo(action.text);

    expect(actualAction).toEqual(action);
  });
  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var actualAction = actions.toggleShowCompleted();

    expect(actualAction).toEqual(action);
  });
  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 6
    };

    var actualAction = actions.toggleTodo(action.id);

    expect(actualAction).toEqual(action);
  });
});