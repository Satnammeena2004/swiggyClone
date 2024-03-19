import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import App from "./app";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import {About, MySelf, Company, FuntionalComp,FuntionalComp2} from "./components/About";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Comments, { loaders } from "./posts/Comments.js";
import {SpecificPostComment} from './posts/Comments'
import LogSignPage,{action as postAction} from "./components/LogSignPage.js";
import MyRoot from "./react-router-sample/main.js";
import Offers from "./components/Offer.js"
import Practices, { ShowOnePost } from "./components/Practice.js";
import Users from "./components/RTKQuery.js";
// import Offers from "./components/Offer";
// import Cart from "./components/Cart";
// import InstaMart from './components/InstaMart';
const InstaMart = lazy(() => import("./components/InstaMart.js"));
const Cart = lazy(() => import("./components/Cart.js"));
const Posts = lazy(() => import("./posts/Posts.js"));
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
        element:<> <About name="satnam" /> <FuntionalComp/>  </>,
        children: [
          {
            path: "company/:compId",
            element: <Company />,
            children: [
              {
                path: "tech",
                element: <h1>Tech</h1>,
              },
              {
                index: true,
                element: <h1>Tech</h1>,
              },
            ],
          },
          {
            path: "myself",
            element: <MySelf />,
          },
        ],
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
        path: "posts",
        element:<Suspense fallback={<h1>Posts in lazy loading... </h1>}> <Posts /></Suspense>
      },
      {
        path: "login",
        element:<LogSignPage />
      },
      {
        path: "practices",
        element:<Practices />,
        children:[
          {
            path:"onePost/:postId",
            element:<ShowOnePost/>
          }
        ]
      },
     
      {
        path: "comments",
        element:<Suspense fallback={<h1>Posts in lazy loading... </h1>}> <Comments /></Suspense>,
        children:[
          {
            path:':resId',
            element:<SpecificPostComment/>,
            loader:loaders,
          }
        ]
      },
      // {
      //   path: "*",
      //   element: <Error />
      // },
      {
        element:<h1>Without path Page : <Outlet/></h1>,
        children:[
          {
            path:'privacy',
            element:<i>page Layout : Privacy</i>
          },
          {
            path:'tos',
            element:<u>page Layout : Tos</u>,
           
          }
        ]
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
