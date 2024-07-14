import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlices";
import { restaurantFetchQuery, restaurantMenuFetchQuery } from "../components/RTKQuery";


const store = configureStore({
         reducer:{
            cart:cartSlice,
            [restaurantMenuFetchQuery.reducerPath]:restaurantMenuFetchQuery.reducer,
            [restaurantFetchQuery.reducerPath]:restaurantFetchQuery.reducer
         },
         middleware:(getDefaultMiddleware)=>{
         return  getDefaultMiddleware().concat(restaurantMenuFetchQuery.middleware,restaurantFetchQuery.middleware);
         }
})

export default store;