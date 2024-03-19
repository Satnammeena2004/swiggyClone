import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlices";
import postSlice from "./postSlice";
import { restaurantFetchQuery, restaurantMenuFetchQuery } from "../components/RTKQuery";


const store = configureStore({
         reducer:{
            cart:cartSlice,
            posts:postSlice,
            [restaurantMenuFetchQuery.reducerPath]:restaurantMenuFetchQuery.reducer,
            [restaurantFetchQuery.reducerPath]:restaurantFetchQuery.reducer
         },
         middleware:(getDefaultMiddleware)=>{
         return  getDefaultMiddleware().concat(restaurantMenuFetchQuery.middleware,restaurantFetchQuery.middleware);
         }
})
// console.log("store",store);

export default store;