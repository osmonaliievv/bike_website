import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import DetailContextProvider from "./context/DetailContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <DetailContextProvider>
          <App />
        </DetailContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
