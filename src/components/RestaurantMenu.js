import {useParams} from "react-router-dom";
import {memo, useRef, useState} from "react";
import {BiSolidUpArrow, BiSolidDownArrow} from "react-icons/bi";
import {
  NOT_AVAILABLE_IMG,
  RESTAURANT_MENU_IMG,
} from "../constants";
// import "./RestaurantMenu.css";
import {SiVega} from "react-icons/si";
import useRestaurantMenu from '../utils/useRestaurentMenuData'

import Shimmer from "./Shimmer";

const MenuItem = memo(({card})=> {
  const domRef = useRef(null);
  const [open, setOpen] = useState(false);
// console.log("card",card)
  return (
    <>
      <div
        className="toggle-restaurant flex justify-between p-2 "
        onClick={() => {
          if (domRef.current.style.height === "100%") {
            domRef.current.style.height = "0";
            setOpen(false);
          } else {
            domRef.current.style.height = "100%";
            setOpen(true);
          }
        }}
      >
        <h3>
          {card.title}(
          {card?.itemCards ? card.itemCards.length : card.categories.length})
        </h3>
        {open ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
      </div>

      {
        <ul ref={domRef} className="h-0 overflow-hidden flex flex-col gap-4 border bg-stone-50 has-[ul]:text-sm  has-[ul]:mx-2">
          {card.itemCards
            ? card.itemCards.map((ell) => {
                return (
                  <li key={ell.card?.info?.id} className="flex justify-between  p-2 items-center">
                    <div className="restaurant_manu_item_name">
                      <h5>
                        {ell.card?.info?.itemAttribute?.vegClassifier ===
                        "VEG" ? (
                          <SiVega style={{color: "green"}} />
                        ) : (
                          ""
                        )}{" "}
                      </h5>
                      <span style={{color: "coral"}}>
                        {ell?.card?.info?.isBestseller ? "Bestseller" : ""}{" "}
                      </span>
                      <h5>{ell.card.info.name}</h5>
                      <h5>
                        ₹
                        {(ell.card.info.defaultPrice || ell.card.info.price) /
                          100}
                      </h5>
                    </div>{" "}
                    <div className="restaurant_manu_item_img w-36 h-36 relative">
                      <img className="object-cover h-full w-full rounded-md"
                        src={
                          ell.card?.info?.imageId
                            ? RESTAURANT_MENU_IMG + ell.card?.info?.imageId
                            : NOT_AVAILABLE_IMG
                        }
                        alt="..."
                      />
                      <span className="absolute bottom-4 left-10 bg-lime-200 px-2 rounded-lg text-center">ADD +</span>
                    </div>
                  </li>
                );
              })
            : card.categories.map((e, i) => (
                <MenuItem key={i} card={e}></MenuItem>
              ))}
        </ul>
      }
    </>
  );
})

// function MenuItem({card}) {
//   const domRef = useRef(null);
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div
//         className="toggle-restaurant"
//         onClick={() => {
//           if (domRef.current.style.height === "100%") {
//             domRef.current.style.height = "0";
//             setOpen(false);
//           } else {
//             domRef.current.style.height = "100%";
//             setOpen(true);
//           }
//         }}
//       >
//         <h3>
//           {card.title}(
//           {card?.itemCards ? card.itemCards.length : card.categories.length})
//         </h3>
//         {open ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
//       </div>

//       {
//         <ul ref={domRef}>
//           {card.itemCards
//             ? card.itemCards.map((ell) => {
//                 return (
//                   <li key={ell.card?.info?.id}>
//                     <div className="restaurant_manu_item_name">
//                       <h5>
//                         {ell.card?.info?.itemAttribute?.vegClassifier ===
//                         "VEG" ? (
//                           <SiVega style={{color: "green"}} />
//                         ) : (
//                           ""
//                         )}{" "}
//                       </h5>
//                       <span style={{color: "coral"}}>
//                         {ell?.card?.info?.isBestseller ? "Bestseller" : ""}{" "}
//                       </span>
//                       <h5>{ell.card.info.name}</h5>
//                       <h5>
//                         ₹
//                         {(ell.card.info.defaultPrice || ell.card.info.price) /
//                           100}
//                       </h5>
//                     </div>{" "}
//                     <div className="restaurant_manu_item_img">
//                       <img
//                         src={
//                           ell.card?.info?.imageId
//                             ? RESTAURANT_MENU_IMG + ell.card?.info?.imageId
//                             : NOT_AVAILABLE_IMG
//                         }
//                         alt="..."
//                       />
//                     </div>
//                   </li>
//                 );
//               })
//             : card.categories.map((e, i) => (
//                 <MenuItem key={i} card={e}></MenuItem>
//               ))}
//         </ul>
//       }
//     </>
//   );
// }




const RestaurantMenu = () => {
  // read dynamic params
  const {resId} = useParams();

  console.log("rendered RestaurantMenu")
  const restMenuData = useRestaurantMenu(resId);

  
  return (
    <div className="restaurant_manu_items flex flex-col items-center gap-y-2 font-[Poppins]">
      <h1>Reastaurent : {resId}</h1>
      
      {restMenuData.length > 0
        ? restMenuData.map((e) => <h1 key={e?.card?.card?.info?.id}>{e?.card?.card?.info?.name}</h1>)
        : ""}
      {restMenuData.length > 0 ? (
        restMenuData[2].groupedCard?.cardGroupMap?.REGULAR?.cards
          .map((el) => el.card.card)
          .filter((r) => r.categories || r.itemCards)
          .map((card, i) => {
            return (
              <div
                key={i}
                onClick={() => console.log(card)}
                className="group restaurant_manu_item p-3 border w-2/4 font-medium"
              >
                <MenuItem key={i} card={card} />
              </div>
            );
          })
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default RestaurantMenu;
