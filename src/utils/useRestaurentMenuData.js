import {useCallback,useState,useEffect} from "react";
import { RESTAURANT_MENU_URL } from './../constants';
const useRestaurantMenu = (resId)=>{
  const [restMenuData, setRestMenuData] = useState([]);
    console.log("Rendered useRestaurantMenu")
    const getSpecificRestaurant = useCallback(
    async function getSpecificRestaurant() {
      try {
        const responce = await fetch(RESTAURANT_MENU_URL + resId);
        const json = await responce.json();
        setRestMenuData(json.data.cards);
        console.log(json.data.cards);
    } catch (err) {
        console.log("err", err);
    }
},
[resId]
);

useEffect(() => {
    getSpecificRestaurant();
}, [getSpecificRestaurant]);

return restMenuData;

}


export default useRestaurantMenu