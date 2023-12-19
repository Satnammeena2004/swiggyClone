import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {NOT_AVAILABLE_IMG, RESTAURANT_MENU_IMG} from "../constants";
import "./RestaurantMenu.css";
const RestaurantMenu = () => {
  // read dynamic params

  const [restData, setRestData] = useState([]);

  const {resId} = useParams();

  const getSpecificRestaurant = useCallback(
    async function getSpecificRestaurant() {
      const res = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=" +
          resId
      );
     
      const json = await res.json();
      console.log(json.data.cards);
      //  console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
      console.log(
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map(
          (e) => e.card.card
        )
      );
      const rest_data =
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map(
          (e) => e.card.card
        );
      setRestData(rest_data);
      //   const rest = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((e)=>{if(e.card.card?.itemCards){return e.card.card?.itemCards}else{return e.card.card?.categories}})
      //  console.log(rest);
      //  console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((e)=>e.card.card?.itemCards));
      //  console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((e)=>e.card.card?.categories));
    },
    [resId]
  );

  useEffect(() => {
    getSpecificRestaurant();
  }, [getSpecificRestaurant]);

  return (
    <div className="restaurant_manu_items">
      <h1>Reastaurent : {resId}</h1>
      {restData.length > 0
        ? restData.map((card, i) => {
            return (
              <div key={i} className="restaurant_manu_item">
                <h1>{card.title}</h1>

                {
                
                
                
                /* <ul>
                  {card.itemCards
                    ? card.itemCards.map((ell) => {
                        //    console.log(ell.info?.card?.imageId)
                        return (
                          <li key={ell.card?.info?.id}>
                         
                            <div className="restaurant_manu_item_name"> {ell.card.info.name}</div>{" "}
                          <div className="restaurant_manu_item_img" >
                            <img
                              src={
                               ell.card?.info?.imageId?RESTAURANT_MENU_IMG + ell.card?.info?.imageId:NOT_AVAILABLE_IMG
                              }
                              alt=".."
                              />
                        </div>  
                          </li>
                        );
                      })
                    : ""}
                </ul> */}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default RestaurantMenu;
