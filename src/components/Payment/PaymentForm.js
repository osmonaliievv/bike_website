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
          type="tel"
          name="number"
          value={number}
          placeholder="Enter Number"
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
        />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
        />
        <input
          type="tel"
          name="expiry"
          value={expiry}
          placeholder="Enter Expiry date"
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          value={cvc}
          placeholder="Enter Cvc"
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
