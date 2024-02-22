import React from "react";
import "./styles/null.scss";
import MainRoutes, { PUBLIC_ROUTES } from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const { pathname } = location;

  return PUBLIC_ROUTES.some((route) => route.path === pathname) ? (
    <>
      <Header key="header" />
      <MainRoutes key="main" />
      <Footer key="footer" />
    </>
  ) : (
    <NotFoundPage key="not-found-page" />
  );
}
