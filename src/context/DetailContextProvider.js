import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/const"; // Убедитесь, что API настроен правильно
import axios from "axios";

const detailContext = createContext();
export const useDetail = () => useContext(detailContext);

const INIT_STATE = {
  productById: {},
  loading: false, // Добавлено состояние загрузки
  error: null, // Добавлено состояние ошибки
};

export default function DetailContextProvider({ children }) {
  const reducer = (state, action) => {
    // Убрал state = INIT_STATE
    switch (action.type) {
      case ACTIONS.GET_PRODUCT_DETAIL:
        return {
          ...state,
          productById: action.payload,
          loading: false,
          error: null,
        }; // Сброс загрузки и ошибки при успехе
      // case ACTIONS.POST_LIKES: // Этот кейс пока не используется, и state не имеет 'likes'.
      //   return { ...state, likes: action.payload };
      case ACTIONS.SET_LOADING: // Новый экшен для установки состояния загрузки
        return { ...state, loading: action.payload };
      case ACTIONS.SET_ERROR: // Новый экшен для установки состояния ошибки
        return { ...state, error: action.payload, loading: false }; // Сброс загрузки при ошибке
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // Вспомогательные функции для управления состоянием загрузки и ошибок
  const setLoading = (isLoading) =>
    dispatch({ type: ACTIONS.SET_LOADING, payload: isLoading });
  const setError = (errMessage) =>
    dispatch({ type: ACTIONS.SET_ERROR, payload: errMessage });
  const clearError = () => dispatch({ type: ACTIONS.SET_ERROR, payload: null });

  //! GET PRODUCT BY ID
  const getProductById = async (id) => {
    setLoading(true); // Начинаем загрузку
    clearError(); // Очищаем предыдущие ошибки
    try {
      const { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_PRODUCT_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.error("Ошибка при получении данных продукта:", error);
      setError(error.message || "Не удалось загрузить данные продукта."); // Устанавливаем ошибку
    }
    // setLoading(false) уже происходит в редьюсере при получении данных или установке ошибки
  };

  const values = {
    productById: state.productById,
    loading: state.loading, // Передаем состояние загрузки
    error: state.error, // Передаем состояние ошибки
    getProductById,
  };

  return (
    <detailContext.Provider value={values}>{children}</detailContext.Provider>
  );
}
