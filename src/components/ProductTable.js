import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const przekierowanie = this.props.przekierowanie;

      let lastCategory = null;

      const rows = this.props.data
      .filter((el, i) => {
          return el.name.toUpperCase().includes(filterText.toUpperCase());
      })
      .filter((el, i) => {
          if (przekierowanie) {
               return el.direction === !przekierowanie;
          } else {
              return true;
          }
      })
      .map((el, i) => {
          return (<ProductRow
                    key={i}
                    object={el}
               />)
      })

      return (
        <table>
          <ProductCategoryRow/>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default ProductTable;