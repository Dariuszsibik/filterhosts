import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.przekierowanie}
              onChange={this.handleInStockChange}
            />
            {' '}
            Wyświetl witryny bez przekierowania
          </p>
        </form>
      );
    }
  }

  export default SearchBar;