// <<<<<<< HEAD
// import React from "react";
// import HomePage from "../pages/HomePage/HomePage";
// import { Route, Routes } from "react-router-dom";
// import DetailsPage from "../pages/DetailsPage/DetailsPage";
// import CatalogPage from "../pages/CatalogPage/CatalogPage";
// import AdminPage from "../pages/AdminPage/AdminPage";
// import EditPage from "../pages/EditPage/EditPage";
// import CartPage from "../pages/CartPage/CartPage";

// export const PUBLIC_ROUTES = [
//   { id: 1, path: "/", element: <HomePage /> },
//   { id: 2, path: "/catalog", element: <CatalogPage /> },
//   { id: 3, path: "/admin", element: <AdminPage /> },
//   { id: 4, path: "/edit", element: <EditPage /> },
//   { id: 5, path: "/details/:id", element: <DetailsPage /> },
//   { id: 6, path: "/cart", element: <CartPage /> },
//   { id: 7, path: "/payment", element: <PaymentForm /> },
// =======
import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import { NavLink, Route, Routes } from "react-router-dom";
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
import { useAuthContext } from "../context/AuthContextProvider";
import { ADMIN } from "../helpers/const";
import Like from "../pages/CartPage/Like";
import { Message } from "../components/Message/Message";

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
    path: "/edit",
    element: (
      <Layout>
        <EditPage />
      </Layout>
    ),
  },
  {
    id: 4,
    path: "/details/:id",
    element: (
      <Layout>
        <DetailsPage />
      </Layout>
    ),
  },
  {
    id: 5,
    path: "/cart",
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },

  { id: 6, path: "/payment", element: <PaymentForm /> },
  {
    id: 7,
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    id: 8,
    path: "/auth",
    element: (
      <Layout>
        <Auth />
      </Layout>
    ),
  },
  {
    id: 9,
    path: "*",
    element: <NotFoundPage />,
  },
  { id: 10, path: "/payment", element: <PaymentForm /> },
  { id: 11, path: "/favourites", element: <Like /> },
  { id: 12, path: "/message", element: <Message /> },
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
