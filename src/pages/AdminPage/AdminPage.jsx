import React from "react";
import AddProduct from "../../components/product/AddProduct";
import AddCategory from "../../components/product/AddCategory";

const AdminPage = () => {
  return (
    <div
      style={{
        height: 550,
        display: "flex",
        margin: " 0 auto",
        justifyContent: "space-between",
        width: 1000,
        paddingTop: "50px",
      }}
    >
      <AddCategory />
      <AddProduct />
    </div>
  );
};

export default AdminPage;
