import { useRef } from "react";
import { customRestaurantIMG } from "../constants";
import { FaAngleRight } from "react-icons/fa";
// // <div
// key={offerIds}
// className="offer border rounded-md p-2 text-xs h-fit w-2/3"
// >
// <span>{offerTag}</span>
// <div>
//   <img
//     src={customRestaurantIMG("28", "28", offerLogo)}
//     alt={header}
//   />
//   <p className="text-nowrap">{header}</p>
//   <div>
//     <span>{description}</span>
//     <span>{couponCode}</span>
//   </div>
// </div>
// </div>

const RestaurantOffers = ({ restMenuData }) => {
  const ref = useRef(null)
  const data = restMenuData
    .map((menu) =>
      menu?.card?.card?.gridElements?.infoWithStyle?.offers?.map((e) => e.info)
    )
    .filter((e) => e !== undefined)
    .flat(1);
  // console.log(data);
  return (
    <div ref={ref} className="offers w-2/4 border p-2 flex space-x-4 overflow-x-auto relative scroll-smooth ">
      {data.map(
        ({
          header,
          couponCode,
          offerTag,
          description,
          offerIds,
          offerLogo,
        }) => {
          // console.log(offerIds);
          return (
            <div className="offer border rounded-md w-60 p-2 text-xs flex-shrink-0 " key={offerIds}>
              <span className="block font-bold mb-2">{offerTag}</span>
              <div className="flex items-start">
                <img
                  src={customRestaurantIMG("28", "28", offerLogo)}
                  alt={header}
                  className="mr-2"
                />
                <div>
                  <p className="whitespace-nowrap">{header}</p>
                  <div>
                    <span>{description}</span>
                    <span>{couponCode}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
      <button onClick={() => {
        if (ref.current) {

          ref.current.scrollBy(100,0)
        }
      }} className="absolute right-1/4 top-1/3 text-white bg-black/85 w-10 h-10 rounded-full"><FaAngleRight className="absolute top-1/3 right-1/3 " />  </button>

    </div>
  );
};

export default RestaurantOffers;
