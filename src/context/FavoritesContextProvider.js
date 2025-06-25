import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getLocalStorageFavorites } from "../helpers/functions";
import { ACTIONS } from "../helpers/const";

const INIT_STATE = {
  like: JSON.parse(localStorage.getItem("like")),
};

const favorites = createContext();
export const useLike = () => useContext(favorites);

const FavoritesContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.GET_LIKE:
        return { ...state, like: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! GET LIKES from localStorage and set to state
  const getLike = () => {
    let like = getLocalStorageFavorites();
    if (!like) {
      like = { products: [] };
      localStorage.setItem("like", JSON.stringify(like));
    }
    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };

  // ! ADD/REMOVE PRODUCT TO/FROM LIKES (toggle logic)
  const addProductsToLike = (product) => {
    let like = getLocalStorageFavorites();
    if (!like) {
      like = { products: [] };
    }

    const isProductInLike = like.products.some(
      (elem) => elem.item.id === product.id
    );

    if (!isProductInLike) {
      like.products.push({ item: product });
    } else {
      like.products = like.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    localStorage.setItem("like", JSON.stringify(like));
    dispatch({
      type: ACTIONS.GET_LIKE,
      payload: like,
    });
  };

  // ! CHECK IF PRODUCT IS IN FAVOURITES
  const checkProductInLike = (id) => {
    let like = getLocalStorageFavorites();
    if (like && like.products) {
      return like.products.some((elem) => elem.item.id === id);
    }
    return false;
  };

  //! DELETE A SPECIFIC PRODUCT FROM LIKES
  const deleteProductFromLike = (id) => {
    let like = getLocalStorageFavorites();
    if (like && like.products) {
      like.products = like.products.filter((elem) => elem.item.id !== id);
      localStorage.setItem("like", JSON.stringify(like));
      dispatch({
        type: ACTIONS.GET_LIKE,
        payload: like,
      });
    }
  };

  // Вызываем getLike при первой загрузке компонента
  useEffect(() => {
    getLike();
  }, []);

  const values = {
    like: state.like,
    deleteProductFromLike,
    checkProductInLike,
    addProductsToLike,
    getLike,
  };

  return <favorites.Provider value={values}>{children}</favorites.Provider>;
};

export default FavoritesContextProvider;
