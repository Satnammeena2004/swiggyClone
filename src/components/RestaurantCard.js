// import "../App.css";
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
    // console.log(name);
    return (
      <Link
        key={id}
        className="restaurent-card min-w-52 w-full shadow-md p-4 rounded "
        to={"/restaurant/" + id}
      >
        <div
          className="card-image h-40 w-full rounded-lg overflow-hidden"
          data-offers={
            aggregatedDiscountInfoV3 &&
            aggregatedDiscountInfoV3?.header +
              " " +
              aggregatedDiscountInfoV3?.subHeader
          }
        >
          <img
            className="object-cover w-full h-full "
            src={
              `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
              cloudinaryImageId
            }
            alt="card-img"
          />
        </div>
        <div className="card-content">
          <h1 className="truncate  py-px m-px font-medium">{name}</h1>
          <h3 className="flex items-center gap-1 py-px text-sm	">
            <FaStar /> {avgRating} | {sla.slaString}{" "}
          </h3>

          <h5 className=" truncate py-px text-sm	">{cuisines.join(", ")}</h5>
          <h5 className="flex gap-1 items-center py-px text-sm	">
            <MdLocationPin style={{color: "green"}} />{" "}
            {locality}
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
  searchString,
}) => {
  console.log("filterRestaurantList", filterRestaurantList);

  return (
    <>
      <h1>Top restaurant chains in Kota</h1>
      {searchString !== "" && filterRestaurantList.length === 0 ? (
        <h2>Search Result Not Found "{searchString}"</h2>
      ) : (
        ""
      )}

      <div className="restaurents ">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 px-10 mx-auto  py-8 j  w-9/12 font-[Poppins]">
          {ALL_DATA.length > 0
            ? filterRestaurantList
                ?.slice(0, 6 + addMuch)
                .map((e) => <RestaurentCard key={e.info.id} {...e.info} />)
            : Array(6)
                .fill(0)
                .map((e, i) => <Shimmer key={i} />)}
        </div>
      </div>

      {filterRestaurantList.length > 0 ? (
        <div className="text-center p-4">
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
