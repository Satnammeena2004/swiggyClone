import {useCallback,useState,useEffect} from "react";
import { RESTAURANT_MENU_URL, specific_Restau } from './../constants';
import {useNavigate} from 'react-router-dom'
import { useGetRestuarantMenuApiQuery } from "../components/RTKQuery";
const useRestaurantMenu = (resId)=>{
  //  const {json,isSuccess} = useGetRestuarantMenuApiQuery(resId);
  // console.log("Called",json);
  const [restMenuData, setRestMenuData] = useState([]);
  const navigate = useNavigate()
    const getSpecificRestaurant = useCallback(
    async function getSpecificRestaurant() {
      try {
        const responce = await fetch(RESTAURANT_MENU_URL + resId);
        const json = await responce.json();
      
         setRestMenuData(json.data.cards);
       
        // setRestMenuData(JSON.parse(specific_Restau).data.cards);
        console.log(json.data.cards);
    } catch (err) {
    
        console.log("err", err);
    }
},
[resId]
);

console.log("restmenu date form use",restMenuData)

useEffect(() => {
    getSpecificRestaurant();

}, [getSpecificRestaurant]);


  return restMenuData;



}


export default useRestaurantMenu