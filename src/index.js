import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./app";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import LogSignPage from "./components/LogSignPage.js";
import Offers from "./components/Offer.js"

const InstaMart = lazy(() => import("./components/InstaMart.js"));
const Cart = lazy(() => import("./components/Cart.js"));
const Contact = lazy(() => import("./components/Contact.js"));

// document.onprogress = (e)=>console.log("hello",e)




const root = ReactDOM.createRoot(document.getElementById("root"));

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about",
        element:<About/>,
      },
      {
        path: "contact",
        element:<Suspense fallback={<h1>contact in lazy loading... </h1>}>  <Contact /></Suspense>
      },
      {
        path: "offers",
        element: <Offers />
      },
      {
        path: "cart",
        element:<Suspense fallback={<h1>cart in lazy loading... </h1>}> <Cart /></Suspense>
      },
      {
        path: "instaMart",
        element:<Suspense fallback={<h1>instaMart in lazy loading... </h1>}> <InstaMart /></Suspense>
      },
      {
        path: "login",
        element:<LogSignPage />
      },
    
      {
        path: "restaurant/:resId",
        element:<RestaurantMenu />,
        loader:(params)=>params
      },
    ],
  },
]);


root.render( <RouterProvider router={appLayout} /> );
