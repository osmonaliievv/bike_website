import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, API } from '../helpers/const';
import axios from 'axios';

const detailContext = createContext();
export const useDetail = () => useContext(detailContext);

const INIT_STATE = {
	productById: {},
};

export default function DetailContextProvider({ children }) {
	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case ACTIONS.GET_PRODUCT_DETAIL:
				return { ...state, productById: action.payload };
			case ACTIONS.POST_LIKES:
				return { ...state, likes: action.payload };
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, INIT_STATE);
	//! GET PRODUCT BY ID
	const getProductById = async (id) => {
		try {
			const { data } = await axios(`${API}/${id}`);
			dispatch({
				type: ACTIONS.GET_PRODUCT_DETAIL,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const values = {
		productById: state.productById,
		getProductById,
	};
	return <detailContext.Provider value={values}>{children}</detailContext.Provider>;
}
