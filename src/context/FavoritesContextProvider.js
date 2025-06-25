import React, { createContext, useContext, useReducer, useEffect } from "react"; // Добавлен useEffect
import { getLocalStorageFavorites } from "../helpers/functions";
import { ACTIONS } from "../helpers/const";

const INIT_STATE = {
  // Инициализируем like из localStorage при первой загрузке.
  // Если localStorage.getItem("like") вернет null, JSON.parse(null) будет null.
  // Затем, getLike() при монтировании компонента позаботится об инициализации.
  like: JSON.parse(localStorage.getItem("like")),
};

const favorites = createContext();
export const useLike = () => useContext(favorites);

const FavoritesContextProvider = ({ children }) => {
  // Убрал state = INIT_STATE из параметров reducer, т.к. useReducer уже устанавливает начальное состояние
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
    let like = getLocalStorageFavorites(); // Получаем избранное из localStorage
    if (!like) {
      // Если избранного нет (например, первый запуск или очищен localStorage), инициализируем его.
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

    // Проверяем, есть ли продукт уже в избранном.
    // Использование .some() эффективнее, чем .filter().length > 0 для простой проверки наличия.
    const isProductInLike = like.products.some(
      (elem) => elem.item.id === product.id
    );

    if (!isProductInLike) {
      // Если продукта нет в избранном, добавляем его.
      like.products.push({ item: product });
    } else {
      // Если продукт уже есть, удаляем его (логика переключения).
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
    // Добавлена проверка на наличие 'like' и 'like.products' для безопасности.
    if (like && like.products) {
      return like.products.some((elem) => elem.item.id === id);
    }
    return false; // Если избранного нет или оно не содержит продуктов, возвращаем false.
  };

  //! DELETE A SPECIFIC PRODUCT FROM LIKES
  const deleteProductFromLike = (id) => {
    let like = getLocalStorageFavorites();
    // Добавлена проверка на наличие 'like' и 'like.products' для безопасности.
    if (like && like.products) {
      like.products = like.products.filter((elem) => elem.item.id !== id);
      localStorage.setItem("like", JSON.stringify(like));
      dispatch({
        type: ACTIONS.GET_LIKE,
        payload: like,
      });
    }
  };

  // Вызываем getLike при первой загрузке компонента, чтобы синхронизировать
  // состояние Context с localStorage.
  useEffect(() => {
    getLike();
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится один раз при монтировании

  const values = {
    like: state.like,
    deleteProductFromLike,
    checkProductInLike,
    addProductsToLike, // Использует логику переключения (toggle)
    getLike,
  };

  return <favorites.Provider value={values}>{children}</favorites.Provider>;
};

export default FavoritesContextProvider;
