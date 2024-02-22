import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const AddCategory = () => {
  const { createCategory } = useProduct();
  const [category, setCategory] = useState("");

  const handleClick = () => {
    if (!category) {
      alert("Заполни поле !");
      return;
    } else {
      const newCategory = {
        name: category,
      };
      createCategory(newCategory);
    }
  };
  console.log(category);
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Добавить Категорию</h2>
      <input
        className="category"
        type="text"
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
};

export default AddCategory;
