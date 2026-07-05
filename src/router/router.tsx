import { createBrowserRouter } from "react-router-dom";

import { ProductsPage } from "../pages/ProductsPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { Login } from "../pages/Login";
import { MainLayout } from "../layout/MainLayout";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <ProductsPage />
            },
            {
                path: "/products/:id",
                element: <ProductDetailsPage />
            },
            {
                path: "/auth/login",
                element: <Login />
            }
        ]
    }
]);