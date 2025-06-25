import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API, API_CATEGORIES } from "../helpers/const";
import axios from "axios";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
  loading: false, // Изначальное состояние загрузки
  error: null, // Добавлено состояние ошибки
};

export default function ProductContextProvider({ children }) {
  const navigate = useNavigate();
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
      case ACTIONS.GET_ONE_PRODUCT:
        return {
          ...state,
          oneProduct: action.payload,
          loading: false,
          error: null,
        };
      case ACTIONS.GET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
          loading: false,
          error: null,
        };
      case ACTIONS.CHANGE_LOADING: // Если вы используете это действие
      case ACTIONS.SET_LOADING: // Предпочтительнее использовать SET_LOADING для консистентности
        return { ...state, loading: action.payload };
      case ACTIONS.SET_ERROR:
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

  // !CREATE PRODUCT
  const addProduct = async (newProduct) => {
    setLoading(true);
    clearError();
    try {
      await axios.post(API, newProduct);
      navigate("/catalog");
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
      setError(error.message || "Не удалось добавить продукт.");
    } finally {
      setLoading(false);
    }
  };

  //! ADD COMMENT
  const addComment = async (id, comment) => {
    setLoading(true);
    clearError();
    try {
      const { data } = await axios.get(`${API}/${id}`); // Получаем текущие данные продукта
      const existingComments = Array.isArray(data.comment) ? data.comment : []; // Убедимся, что это массив
      const newComments = [...existingComments, comment]; // Добавляем новый комментарий
      await axios.patch(`${API}/${id}`, { comment: newComments }); // Обновляем только поле 'comment'
      getOneProduct(id); // Обновляем данные одного продукта после добавления комментария
    } catch (error) {
      console.error("Ошибка при добавлении комментария:", error);
      setError(error.message || "Не удалось добавить комментарий.");
    } finally {
      setLoading(false);
    }
  };

  // !GET PRODUCTS
  const getProducts = async () => {
    setLoading(true);
    clearError();
    try {
      const { data } = await axios(`${API}${window.location.search}`);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.error("Ошибка при получении продуктов:", error);
      setError(error.message || "Не удалось получить список продуктов.");
    }
    // Loading is set to false in reducer or explicitly in catch/finally if needed
  };

  //! DELETE PRODUCT
  const deleteProduct = async (id) => {
    setLoading(true);
    clearError();
    try {
      await axios.delete(`${API}/${id}`);
      getProducts(); // Обновляем список продуктов после удаления
    } catch (error) {
      console.error("Ошибка при удалении продукта:", error);
      setError(error.message || "Не удалось удалить продукт.");
    } finally {
      setLoading(false);
    }
  };

  // !GET ONE PRODUCT
  const getOneProduct = async (id) => {
    setLoading(true);
    clearError();
    try {
      const { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.error("Ошибка при получении одного продукта:", error);
      setError(error.message || "Не удалось получить данные продукта.");
    }
  };

  // !EDIT PRODUCT
  const editProduct = async (id, editedProduct) => {
    setLoading(true);
    clearError();
    try {
      await axios.patch(`${API}/${id}`, editedProduct);
      navigate("/catalog");
      getProducts(); // Обновляем список продуктов после редактирования
    } catch (error) {
      console.error("Ошибка при редактировании продукта:", error);
      setError(error.message || "Не удалось отредактировать продукт.");
    } finally {
      setLoading(false);
    }
  };

  // ! GET CATEGORIES
  const getCategories = async () => {
    setLoading(true);
    clearError();
    try {
      const { data } = await axios(API_CATEGORIES);
      dispatch({
        type: ACTIONS.GET_CATEGORIES,
        payload: data,
      });
    } catch (error) {
      console.error("Ошибка при получении категорий:", error);
      setError(error.message || "Не удалось получить список категорий.");
    }
  };

  // ! CREATE CATEGORY
  const createCategory = async (newCategory) => {
    setLoading(true);
    clearError();
    try {
      await axios.post(API_CATEGORIES, newCategory);
      getCategories(); // Обновляем список категорий после создания
    } catch (error) {
      console.error("Ошибка при создании категории:", error);
      setError(error.message || "Не удалось создать категорию.");
    } finally {
      setLoading(false);
    }
  };

  // ! FILTER / SEARCH
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
    getProducts(); // Важно: Вызов getProducts() здесь гарантирует обновление данных после фильтрации
  };

  // Вызываем getProducts и getCategories при первой загрузке компонента
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const values = {
    products: state.products,
    oneProduct: state.oneProduct,
    categories: state.categories,
    loading: state.loading,
    error: state.error, // Передаем состояние ошибки
    getProducts,
    addProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    getCategories,
    fetchByParams,
    createCategory,
    addComment,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}
