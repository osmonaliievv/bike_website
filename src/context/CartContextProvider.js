import React, { createContext, useContext, useReducer, useEffect } from "react"; // Добавлен useEffect
import {
  calcSubPrice,
  calcTotalPrice,
  getLocalStorage, // Убедитесь, что здесь нет опечатки "getLocalStoroge"
  getProductsCountInCart,
} from "../helpers/functions";
import { ACTIONS } from "../helpers/const";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

//! Создаем начальное состояние
const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")), // Инициализируем корзину из localStorage
  cartLength: getProductsCountInCart(), // Инициализируем количество товаров
};

const reducer = (state, action) => {
  // Убрал state = INIT_STATE из параметров
  switch (action.type) {
    case ACTIONS.GET_CART:
      // При получении корзины, обновляем и саму корзину, и её длину
      return {
        ...state,
        cart: action.payload,
        cartLength: getProductsCountInCart(),
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! GET CART DATA from localStorage
  const getCart = () => {
    let cart = getLocalStorage(); // Получаем корзину из localStorage
    // Если корзины нет (например, первый запуск или очищен localStorage), инициализируем её
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  //! ADD PRODUCT TO CART (or increase count if already exists)
  const addProductToCart = (product) => {
    let cart = getLocalStorage();
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    // Проверяем, есть ли продукт уже в корзине
    let productInCart = cart.products.find(
      (elem) => elem.item.id === product.id
    );

    if (productInCart) {
      // Если продукт уже есть, увеличиваем его количество
      productInCart.count++;
      productInCart.subPrice = calcSubPrice(productInCart); // Пересчитываем подцену
    } else {
      // Если продукта нет, добавляем его в корзину с count: 1
      let newProduct = {
        item: product,
        count: 1,
        subPrice: product.price, // Начальная подцена
      };
      cart.products.push(newProduct);
    }

    // Пересчитываем общую цену корзины
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  //! CHECK IF PRODUCT IS IN CART
  const checkProductInCart = (id) => {
    let cart = getLocalStorage();
    // Добавлена проверка на наличие 'cart' и 'cart.products' для безопасности
    if (cart && cart.products) {
      // Используем .some() для проверки наличия - это эффективнее, чем filter().length > 0
      return cart.products.some((elem) => elem.item.id === id);
    }
    return false; // Если корзины нет или она пуста, продукт не найден
  };

  //! CHANGE PRODUCT COUNT IN CART
  const changeProductCount = (id, count) => {
    let cart = getLocalStorage();
    if (cart && cart.products) {
      cart.products = cart.products.map((elem) => {
        if (elem.item.id === id) {
          // Преобразуем count в число и убедимся, что оно не меньше 1
          elem.count = Math.max(1, parseInt(count, 10) || 1); // parseInt(count, 10) || 1 для обработки некорректных значений
          elem.subPrice = calcSubPrice(elem); // Пересчитываем подцену
        }
        return elem;
      });
      cart.totalPrice = calcTotalPrice(cart.products);
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: ACTIONS.GET_CART,
        payload: cart,
      });
    }
  };

  //! DELETE PRODUCT FROM CART
  const deleteProductFromCart = (id) => {
    let cart = getLocalStorage();
    if (cart && cart.products) {
      cart.products = cart.products.filter((elem) => elem.item.id !== id);
      cart.totalPrice = calcTotalPrice(cart.products); // Пересчитываем общую цену
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: ACTIONS.GET_CART,
        payload: cart,
      });
    }
  };

  // Вызываем getCart при первой загрузке компонента, чтобы синхронизировать
  // состояние Context с localStorage.
  useEffect(() => {
    getCart();
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится один раз при монтировании

  const values = {
    getCart,
    addProductToCart,
    cart: state.cart,
    cartLength: state.cartLength, // Передаем актуальную длину корзины из состояния
    checkProductInCart,
    changeProductCount,
    deleteProductFromCart,
    getProductsCountInCart, // Эту функцию можно оставить, но cartLength из state чаще всего достаточно
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
