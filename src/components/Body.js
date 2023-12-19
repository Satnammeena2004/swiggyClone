import Restaurents from "./RestaurantCard";
import SearchRestaurent from "./SearchRestaurant";
import { useEffect,useState } from "react";
import {getdata } from "../constants";
import RestaurentsCarousel from './RestaurantCarousel'


const Body = () => {
  const [addMuch, setAddMuch] = useState(0);
  const [ALL_DATA,setALL_DATA] = useState([]);
  const [searchString,setSearchString]  = useState('');
  const [restaurentsList, setRestaurentsList] = useState([]);

 const filterRestaurantList  = (restaurentsList,searchString)=>{
        setRestaurentsList([...restaurentsList]);
        setSearchString(searchString)
 }

  useEffect(() => {
  async  function almostGetting(){
          const res = await getdata();
          console.log("restuatrena",res[2]?.restaurants?.map((el)=>el.info));
          setRestaurentsList(res[2]?.restaurants);
          setALL_DATA(res)
    }
    almostGetting();
  }, []);

    return (
    <main className="main">
      <div>
      <RestaurentsCarousel   ALL_DATA={ALL_DATA} />
      <SearchRestaurent  ALL_DATA={ALL_DATA} restaurentsList={restaurentsList} filterRestaurantList={filterRestaurantList}  />
      <Restaurents searchString={searchString}  ALL_DATA={ALL_DATA} restaurentsList={restaurentsList} addMuch={addMuch} setAddMuch={setAddMuch} />
      </div>
    </main>
    );
  };

export default Body;