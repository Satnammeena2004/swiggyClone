import Restaurents from "./RestaurantCard";
import SearchRestaurent from "./SearchRestaurant";
import { useEffect,useLayoutEffect,useState } from "react";
import {getdata } from "../constants";
import Shimmer from "./Shimmer";
import RestaurentsCarousel from './RestaurantCarousel'


const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [ALL_DATA,setALL_DATA] = useState([]);
  const [restaurentsList, setRestaurentsList] = useState([]);



  useEffect(() => {
  async  function almostGetting(){
          const res = await getdata();
          setRestaurentsList(res[2]?.restaurants?.map((el)=>el.info));
          setALL_DATA(res)
    }
    almostGetting();
  }, []);

    return (
    <main className="main">
      <div>
      <RestaurentsCarousel   ALL_DATA={ALL_DATA} />
      <SearchRestaurent  ALL_DATA={ALL_DATA} restaurentsList={restaurentsList} setRestaurentsList={setRestaurentsList}  />
      <Restaurents  restaurentsList={restaurentsList} addMuch={addMuch} setAddMuch={setAddMuch} />
      </div>
    </main>
    );
  };

export default Body;