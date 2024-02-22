import React, { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACTIONS, API } from '../helpers/const';
import axios from 'axios';

const productContext = createContext();
export const useProduct = () => useContext(productContext);
const INIT_STATE = {
	products: [],
	oneProduct: {},
	loading: false,
};
export default function ProductContextProvider({ children }) {
	const navigate = useNavigate();
	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case ACTIONS.GET_PRODUCTS:
				return { ...state, products: action.payload };
			case ACTIONS.GET_ONE_PRODUCT:
				return { ...state, oneProduct: action.payload };
			case ACTIONS.GET_CATEGORIES:
				return { ...state, categories: action.payload };
			case ACTIONS.CHANGE_LOADING:
				return { ...state, loading: action.payload };
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, INIT_STATE);
	// !CREATE
	const addProduct = async (newProduct) => {
		await axios.post(API, newProduct);
		navigate('/catalog');
	};
	// !GET
	const getProducts = async () => {
		try {
			const { data } = await axios(`${API}${window.location.search}`);
			dispatch({
				type: ACTIONS.GET_PRODUCTS,
				payload: data,
			});
			dispatch({
				type: ACTIONS.CHANGE_LOADING,
				payload: true,
			});
		} catch (error) {
			console.log(error);
		}
	};
	const deleteProduct = async (id) => {
		await axios.delete(`${API}/${id}`);
		getProducts();
	};
	// !GET_ONE_PRODUCT
	const getOneProduct = async (id) => {
		const { data } = await axios(`${API}/${id}`);
		dispatch({
			type: ACTIONS.GET_ONE_PRODUCT,
			payload: data,
		});
	};
	// !EDIT
	const editProduct = async (id, editedProduct) => {
		await axios.patch(`${API}/${id}`, editedProduct);
		navigate('/catalog');
		getProducts();
	};
	const values = {
		products: state.products,
		oneProduct: state.oneProduct,
		loading: state.loading,
		getProducts,
		addProduct,
		deleteProduct,
		getOneProduct,
		editProduct,
	};
	return <productContext.Provider value={values}>{children}</productContext.Provider>;
}
