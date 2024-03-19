import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import {RestaurentCard} from "./RestaurantCard";
import useRestaurantMenu from "../utils/useRestaurentMenuData";
import RestaurantOffers from "./RestaurantOffers";
import MenuItem from "./RestaurantMenuItem";
import Cart from "./Cart";
import {useLoaderData,useNavigation} from 'react-router-dom'


const RestaurantMenu = () => {
  // read dynamic params
  const loaderData = useLoaderData()
  const navigation = useNavigation()
  const {resId} = useParams();
  const restMenuData = useRestaurantMenu(resId);
  console.log(loaderData,navigation.state);
  return (
    <div className="restaurant_manu_items flex flex-col items-center gap-y-2 font-[Poppins]">

      <Cart className="fixed right-4 top-20 w-72 h-72 overflow-y-scroll border p-1 flex flex-col"/>

      <h1>Reastaurent : {resId}</h1>

      {
        //  console.log( restMenuData.filter((card)=>card?.card?.card?.info)[0]?.card?.card?.info)
        <RestaurentCard
          {...restMenuData.filter((card) => card?.card?.card?.info)[0]?.card
            ?.card?.info}
          className="min-w-52 flex w-2/4  shadow-md p-2 rounded"
        />
      }

      <RestaurantOffers restMenuData={restMenuData} />

      {restMenuData.length > 0 ? (
        restMenuData.map(e=>e?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(e=>e!==undefined).flat(1)
          .map((el) => el.card.card)
          .filter((r) => r.categories || r.itemCards)
          .map((card, i) => {
            return (
              <div
                key={i}
                className="group restaurant_manu_item p-3 border w-2/4 font-medium"
              >
                <MenuItem key={i} card={card} />
              </div>
            );
          })
      ) : (
        <>
        <Shimmer />
       
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
