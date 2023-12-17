import '../app.css'

import {RestaurentCard} from './RestaurantCard'
import Shimmer from './Shimmer';


const CarouselItems = ({imageId})=>{

  return (
    <div className="carousel-items">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/`+imageId} alt='...'/>
    </div>
  )
}

const RestaurentsCarousel = ({ ALL_DATA}) => {
    return (
      <>
      <h1>Best Offer For You</h1>
        <div className="restaurents-carousel">
          {
         ALL_DATA.length>0?
         ALL_DATA[0].info.map((e)=><CarouselItems {...e} key={e.id} />)
         :
         <><Shimmer/><Shimmer/></>
          }
         
        </div>
      </>
    );
  };


export default  RestaurentsCarousel;
