import React from 'react';

class ProductRow extends React.Component {
    render() {
      const host = this.props.object;
      const name = host.stocked ?
        host.name :
        <span style={{color: 'red'}}>
          {host.name}
        </span>;
  
      return (
          <tr>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">{name}</td>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">{host.friendlyurl}</td>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">{host.groupid}</td>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">{host.adress}</td>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">{host.theme}</td>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">Oct/26/2012</td>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">Nov/08/2018</td>
              <td className="schema-name ExcelEditable ExcelDataLeft" data-row="0" data-key="name">BRAK CERTYFIKATU</td>
          </tr>
      );
    }
  }

  export default ProductRow;