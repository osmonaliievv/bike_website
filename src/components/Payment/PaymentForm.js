import React, { useState } from "react";
import "./Payment.scss";
import ReactCreditCards from "react-credit-cards-2";
import { NavLink } from "react-router-dom";

const PaymentForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocused] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setNumber("");
    setName("");
    setExpiry("");
    setCvc("");
  };
  return (
    <div>
      <h4 className="bread-crumbds-payment">
        <NavLink to={"/catalog"}>Каталог</NavLink> / <strong>Оплата</strong>
      </h4>
      <ReactCreditCards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form className="form__payment" onSubmit={handleSubmit}>
        <input
          className="inp-1"
          type="tel"
          name="number"
          value={number}
          placeholder="Enter Number"
          maxlength="16"
          required
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
        />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          maxlength="18"
          required
          onChange={(e) => setName(e.target.value.toUpperCase())}
          onFocus={(e) => setFocused(e.target.name)}
        />
        <input
          type="tel"
          name="expiry"
          value={expiry}
          placeholder="Enter Expiry date"
          maxlength="4"
          required
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          value={cvc}
          placeholder="Enter CVC"
          maxlength="3"
          required
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
        />
        <button className="payment__btn-dark">Confirm</button>
      </form>
      {showModal && (
        <div className="payment__modal" onClick={() => setShowModal(false)}>
          <div className="payment__modal-content">
            <p>Спасибо за покупку!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
