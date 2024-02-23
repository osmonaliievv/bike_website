import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS_USER } from "../helpers/const";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../fire";
export const authContext = createContext();
export const useAuthContext = () => useContext(authContext);
const INIT_STATE = {
  user: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_USER.CHECK_USER:
      return { ...state, user: action.payloud };
    default:
      return state;
  }
};
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS_USER.CHECK_USER,
        payloud: user,
      });
    });
  };
  useEffect(() => {
    checkUser();
  }, []);
  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
      return user;
    } catch (error) {
      console.log("Error registering user:", error);
      throw error;
    }
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  const values = {
    authWithGoogle,
    register,
    logIn,
    logOut,
    checkUser,
    user: state.user,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
