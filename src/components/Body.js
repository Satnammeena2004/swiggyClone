import Restaurents from "./RestaurantCard";
import SearchRestaurent from "./SearchRestaurant";
import { useEffect,useLayoutEffect,useState } from "react";
import {getdata } from "../constants";
import Shimmer from "./Shimmer";


const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [ALL_RESTAURANT_DATA,setALL_RESTAURANT_DATA] = useState([]);
  const [restaurentsList, setRestaurentsList] = useState([]);

  console.log("before Effect")



  useEffect(() => {
  async  function almostGetting(){
          const res = await getdata();
          console.log(res)
          setRestaurentsList(res);
          setALL_RESTAURANT_DATA(res)
    }
    almostGetting();
  }, []);
 
//  if(!ALL_RESTAURANT_DATA)return ;

    return (
      <div>
      <SearchRestaurent  ALL_RESTAURANT_DATA={ALL_RESTAURANT_DATA} restaurentsList={restaurentsList} setRestaurentsList={setRestaurentsList}  />
      <Restaurents  restaurentsList={restaurentsList} addMuch={addMuch} setAddMuch={setAddMuch} />
      </div>
    );
  };

export default Body;