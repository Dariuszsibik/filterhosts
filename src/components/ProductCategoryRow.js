import React from 'react';


class ProductCategoryRow extends React.Component {
    render() {
      return (
        <thead>
            <tr>
                <th className="schema-name">Nazwa</th>
                <th className="schema-year">FriendlyUrl</th>
                <th className="schema-grape">groupId</th>
                <th className="schema-rating">Organizacja</th>
                <th className="ExcelNotSortable">Motyw</th>
                <th className="ExcelNotSortable">CreateDate</th>
                <th className="ExcelNotSortable">ModifiedDate</th>
                <th className="ExcelNotSortable">Certyfikat?</th>
            </tr>
        </thead>
      );
    }
  }

  export default ProductCategoryRow;