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

      var res = reducers.searchTextReducer('', df(action));

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

      var res = reducers.showCompletedReducer(false, df(action));

      expect(res).toBe(true);
    });
  });
});