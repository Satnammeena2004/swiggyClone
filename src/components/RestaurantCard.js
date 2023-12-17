import "../app.css";
import {FaStar} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";
import {memo, useState} from "react";
import Shimmer from "./Shimmer";

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
    );
  }
);


const Restaurents = ({restaurentsList, addMuch, setAddMuch}) => {
 

  return (
    <>
    <h1>Top restaurant chains in Kota</h1>
      <div className="restaurents">
        {restaurentsList.length > 0 ?'':Array(6).fill(0).map((e,i)=><Shimmer key={i} />)}
        {restaurentsList?.slice(0, 6 + addMuch).map((e) => (
        <RestaurentCard key={e.id} {...e} /> ))}
      </div>
      {
        restaurentsList.length>0?
      <div style={{textAlign: "center",padding:'1rem'}}>
        <button className="more-restaurant-btn" onClick={() => setAddMuch((n) => n + 3)}>MORE</button>
      </div>
      :''
}
    </>
  );
};

export default Restaurents;
