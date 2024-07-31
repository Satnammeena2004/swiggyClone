
export const IMAGE_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';
export const RESTAURANT_MENU_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"
export const RESTAURANT_MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=";
//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77

export function customRestaurantIMG(w,h,imgId){
return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_${w},h_${h}/`+imgId
}


export const RESTAURANT_IMG_URL  ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const RESTAURENT_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2137468&lng=75.86483330000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const NOT_AVAILABLE_IMG  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFm8eXQHeAtAFkY2WBztX3RFB5ONe0RAT7g&usqp=CAU";

async function getdata(){
    const responce = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2137468&lng=75.86483330000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const res = await responce.json()
 return res.data.cards.map((e)=>e.card.card?.gridElements?.infoWithStyle)
 
}