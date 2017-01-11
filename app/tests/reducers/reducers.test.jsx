var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should return default state when action type is invalid', () => {
      var action = {
        type: 'Something Crazy',
        searchText: 'Something'
      };

      var res = reducers.searchTextReducer(undefined, df(action));

      expect(res).toEqual('');
    });
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some text'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('should return default state when action type is invalid', () => {
      var action = {
        type: 'Something Crazy'
      };

      var res = reducers.searchTextReducer(undefined, df(action));

      expect(res).toEqual(false);
    });
    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });
  describe('todosReducer', () => {
    it('should return default state when action type is invalid', () => {
      var action = {
        type: 'Something Crazy'
      };

      var res = reducers.searchTextReducer(undefined, df(action));

      expect(res).toEqual([]);
    });
    it('should add a new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Finish this class'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should complete a todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      var currentState = [{
        id: 123,
        text: 'Do something',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }]

      var res = reducers.todosReducer(df(currentState), df(action));

      expect(res.length).toBe(1);
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toNotBe(undefined);
    });
    it('should toggle a completed todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      var currentState = [{
        id: 123,
        text: 'Do something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]

      var res = reducers.todosReducer(df(currentState), df(action));

      expect(res.length).toBe(1);
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toBe(undefined);
    });
    it('should load bulk todos', () => {
      var todos = [{
        id: 1,
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }];
      var action = {
        type: 'ADD_BULK_TODOS',
        todos
      };

      var result = reducers.todosReducer(df([]), df(action));

      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(todos[0]);

    });
  });
});