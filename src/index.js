import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import {
  BrowserRouter,
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
import InstaMart from './components/InstaMart';
// import './index.css'

// document.onprogress = (e)=>console.log("hello",e)

const root = ReactDOM.createRoot(document.getElementById("root"));


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
        <Route path="instamart" element={<InstaMart />} />
        <Route path="restaurant/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<Error/>} />
      <Route element={<h1>Page Layout <Outlet/> </h1>}>
      <Route path="/privacy" element={<h2>page Layout : Privacy</h2>} />
      <Route path="/tos" element={<h2>page Layout : Tos</h2>} />
        </Route>  
      </Route>
    </Routes>
  </BrowserRouter>
);
