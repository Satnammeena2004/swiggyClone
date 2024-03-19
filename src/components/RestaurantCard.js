// import "../App.css";
import {FaStar} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";
import {memo} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {RESTAURANT_IMG_URL} from "../constants";

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
    className,
  }) => {
    // console.log(name);
    return (
      <Link
        key={id}
        className={
          className
            ? className
            : "card min-w-52 w-full shadow-md p-2 rounded hover:scale-90 transition-transform "
        }
        to={"/restaurant/" + id}
      >
        <div
          className="card-image h-40  bg-gradient-to-b from-transparent  to-neutral-800 from-10%  rounded-lg overflow-hidden relative"
         
        >
          <img
            className="object-cover w-full h-full order-first relative  -z-10"
            src={RESTAURANT_IMG_URL + cloudinaryImageId}
            alt="card-img"
          />
          <span className="absolute bottom-0 left-4 text-xl font-bold tracking-tight text-slate-100">
            {aggregatedDiscountInfoV3 &&
              aggregatedDiscountInfoV3?.header +
                " " +
                aggregatedDiscountInfoV3?.subHeader}
          </span>
        </div>
        <div className={className ? "order-first basis-3/4" : ""}>
          <h1
            className={
              className
                ? "truncate py-px m-px font-medium text-3xl mb-2 text-balance"
                : "truncate py-px m-px font-medium "
            }
          >
            {name}
          </h1>
          <h3 className="flex items-center gap-1 py-px text-sm	">
            <FaStar /> {avgRating} | {sla?.slaString}{" "}
          </h3>

          <h5 className=" truncate py-px text-sm	">{cuisines?.join(", ")}</h5>
          <h5 className="flex gap-1 items-center py-px text-sm	">
            <MdLocationPin style={{color: "green"}} /> {locality}
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-14 px-10 mx-auto  py-8 j  w-9/12 font-[Poppins]">
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
