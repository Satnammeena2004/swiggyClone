import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About, Company} from "./components/About";
import Profile from "./ClassComponent/ProfileClass";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Offers from "./components/Offer";
import Shimmer from "./components/Shimmer";



// Chunking
//On Demand Loading
//Lay Loading
//Code spliting
//Dynamic import
//Dynamic bundling

const Cart = lazy(()=>import("./components/Cart"));
const InstaMart = lazy(()=>import("./components/InstaMart")); 




const root = ReactDOM.createRoot(document.getElementById("root"));

/*
       <Header/> // always there
       <About/> if /about : then it render
       <Body/>  // see when "/" 
       <Conatct/> if /contact : then it render
       <Footer/>  //always there
*/

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "company/:compId", //we can use like this also => /about/company/:comp:Id
            element: <Company />,
            children: [
              {
                path: "tech", //we can use like this also => /about/company/:comp:Id/tech
                element: <span>: Tech</span>, //nested children
              },
            ],
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/instamart",
        element:<Suspense fallback={<Shimmer/>}> <InstaMart /></Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<Shimmer/>}> <Cart /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
