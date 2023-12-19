import {useRef} from "react";
import "../app.css";
import {IMAGE_URL} from "../constants";
import Shimmer from "./Shimmer";
import {IoMdArrowForward} from "react-icons/io";
import {IoArrowBack} from "react-icons/io5";

const CarouselItems = ({imageId}) => {
  return (
    <div className="carousel-items">
      <img src={IMAGE_URL + imageId} alt="..." />
    </div>
  );
};

const RestaurentsCarousel = ({ALL_DATA}) => {
  const ref = useRef(null);
  return (
    <>
      <div className="restaurents-carousel-heading">
        <h1>Best Offer For You</h1>
        <div className="scroll-bar-arrows">
          <IoArrowBack
            onClick={() => {
              ref.current.scrollBy(-100, 0);
            }}
          />
          <IoMdArrowForward
            onClick={() => {
              ref.current.scrollBy(100, 0);
            }}
          />
        </div>
      </div>
      <div className="restaurents-carousel" ref={ref}>
        {ALL_DATA.length > 0 ? (
          ALL_DATA[0].info.map((e) => <CarouselItems {...e} key={e.id} />)
        ) : (
          <>
            <Shimmer />
            <Shimmer />
          </>
        )}
      </div>
    </>
  );
};

export default RestaurentsCarousel;
