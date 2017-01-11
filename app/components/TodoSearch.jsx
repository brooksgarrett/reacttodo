var React = require('react');
import {connect} from 'react-redux';
var actions = require('actions');

export var TodoSearch = React.createClass({
  /* We are going to handle this in a dispatch
  handleSearch: function () {
    var {showCompleted, searchText} = this.refs;

    this.props.onSearch(showCompleted.checked, searchText.value);
  },
  */
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} 
            onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
          }} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} 
              onChange={() => {
                dispatch(actions.toggleShowCompleted())
              }}  />
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }, )(TodoSearch);
