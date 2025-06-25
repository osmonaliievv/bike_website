import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
import { ADMIN } from "../helpers/const";

import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import CartPage from "../pages/CartPage/CartPage";
import EditPage from "../pages/EditPage/EditPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Layout from "../components/Layout";
import PaymentForm from "../components/Payment/PaymentForm";
import Login from "../components/Auth/Login";
import Auth from "../components/Auth/Auth";
import Like from "../pages/CartPage/Like";
import Message from "../components/Message/Message";
import Header from "../components/Header/Header";

export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    id: 2,
    path: "/catalog",
    element: (
      <Layout>
        <CatalogPage />
      </Layout>
    ),
  },
  {
    id: 3,
    path: "/details/:id",
    element: (
      <Layout>
        <DetailsPage />
      </Layout>
    ),
  },
  {
    id: 4,
    path: "/cart",
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },
  {
    id: 5,
    path: "/payment",
    element: (
      <Layout>
        <PaymentForm />
      </Layout>
    ),
  },
  {
    id: 6,
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    id: 7,
    path: "/auth",
    element: (
      <Layout>
        <Auth />
      </Layout>
    ),
  },
  {
    id: 10,
    path: "*",
    element: <NotFoundPage />,
  },
  {
    id: 11,
    path: "/favourites",
    element: (
      <>
        <Header />
        <Like />
      </>
    ),
  },
  {
    id: 12,
    path: "/message",
    element: (
      <Layout>
        <Message />
      </Layout>
    ),
  },
];
const PRIVATE_ROUTES = [
  { id: 13, path: "/admin", element: <AdminPage /> },

  { id: 14, path: "/edit/:id", element: <EditPage /> },
];

export default function MainRoutes() {
  const { user } = useAuthContext();

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((elem) => (
              <Route
                key={elem.id}
                path={elem.path}
                element={
                  user.email === ADMIN ? elem.element : <NavLink to="*" />
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
}
