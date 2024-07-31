import {memo, useRef} from "react";
// import "../App.css";
import {IMAGE_URL} from "../constants";
import Shimmer from "./Shimmer";
import {IoMdArrowForward} from "react-icons/io";
import {IoArrowBack} from "react-icons/io5";

const CarouselItems = memo(({imageId}) => {
  return (
    <div className="carousel-items min-w-[10rem] min-h-[10rem] snap-center	scroll-smooth">
      <img src={IMAGE_URL + imageId} alt="..." />
    </div>
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
              ref.current.scrollBy(100, 0);
            }}
          />
        </div>
      </div>
      <div className="restaurents-carousel flex overflow-x-auto w-9/12 m-auto snap-mandatory snap-x gap-x-10 py-4" ref={ref}>
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
