var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var {showCompleted, searchText} = this.refs;

    this.props.onSearch(showCompleted.checked, searchText.value);
  },
  render: function () {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
