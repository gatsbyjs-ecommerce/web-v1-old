import React from 'react';
import styled from 'styled-components';
import ProductTableRow from './ProductTableRow';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;

  .productTable {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    border: 1px solid black;
  }
`;

class ProductsTab extends React.Component {
  renderTableRows(inventory) {
    const categoryKeys = Object.keys(inventory.categories);
    const CKLength = categoryKeys.length;
    let listOfProducts = [];

    for (let i = 0; i < CKLength; i++) {
      const category = categoryKeys[i];
      listOfProducts = listOfProducts.concat(inventory.categories[category]);
    }

    const LOPlength = listOfProducts.length;
    if (LOPlength === 0) {
      return (
        <div>
          <p>There are currently no items in the inventory</p>
        </div>
      );
    } else {
      return (
      //   let rows = [
      //     <tr>
      //       <th>Product Name</th>
      //       <th>Price</th>
      //       <th>Category</th>
      //       <th>Image</th>
      //     </tr>,
      //   ];
  
      //   for (let i = 0; i < LOPlength; i++) {
      //     rows.push(<ProductTableRow product={listOfProducts[i]} />);
      //   }
  
      //   return rows;
      );
    }
  }

  render() {
    return (
      <Container className="ProductsTab">
        <h1>Available Products List</h1>
        <p>Showing all available products:</p>
        <table className="productTable">
          {this.renderTableRows(this.props.inventory)}
        </table>
      </Container>
    );
  }
}

export default ProductsTab;
