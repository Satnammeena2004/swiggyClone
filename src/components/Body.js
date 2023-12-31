import Restaurents from "./RestaurantCard";
import SearchRestaurent from "./SearchRestaurant";
import {useEffect, useState} from "react";
import {getdata} from "../constants";
import RestaurentsCarousel from "./RestaurantCarousel";

function filterBanner(res) {
  return res.data.cards
    .map((cards) => cards?.card?.card?.gridElements?.infoWithStyle?.info)
    .filter((e) => e !== undefined);
}
function filterRestaurant(res) {
  return res.data?.cards
    .map((e) => e?.card.card?.gridElements?.infoWithStyle?.restaurants)
    .filter((e) => e !== undefined)
    .flat(Infinity);
}

const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [restaurantBanner, setRestaurantBanner] = useState([]);
  const [ALL_DATA, setALL_DATA] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [restaurentsList, setRestaurentsList] = useState([]);

  const filterRestaurantList = (restaurentsList, searchString) => {
    setRestaurentsList([...restaurentsList]);
    setSearchString(searchString);
  };

  useEffect(() => {
  async  function almostGetting(){
  try{

    const responce = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2137468&lng=75.86483330000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const res = await responce.json()
          console.log("all",res.data?.cards?.map((card)=>card?.card?.card))
          setRestaurantBanner(filterBanner(res));
          setRestaurentsList(filterRestaurant(res))
          setALL_DATA(res.data.cards.map((e)=>e.card.card))
        }catch(err){
          console.log("body",err);
        }  
    }
    almostGetting();

  }, []);

  return (
    <main className="main">
      <div>
        <RestaurentsCarousel
          restaurantBanner={restaurantBanner}
          ALL_DATA={ALL_DATA}
        />
        <SearchRestaurent
          ALL_DATA={ALL_DATA}
          restaurentsList={restaurentsList}
          filterRestaurantList={filterRestaurantList}
        />
        <Restaurents
          searchString={searchString}
          ALL_DATA={ALL_DATA}
          restaurentsList={restaurentsList}
          addMuch={addMuch}
          setAddMuch={setAddMuch}
        />
      </div>
    </main>
  );
};

export default Body;
