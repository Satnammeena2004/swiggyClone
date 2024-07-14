import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RESTAURANT_MENU_URL, RESTAURENT_URL} from "../constants";

export const restaurantMenuFetchQuery = createApi({
  reducerPath: "restaurantMenuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: RESTAURANT_MENU_URL,
  }),
  endpoints: (builder) => ({
    getRestuarantMenuApi: builder.query({
      query: (param) => param,
    }),
  }),
});

export const restaurantFetchQuery = createApi({
  reducerPath: "restaurantApi",
  baseQuery: fetchBaseQuery({baseUrl: RESTAURENT_URL}),
  endpoints: (builder) => ({
    getResataurant: builder.query({
      query: () => "",
    }),
  }),
});

export const {useGetResataurantQuery} = restaurantFetchQuery;

export const {useGetRestuarantMenuApiQuery} = restaurantMenuFetchQuery;
