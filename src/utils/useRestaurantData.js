import { useState, useEffect } from "react";
import { RESTAURENT_URL } from '../constants'
import { filter_Cities_To_Eat, filterBanner, filterRestaurant } from "./Helper";


const useRestaurantData = () => {
  const [restaurantBanner, setRestaurantBanner] = useState([]);
  const [ALL_DATA, setALL_DATA] = useState([]);
  const [cities, setCities] = useState([]);
  const [restaurentsList, setRestaurentsList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);


  useEffect(() => {
    async function almostGetting() {
      try {
        const responce = await fetch(RESTAURENT_URL);
        const res = await responce.json();

        console.log(
          "all",
          res.data?.cards?.map((card) => card?.card?.card)
        );
        setRestaurantBanner(filterBanner(res));
        setCities(filter_Cities_To_Eat(res))
        setRestaurentsList(filterRestaurant(res));
        setFilterRestaurantList(filterRestaurant(res));
        setALL_DATA(res.data.cards.map((e) => e.card.card));
      } catch (err) {
        console.log("body", err);
      }
    }
    almostGetting();
  }, []);


  return [ALL_DATA, restaurantBanner, restaurentsList, filterRestaurantList,setFilterRestaurantList,cities]
}


export default useRestaurantData;