import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import {createBrowserRouter, RouterProvider,useParams} from "react-router-dom";
import {About,MySelf,Company} from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
       <Header/> // always there
       <About/> if /about then it render
       <Body/>  // see when "/" 
       <Conatct/> if /contact then it render
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
        children:[
          {
            path: "/about/company/:compId",
            element: <Company/>,
           
          },
          {
            path: "/about/myself",
            element: <MySelf />,
           
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
       
        
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
       
      },
      
    
    ],

  }
]);

root.render(<RouterProvider router={appRouter} />);
