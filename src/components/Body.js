import Restaurents from "./RestaurantCard";
import SearchRestaurent from "./SearchRestaurant";
import {useEffect, useState} from "react";
import {RESTAURENT_URL} from "../constants";
import RestaurentsCarousel from "./RestaurantCarousel";
import { filterRestaurant,filterBanner } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import useRestaurantData from "../utils/useRestaurantData";



const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [ALL_DATA,restaurantBanner,restaurentsList,filterRestaurantList,setFilterRestaurantList] = useRestaurantData();
  const online = useOnline();

 

  if(!online){return <h1>🔴 Your Offline,Please Check Your Connection !</h1>}

  return (
    <main className="main">
      <div>
        <RestaurentsCarousel
          restaurantBanner={restaurantBanner}
          ALL_DATA={ALL_DATA}
        />
        <SearchRestaurent
        setQuery={setSearchString}
          ALL_DATA={ALL_DATA}
          restaurentsList={restaurentsList}
          setFilterRestaurantList={setFilterRestaurantList}
         
        />
        <Restaurents
        searchString={searchString}
           ALL_DATA={ALL_DATA}
          restaurentsList={restaurentsList}
          filterRestaurantList={filterRestaurantList}
          addMuch={addMuch}
          setAddMuch={setAddMuch}
        />
      </div>
    </main>
  );
};

export default Body;
