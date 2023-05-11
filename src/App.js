import React from "react";
import  ReactDOM  from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";
import Contact from "./components/Contact";

const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantDetail />
            }
        ]

    }
])

const App = () => {
    return (
        <>
        <Header />
        <Body />
        </>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>)