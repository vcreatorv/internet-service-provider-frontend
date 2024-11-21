import {RouteObject, useRoutes} from "react-router-dom";
import { ProviderCatalogPage } from "./pages/ProviderCatalogPage";
import { MainPage } from "./pages/MainPage";
import { ProviderServicePage } from "./pages/ProviderServicePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserPage } from "./pages/UserPage";
import { ConnectionRequestPage } from "./pages/ConnectionRequestPage";


export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage />,
        },
        {
            path: "provider-duties",
            element: <ProviderCatalogPage />,
        },
        {
            path: "provider-duties/:id",
            element: <ProviderServicePage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/user",
            element: <UserPage />,
        },
        {
            path: "/connection-request",
            element: <ConnectionRequestPage />,
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};