import "../app.css";
import {FaStar} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";
import {memo, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../constants";

export const RestaurentCard = memo(
  ({
    id,
    name,
    avgRating,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    sla,
    cuisines,
    locality,
  }) => {

  
    return (
      <Link to={"/restaurant/"+id}>
        <div className="restaurent-card" key={id}>
          <div
            className="card-image"
            data-offers={
              aggregatedDiscountInfoV3 &&
              aggregatedDiscountInfoV3?.header +
                " " +
                aggregatedDiscountInfoV3?.subHeader
            }
          >
            <img
              src={
                `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
                cloudinaryImageId
              }
              alt="card-img"
            />
          </div>
          <div className="card-content">
            <h1>{name}</h1>
            <h3>
              <FaStar /> {avgRating} | {sla.slaString}{" "}
            </h3>

            <h5 style={{wordBreak: "break-word"}}>{cuisines.slice(0, 1)}..</h5>
            <h5>
              {locality}
              <MdLocationPin style={{color: "green"}} />{" "}
            </h5>
          </div>
        </div>
     </Link>
    );
  }
);

// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId="

const Restaurents = ({
  ALL_DATA,
  restaurentsList,
  addMuch,
  setAddMuch,
  searchString,
}) => {



  return (
    <>
      <h1>Top restaurant chains in Kota</h1>
      <div className="restaurents">
        <Link to={"/restaurant/12233"}>GO</Link>
        {ALL_DATA.length > 0
          ? restaurentsList
              ?.slice(0, 6 + addMuch)
              .map((e) => (
                <RestaurentCard
                  key={e.info.id}
                  {...e.info}
                
                />
              ))
          : Array(6)
              .fill(0)
              .map((e, i) => <Shimmer key={i} />)}
        {restaurentsList.length > 0 || searchString === "" ? (
          ""
        ) : (
          <h1>No match Found "{searchString}"</h1>
        )}
      </div>

      {restaurentsList.length > 0 ? (
        <div style={{textAlign: "center", padding: "1rem"}}>
          <button
            className="more-restaurant-btn"
            onClick={() => setAddMuch((n) => n + 3)}
          >
            MORE
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Restaurents;
