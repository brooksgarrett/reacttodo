var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 1,
        text: 'Test functions',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var todos = 'Not an array';
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toBe(null);
    });

  });
  describe('getTodos', () => {
    it('should return an empty array when stored data is invalid', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });
    it('should return an array when stored data is valid', () => {
      var todos = [{
        id: 1,
        text: 'Test functions',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });
  });
  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Some thing',
      completed: true
    }, {
      id: 2,
      text: 'That thing',
      completed: false
    }, {
      id: 3,
      text: 'Some thing here',
      completed: true
    }];
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should only return items if they are not completed and showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
      expect(filteredTodos[2].completed).toBe(true);

    });
    it('should only return todos that match searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'SoMe');
      expect(filteredTodos.length).toBe(2);
    });
    it('should return an emtpy array when nothing matches searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'Farfleg');
      expect(filteredTodos.length).toBe(0);
    });
    it('should return everything when searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});