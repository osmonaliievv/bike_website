import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import DetailContextProvider from "./context/DetailContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import FavoritesContextProvider from "./context/FavoritesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <AuthContextProvider>
    <ProductContextProvider>
      <DetailContextProvider>
        <CartContextProvider>
          <FavoritesContextProvider>
            <App />
          </FavoritesContextProvider>
        </CartContextProvider>
      </DetailContextProvider>
    </ProductContextProvider>
   </AuthContextProvider>
  </BrowserRouter>
);
