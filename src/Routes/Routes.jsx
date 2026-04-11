import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/auth/Login";
import ForgetPassword from "../Pages/auth/ForgetPassword";
import VerifyCode from "../Pages/auth/VerifyCode";
import SetNewPassword from "../Pages/auth/SetNewPassword";

import AdminRoute from "../ProtectedRoute/AdminRoute";
import Dashboard from "../Pages/layout/Dashboard";
import ErrorBoundary from "../ErrorBoundary";

import DashboardHome from "../Pages/dashboardHome/DashboardHome";
import Orders from "../Pages/orders/Orders";
import Products from "../Pages/products/Products";
import Inventory from "../Pages/inventory/Inventory";
import DeliveryStatus from "../Pages/deliveryStatus/DeliveryStatus";
import Customers from "../Pages/customers/Customers";
import Promotions from "../Pages/promotions/Promotions";
import Analytics from "../Pages/analytics/Analytics";
import Revenue from "../Pages/revenue/Revenue";
import StoreSettings from "../Pages/storeSettings/StoreSettings";
import Support from "../Pages/support/Support";
import Profile from "../Pages/profile/Profile";
import PasswordReset from "../Pages/auth/PasswordReset";
import SignUp from "../Pages/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/delivery-status",
        element: <DeliveryStatus />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/promotions",
        element: <Promotions />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/revenue",
        element: <Revenue />,
      },
      {
        path: "/store-settings",
        element: <StoreSettings />,
      },
      // {
      //   path: "/support",
      //   element: <Support />,
      // },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/verify-code", element: <VerifyCode /> },
  { path: "/reset-password", element: <PasswordReset /> },
  { path: "/set-new-password", element: <SetNewPassword /> },
  { path: "/sign-up", element: <SignUp /> },
]);

export default router;
