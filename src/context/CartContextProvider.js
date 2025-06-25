import React, { createContext, useContext, useReducer, useEffect } from "react"; // Добавлен useEffect
import { ACTIONS, API } from "../helpers/const";
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
    switch (action.type) {
      case ACTIONS.GET_PRODUCT_DETAIL:
        return {
          ...state,
          productById: action.payload,
          loading: false,
          error: null,
        };
      // case ACTIONS.POST_LIKES: // Этот кейс пока не используется, и state не имеет 'likes'.
      //   return { ...state, likes: action.payload };
      case ACTIONS.SET_LOADING: // Используем SET_LOADING
        return { ...state, loading: action.payload };
      case ACTIONS.SET_ERROR: // Используем SET_ERROR
        return { ...state, error: action.payload, loading: false };
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
    setLoading(true);
    clearError();
    try {
      const { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_PRODUCT_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.error("Ошибка при получении данных продукта:", error);
      setError(error.message || "Не удалось загрузить данные продукта.");
    }
    // Loading is set to false in reducer or explicitly in catch/finally
  };

  // Вызываем getProductById при первой загрузке компонента, если у вас есть ID
  // Это не делается здесь напрямую, так как ID обычно берется из URL в компоненте, который использует этот контекст.
  // Например, в ProductDetailsPage:
  // useEffect(() => {
  //   if (id) getProductById(id);
  // }, [id, getProductById]);

  const values = {
    productById: state.productById,
    loading: state.loading,
    error: state.error,
    getProductById,
  };

  return (
    <detailContext.Provider value={values}>{children}</detailContext.Provider>
  );
}
