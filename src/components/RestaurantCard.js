import "../App.css";
import {FaStar} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";
import {memo} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


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
      <Link key={id} className="restaurent-card" to={"/restaurant/" + id}>
     
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
     
      </Link>
    );
  }
);

const Restaurents = ({
  ALL_DATA,
  addMuch,
  setAddMuch,
  filterRestaurantList,
  searchString
}) => {
  console.log("filterRestaurantList", filterRestaurantList);

  return (
    <>
      <h1>Top restaurant chains in Kota</h1>
    {searchString!=="" && filterRestaurantList.length===0?<h2>Search Result Not Found "{searchString }"</h2>:''}  
      <div className="restaurents">
        {ALL_DATA.length > 0
          ? filterRestaurantList
              ?.slice(0, 6 + addMuch)
              .map((e) => <RestaurentCard key={e.info.id} {...e.info} />)
          : Array(6)
              .fill(0)
              .map((e, i) => <Shimmer key={i} />)}
      </div>

      {filterRestaurantList.length > 0 ? (
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
