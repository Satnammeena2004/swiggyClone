import Restaurents from "./RestaurantCard";
import SearchRestaurent from "./SearchRestaurant";
import {useState} from "react";

import RestaurentsCarousel from "./RestaurantCarousel";

import useOnline from "../utils/useOnline";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [
    ALL_DATA,
    restaurantBanner,
    restaurentsList,
    filterRestaurantList,
    setFilterRestaurantList,
  ] = useRestaurantData();
  const online = useOnline();

  if (!online) {
    return <h1>🔴 Your Offline,Please Check Your Connection !</h1>;
  }

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
