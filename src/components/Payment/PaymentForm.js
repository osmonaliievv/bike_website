import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "./Payment.scss";
import ReactCreditCards from "react-credit-cards-2";
const PaymentForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocused] = useState("");
  return (
    <div>
      <ReactCreditCards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form>
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
    </div>
  );
};

export default PaymentForm;
