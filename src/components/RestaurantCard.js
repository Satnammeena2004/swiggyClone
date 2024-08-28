// import "../App.css";
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { memo } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_IMG_URL } from "../constants";

 const RestaurentCard = memo(
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
            : "card min-w-52 w-full  p-2 rounded hover:scale-90 transition-transform "
        }
        to={"/restaurant/" + id}
      >
        <div
          className="card-image h-40  bg-gradient-to-b from-transparent  to-neutral-800 from-10%  rounded-lg overflow-hidden relative  "

        >
          <img
            className="object-cover w-full h-full order-first relative  -z-10"
            src={RESTAURANT_IMG_URL + cloudinaryImageId}
            alt="card-img"
          />
          <span className="absolute z-10 bottom-0  left-4 text-xl font-bold tracking-tight text-slate-100">
            {aggregatedDiscountInfoV3 &&
              aggregatedDiscountInfoV3?.header +
              " " +
              aggregatedDiscountInfoV3?.subHeader}
          </span>
          <span style={{ background: "linear-gradient(to top, rgb(0 0 0 / 37%), transparent 20%)" }} className=" w-full h-full absolute top-0 min-w-20 min-h-20"></span>
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
            <MdLocationPin style={{ color: "green" }} /> {locality}
          </h5>
        </div>
      </Link>
    );
  }
);


export default RestaurentCard

