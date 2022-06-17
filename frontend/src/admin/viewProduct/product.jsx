import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
// import "./addProduct.css";
import Table from 'react-bootstrap/Table'
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function Product() {
  const [products, setproducts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
    sku: "",
    weight: "",
    varientid: "",
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    sku: "",
    weight: "",
    varientid: "",
  });

  const [editproductId, setEditproductId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    // console.log("Added-New-data = ", newFormData);
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    // console.log("Edited-New-data payload= ", newFormData);

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newproduct = {
      id: nanoid(),
      title: addFormData.title,
      sku: addFormData.sku,
      weight: addFormData.weight,
      varientid: addFormData.varientid,
    };

    const newproducts = [...products, newproduct];
    setproducts(newproducts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedproduct = {
      id: editproductId,
      title: editFormData.title,
      sku: editFormData.sku,
      weight: editFormData.weight,
      varientid: editFormData.varientid,
    };

    const newproducts = [...products];

    const index = products.findIndex((product) => product.id === editproductId);

    newproducts[index] = editedproduct;

    setproducts(newproducts);
    setEditproductId(null);
    // console.log("",index, editedproduct );
  };

  const handleEditClick = (event, product) => {
    event.preventDefault();
    setEditproductId(product.id);

    const formValues = {
      title: product.title,
      sku: product.sku,
      weight: product.weight,
      varientid: product.varientid,
    };

    setEditFormData(formValues);
  };

  const handleSaveClick = (productId) => {
    console.log("Edited data paylog",editFormData);
  };

  const handleCancelClick = () => {
    setEditproductId(null);
  };

  const handleDeleteClick = (productId) => {
    const newproducts = [...products];

    const index = products.findIndex((product) => product.id === productId);

    const deletedid = newproducts[index].id;
    newproducts.splice(index, 1);

    setproducts(newproducts);
    console.log("deleted payload " , deletedid,"new product",newproducts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>sku</th>
              <th>Weight</th>
              <th>varientid</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Fragment>
                {editproductId === product.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    handleSaveClick={handleSaveClick}
                  />
                ) : (
                  <ReadOnlyRow
                    product={product}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    
                  />
                )}
              </Fragment>
            ))}
          </tbody>
          </Table>
      </form>

      <h2>Add a product</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="sku"
          required="required"
          placeholder="Enter an sku..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="weight"
          required="required"
          placeholder="Enter a weight..."
          onChange={handleAddFormChange}
        />
        <input
          type="varientid"
          name="varientid"
          required="required"
          placeholder="Enter an varientid..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Product;