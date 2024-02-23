import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API, API_LIKES } from "../helpers/const";
import axios from "axios";

const detailContext = createContext();
export const useDetail = () => useContext(detailContext);

const INIT_STATE = {
  productById: {},
  likes: {},
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

  //! get fav from db.json
  const getFav = async () => {
    const { data } = await axios();
    dispatch({
      type: ACTIONS.POST_LIKES,
      payload: data,
    });
  };

  const values = {
    productById: state.productById,
    getProductById,
    likes: state.likes,
    getFav,
  };
  return (
    <detailContext.Provider value={values}>{children}</detailContext.Provider>
  );
}
