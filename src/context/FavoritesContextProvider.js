import React, { createContext, useContext, useReducer } from 'react';
import { getLocalStorageFavorites } from '../helpers/functions';
import { ACTIONS } from '../helpers/const';

const INIT_STATE = {
	like: JSON.parse(localStorage.getItem('like')),
};

const favorites = createContext();
export const useLike = () => useContext(favorites);

const FavoritesContextProvider = ({ children }) => {
	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case ACTIONS.GET_LIKE:
				return { ...state, like: action.payload };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, INIT_STATE);

	// ! GET
	const getLike = () => {
		let like = getLocalStorageFavorites();
		if (!like) {
			localStorage.setItem(
				'like',
				JSON.stringify({
					products: [],
				}),
			);
			like = {
				products: [],
			};
		}
		dispatch({
			type: ACTIONS.GET_LIKE,
			payload: like,
		});
	};
	//!CREATE LIKE
	const addProductsToLike = (product) => {
		let like = getLocalStorageFavorites();
		if (!like) {
			like = {
				products: [],
			};
		}
		let newProductLike = {
			item: product,
		};
		like.products.push(newProductLike);
		localStorage.setItem('like', JSON.stringify(like));
		dispatch({
			type: ACTIONS.GET_LIKE,
			payload: like,
		});
	};

	// ! CHECK PRODUCT IN FAVOURITES
	const checkProductInLike = (id) => {
		let like = getLocalStorageFavorites();
		if (like) {
			let newLike = like.products.filter((elem) => elem.item.id == id);
			return newLike.length > 0 ? true : false;
		}
	};

	//! DELETE
	const deleteProductFromLike = (id) => {
		let like = getLocalStorageFavorites();
		like.products = like.products.filter((elem) => elem.item.id !== id);
		localStorage.setItem('like', JSON.stringify(like));
		dispatch({
			type: ACTIONS.GET_LIKE,
			payload: like,
		});
	};
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
