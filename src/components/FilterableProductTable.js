import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        przekierowanie: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    handleInStockChange(przekierowanie) {
      this.setState({
        przekierowanie: przekierowanie
      })
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            przekierowanie={this.state.przekierowanie}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            data={this.props.data}
            filterText={this.state.filterText}
            przekierowanie={this.state.przekierowanie}
          />
        </div>
      );
    }
  }

  export default FilterableProductTable;