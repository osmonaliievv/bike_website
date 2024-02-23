import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import DetailContextProvider from "./context/DetailContextProvider";
import CartContextProvider from "./context/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <DetailContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </DetailContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
