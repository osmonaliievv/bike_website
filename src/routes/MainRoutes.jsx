// <<<<<<< HEAD
// import React from "react";
// import HomePage from "../pages/HomePage/HomePage";
// import { Route, Routes } from "react-router-dom";
// import DetailsPage from "../pages/DetailsPage/DetailsPage";
// import CatalogPage from "../pages/CatalogPage/CatalogPage";
// import AdminPage from "../pages/AdminPage/AdminPage";
// import EditPage from "../pages/EditPage/EditPage";
// import CartPage from "../pages/CartPage/CartPage";
import PaymentForm from "../components/Payment/PaymentForm";

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
import { Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import CartPage from "../pages/CartPage/CartPage";
import EditPage from "../pages/EditPage/EditPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Layout from "../components/Layout";

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
    path: "/admin",
    element: (
      <Layout>
        <AdminPage />
      </Layout>
    ),
  },
  {
    id: 4,
    path: "/edit",
    element: (
      <Layout>
        <EditPage />
      </Layout>
    ),
  },
  {
    id: 5,
    path: "/details/:id",
    element: (
      <Layout>
        <DetailsPage />
      </Layout>
    ),
  },
  {
    id: 6,
    path: "/cart",
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },
  {
    id: 7,
    path: "*",
    element: <NotFoundPage />,
  },
  { id: 8, path: "/payment", element: <PaymentForm /> },
];

export default function MainRoutes() {
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}
