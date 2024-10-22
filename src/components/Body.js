import Restaurents from "./Restaurant";
import SearchRestaurent from "./SearchRestaurant";
import {useState ,useEffect} from "react";

import RestaurentsCarousel from "./RestaurantCarousel";

import useOnline from "../utils/useOnline";
import useRestaurantData from "../utils/useRestaurantData";
import BannerCarousel from "./BannerCarousel";
import RestaurantPlaces from "./RestaurantPlaces";


const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [
    ALL_DATA,
    restaurantBanner,
    restaurentsList,
    filterRestaurantList,
    setFilterRestaurantList,
    cities,
    cuisines,
    explore
  ] = useRestaurantData();
  const online = useOnline();
console.log("banner ",restaurantBanner)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scrollTop", document.documentElement.scrollTop);
      console.log("scrollHeight", document.documentElement.scrollHeight);
      console.log("clientHeight", document.documentElement.clientHeight);
    });
  }, []);

  if (!online) {
    return <h1>🔴 Your Offline,Please Check Your Connection !</h1>;
  }

  return (
    <main className="main">
      <div>
        <BannerCarousel/>
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

        <RestaurantPlaces  cities={cities}/>
        <RestaurantPlaces  cities={cuisines}/>
        <RestaurantPlaces  cities={explore}/>
        
        
      </div>
    </main>
  );
};

export default Body;
