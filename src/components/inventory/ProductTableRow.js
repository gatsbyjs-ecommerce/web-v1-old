import React from 'react';

const ProductTableRow = props => (
  <tr>
    <td>{props.product.name}</td>
    <td>${props.product.price}</td>
    <td>{props.product.category}</td>
    <td>
      <a target="_blank" href={props.product.imageURL}>
        View
      </a>
    </td>
    <td className="editButton">edit</td>
  </tr>
);

export default ProductTableRow;
