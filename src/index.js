import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  useParams,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import {About, MySelf, Company} from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Offers from "./components/Offer";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
       <Header/> // always there
       <About/> if /about then it render
       <Body/>  // see when "/" 
       <Conatct/> if /contact then it render
       <Footer/>  //always there
*/

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,

//       },
//       {
//         path: "/about",
//         element: <About />,
//         children:[
//           {
//             path: "company/:compId", //we can use like this also => /about/company/:compId
//             element: <Company/>,
//             children :[
//               {
//                 path:'tech', //we can use like this also => /about/company/:comp:Id/tech
//                 element :<span>:  Tech</span> //nested children
//               }
//             ]

//           },
//           {
//             path: "myself",
//             element: <MySelf />,

//           }
//         ]
//       },
//       {
//         path: "/contact",
//         element: <Contact />,

//       },
//       {
//         path: "/offers",
//         element: <Offers />,

//       },
//       {
//         path: "/cart",
//         element: <Cart />,

//       },
//       {
//         path: "/restaurant/:resId",
//         element: <RestaurantMenu />,

//       },

//     ],

//   }
// ]);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />}>
          <Route path="company/:compId" element={<Company />}>
            <Route path="tech" element={<h1>Tech</h1>} />
          </Route>
          <Route
            index
            element={
              <h1>
                It has 'index' attribute so it appears with parent when it
                childrens urls not matched 
              </h1>
            }
          />
          <Route path="myself" element={<MySelf />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="offers" element={<Offers />} />
        <Route path="cart" element={<Cart />} />
        <Route path="restaurant/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<h1>Error</h1>} />
      <Route element={<h1>Page Layout <Outlet/> </h1>}>
      <Route path="/privacy" element={<h2>page Layout : Privacy</h2>} />
      <Route path="/tos" element={<h2>page Layout : Tos</h2>} />
        </Route>  
      </Route>
    </Routes>
  </BrowserRouter>
);
