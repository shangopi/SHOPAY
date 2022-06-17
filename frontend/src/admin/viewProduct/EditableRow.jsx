import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleSaveClick
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an sku..."
          name="sku"
          value={editFormData.sku}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a weight number..."
          name="weight"
          value={editFormData.weight}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="varientid"
          required="required"
          placeholder="Enter an varientid..."
          name="varientid"
          value={editFormData.varientid}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" onClick={handleSaveClick}>Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;