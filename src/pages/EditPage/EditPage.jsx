import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import "./EditPage.scss";

export default function EditPage({ openEditModal, setOpenEditModal }) {
  const { editProduct, oneProduct } = useProduct();
  const [updateImage, setUpdateImage] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const updatePost = () => {
    if (!updateImage || !updateName || !updatePrice) {
      alert("лее куда летишь");
    } else {
      const updatedPost = {
        image: updateImage,
        name: updateName,
        price: updatePrice,
      };
      editProduct(oneProduct.id, updatedPost);
      setOpenEditModal(false);
      console.log("Объект успешно обновлён!");
    }
  };
  useEffect(() => {
    if (oneProduct) {
      setUpdateImage(oneProduct.image);
      setUpdateName(oneProduct.name);
      setUpdatePrice(oneProduct.price);
    }
  }, [oneProduct]);

  return (
    <>
      <div className={`edit-modal${openEditModal ? " open" : ""}`}>
        <div className="close">
          <button
            className="edit-modal__close"
            type="button"
            onClick={() => setOpenEditModal(false)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 0.5L0.5 13.5"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.5 0.5L13.5 13.5"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="edit-modal__title">UPDATE POST</div>
        </div>

        <form className="edit-modal__form">
          <input
            type="text"
            placeholder="IMAGE"
            value={updateImage}
            onChange={(e) => setUpdateImage(e.target.value)}
            className="edit-modal__input"
          />
          <input
            type="text"
            placeholder="NAME"
            onChange={(e) => setUpdateName(e.target.value)}
            value={updateName}
            className="edit-modal__input"
          />
          <input
            type="text"
            placeholder="PRICE"
            value={updatePrice}
            onChange={(e) => setUpdatePrice(e.target.value)}
            className="edit-modal__input"
          />
        </form>
        <button className="edit-modal__sumbit" onClick={updatePost}>
          UPDATE NEW POST
        </button>
      </div>
    </>
  );
}
