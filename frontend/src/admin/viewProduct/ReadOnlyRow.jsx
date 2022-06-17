import React from "react";

const ReadOnlyRow = ({ product, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.sku}</td>
      <td>{product.weight}</td>
      <td>{product.varientid}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, product)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(product.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;