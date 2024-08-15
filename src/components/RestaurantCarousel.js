import {memo, useRef} from "react";
// import "../App.css";
import {IMAGE_URL} from "../constants";
import Shimmer from "./Shimmer";
import {IoMdArrowForward} from "react-icons/io";
import {IoArrowBack} from "react-icons/io5";

const CarouselItems = memo(({imageId}) => {
  return (
      <img className="select-none pointer-events-none" src={IMAGE_URL + imageId} alt="..." />
  );
});

const RestaurentsCarousel = ({ALL_DATA, restaurantBanner}) => {
  const ref = useRef(null);

  return (
  
    <div className="py-3 px-10">
      
      <div className="restaurents-carousel-heading flex justify-between py-5 px-36 ">
        <h1 className="font-bold sm:text-3xl">Best Offer For You</h1>
        <div className="scroll-bar-arrows flex justify-between gap-3">
          <IoArrowBack
            className="sm:text-3xl"
            onClick={() => {
              ref.current.scrollBy(-100, 0);
            }}
          />
          <IoMdArrowForward
          className="sm:text-3xl"
            onClick={() => {
              ref.current.scrollBy({left:100,top: 0,behavior:"smooth"});
            }}
          />
        </div>
      </div>
      <div className="restaurents-carousel no-scrollbar flex overflow-x-auto w-9/12 h-40 m-auto snap-mandatory snap-x gap-x-10 py-4 scroll-smooth" ref={ref}>
        {restaurantBanner.length > 0 ? (
          restaurantBanner[0]
            .filter((elem) => elem.entityType === "BANNER")
            .map((e) => <CarouselItems {...e} key={e.id} />)
        ) : (
          <>
            <Shimmer />
            <Shimmer />
          </>
        )}
      </div>
    </div>
  
  );
};

export default RestaurentsCarousel;
