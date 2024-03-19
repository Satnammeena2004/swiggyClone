import { customRestaurantIMG } from "../constants";

const RestaurantOffers = ({restMenuData}) => {
  const data = restMenuData
    .map((menu) =>
      menu?.card?.card?.gridElements?.infoWithStyle?.offers?.map((e) => e.info)
    )
    .filter((e) => e !== undefined)
    .flat(1);
  // console.log(data);
  return (
    <div className="offers w-2/4 border p-2 flex overflow-scroll ">
      {data.map(({header, couponCode, offerTag, description, offerIds,offerLogo}) => {
        // console.log(offerIds);
        return (
          <div
            key={offerIds}
            className="offer border rounded-md w-60 p-2 text-xs h-fit "
          >
            <span>{offerTag}</span>
            <img src={customRestaurantIMG('28','28',offerLogo)} alt={header}/>
            <p className="text-nowrap">{header}</p>
            <div>
              <span>{description}</span>
              <span>{couponCode}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantOffers;
