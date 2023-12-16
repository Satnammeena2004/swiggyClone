import Restaurents from "./RestaurantCard";
import SearchRestaurent from "./SearchRestaurant";
import { useEffect,useState } from "react";
import { Restaurant_DATA } from "../constants";

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([...Restaurant_DATA]);
  }, 3000);
});

const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [restaurentsList, setRestaurentsList] = useState([]);

  async function delay() {
    const res = await p;
    setRestaurentsList(res);
  }
  useEffect(() => {
    //   async function getdata(){
    //     const responce = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2137468&lng=75.86483330000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //    const res = await responce.json()
    //    setRestaurentsList([...res.data.cards.map(e=>{console.log(e.card.card?.gridElements?.infoWithStyle?.restaurants?.map((e)=>e))})])
    // }
    // getdata()

    delay();
  }, []);
  
    return (
      <div>
        <SearchRestaurent restaurents_DATA={Restaurant_DATA} restaurentsList={restaurentsList} setRestaurentsList={setRestaurentsList}  />
        <Restaurents  restaurentsList={restaurentsList} addMuch={addMuch} setAddMuch={setAddMuch} />
  
      </div>
    );
  };

export default Body;