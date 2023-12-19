
export const IMAGE_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';
export const RESTAURANT_MENU_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"
export const RESTAURANT_MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId=";

export const NOT_AVAILABLE_IMG  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFm8eXQHeAtAFkY2WBztX3RFB5ONe0RAT7g&usqp=CAU"
async function getdata(){
    const responce = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2137468&lng=75.86483330000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2137468&lng=75.86483330000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

   const res = await responce.json()
 return res.data.cards.map((e)=>e.card.card?.gridElements?.infoWithStyle)
 
}


const Restaurant_DATA =[
    {
    "info": {
    "id": "176890",
    "name": "Rominus Pizza And Burger",
    "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
    "locality": "Laxman Vihar",
    "areaName": "Ladpura",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Italian-American",
    "Pizzas",
    "American",
    "Barbecue",
    "Grill"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "176890",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2400
    },
    "parentId": "8387",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-laxman-vihar-ladpura-kota-176890",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "104922",
    "name": "Anand Shekhawati Dhaba (Transport Nagar)",
    "cloudinaryImageId": "zalbfjopnwktiv2vvz16",
    "locality": "Jahalawar Road",
    "areaName": "Indraprastha Industrial Area",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian",
    "Thalis",
    "Chinese",
    "Biryani"
    ],
    "avgRating": 4.1,
    "veg": true,
    "feeDetails": {
    "restaurantId": "104922",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "32821",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 10,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "10.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/anand-shekhawati-dhaba-transport-nagar-jahalawar-road-indraprastha-industrial-area-kota-104922",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "468903",
    "name": "Amar Punjabi Express",
    "cloudinaryImageId": "fgc6e6rqnvzmw2rntjz6",
    "locality": "Landmark City Road",
    "areaName": "Kunadi",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Pastas",
    "Desserts",
    "Chinese",
    "North Indian",
    "South Indian",
    "Ice Cream",
    "Burgers",
    "Pizzas",
    "Biryani"
    ],
    "avgRating": 4.1,
    "veg": true,
    "feeDetails": {
    "restaurantId": "468903",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "281706",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 6.1,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "6.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:35:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/amar-punjabi-express-landmark-city-road-kunadi-kota-468903",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "301699",
    "name": "Barbeque Nation",
    "cloudinaryImageId": "pbcirttneijelpll4ods",
    "locality": "Dmc Road",
    "areaName": "Dhanmandi",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 3.7,
    "feeDetails": {
    "restaurantId": "301699",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3900
    },
    "parentId": "2438",
    "avgRatingString": "3.7",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 7,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "7.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/barbeque-nation-dmc-road-dhanmandi-kota-301699",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "201091",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
    "locality": "Kota\n",
    "areaName": "Talwandi",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Desserts",
    "Ice Cream"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "201091",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5100
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5100
    },
    "parentId": "6249",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 9.3,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "9.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹169"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nic-ice-creams-talwandi-kota-201091",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "81945",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
    "locality": "Laxman Vihar",
    "areaName": "Ladpura",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Waffle",
    "Desserts",
    "Ice Cream",
    "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "81945",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "2233",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 6,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "6.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-laxman-vihar-ladpura-kota-81945",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "253992",
    "name": "McDonald's",
    "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
    "locality": "City Mall",
    "areaName": "Indraprastha Industrial Area",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "253992",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "630",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 8.8,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "8.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-city-mall-indraprastha-industrial-area-kota-253992",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "101665",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Dcm Road",
    "areaName": "Dhanmandi",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "101665",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3900
    },
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 7,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "7.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-dcm-road-dhanmandi-kota-101665",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "419708",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Jhalawar Road",
    "areaName": "Indraprastha Industrial Area",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "419708",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "547",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 8.9,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "8.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-jhalawar-road-indraprastha-industrial-area-kota-419708",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "466586",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "fmzsqv51jlp45upgfpb0",
    "locality": "Jawahar Nagar",
    "areaName": "Talwandi",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 3.7,
    "veg": true,
    "feeDetails": {
    "restaurantId": "466586",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "4961",
    "avgRatingString": "3.7",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 9,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "9.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-jawahar-nagar-talwandi-kota-466586",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "74739",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Jhalawar Road",
    "areaName": "Talwandi",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas",
    "Fast Food"
    ],
    "avgRating": 3.7,
    "feeDetails": {
    "restaurantId": "74739",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "721",
    "avgRatingString": "3.7",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 8.7,
    "serviceability": "SERVICEABLE",
    "slaString": "36 mins",
    "lastMileTravelString": "8.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-jhalawar-road-talwandi-kota-74739",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "98843",
    "name": "Maheshwari Rasoi Restaurant",
    "cloudinaryImageId": "lydrobihyerpf5ztgtwk",
    "locality": "Sector 4",
    "areaName": "Talwandi",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Pastas",
    "Chinese",
    "North Indian",
    "South Indian",
    "Biryani"
    ],
    "avgRating": 3.8,
    "veg": true,
    "feeDetails": {
    "restaurantId": "98843",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "262180",
    "avgRatingString": "3.8",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 9.2,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "9.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 03:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹299",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/maheshwari-rasoi-restaurant-sector-4-talwandi-kota-98843",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "75291",
    "name": "New Maheshwari Restaurant",
    "cloudinaryImageId": "at6q5xpncnb6m7icd978",
    "locality": "Dcm Road",
    "areaName": "Chawani",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Thalis",
    "Chinese",
    "Desserts",
    "Combo",
    "Snacks",
    "Rajasthani",
    "Tandoor",
    "Indian",
    "Beverages"
    ],
    "avgRating": 4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "75291",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2600
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2600
    },
    "parentId": "147205",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/new-maheshwari-restaurant-dcm-road-chawani-kota-75291",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "104941",
    "name": "Pakwan Dhaba (MONALISA)",
    "cloudinaryImageId": "s6mpvlhayiof3kizgfha",
    "locality": "Baran Road",
    "areaName": "Borkhera",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Pastas",
    "Chinese",
    "North Indian",
    "South Indian",
    "Burgers",
    "Ice Cream",
    "Pizzas",
    "Biryani"
    ],
    "avgRating": 3.6,
    "veg": true,
    "feeDetails": {
    "restaurantId": "104941",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2900
    },
    "parentId": "153880",
    "avgRatingString": "3.6",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pakwan-dhaba-monalisa-baran-road-borkhera-kota-104941",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "83217",
    "name": "Amar Punjabi Foods",
    "cloudinaryImageId": "us08ptreuvk7onrcx9bg",
    "locality": "Sector 4\n",
    "areaName": "A -18",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Pastas",
    "Chinese",
    "North Indian",
    "Pizzas",
    "Biryani"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "83217",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4600
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4600
    },
    "parentId": "30970",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 9,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "9.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/amar-punjabi-foods-sector-4-a-18-kota-83217",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "76960",
    "name": "Maheshwari Chaska Restaurant",
    "cloudinaryImageId": "yd3ynllwx9jvwi1aqc6n",
    "locality": "Baga",
    "areaName": "Talwandi",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian",
    "Thalis",
    "Fast Food"
    ],
    "avgRating": 4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "76960",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "130235",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 9.2,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "9.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:35:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/maheshwari-chaska-restaurant-baga-talwandi-kota-76960",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "385294",
    "name": "Al Haram",
    "cloudinaryImageId": "dmlfgrrij9o3u2d39jik",
    "locality": "Atwal Nagar",
    "areaName": "Chawani",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Mughlai",
    "North Indian"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "385294",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2900
    },
    "parentId": "403958",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 5.6,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "5.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/al-haram-atwal-nagar-chawani-kota-385294",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "77045",
    "name": "Kesar Punjabi Dhaba",
    "cloudinaryImageId": "kc4vwdha8gzqwtddq9cb",
    "locality": "Shastri Nagar",
    "areaName": "RPS Colony",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Chinese",
    "North Indian",
    "Ice Cream",
    "Biryani"
    ],
    "avgRating": 3.6,
    "veg": true,
    "feeDetails": {
    "restaurantId": "77045",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3900
    },
    "parentId": "116513",
    "avgRatingString": "3.6",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 7.3,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "7.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-14 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kesar-punjabi-dhaba-shastri-nagar-rps-colony-kota-77045",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "76951",
    "name": "Burger Garage Talwandi",
    "cloudinaryImageId": "8d8e8b772b50d94c7648b44e3e3b31a6",
    "locality": "Jawahar Nagar",
    "areaName": "Talwandi",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Burgers",
    "Pastas",
    "Beverages"
    ],
    "avgRating": 4.1,
    "veg": true,
    "feeDetails": {
    "restaurantId": "76951",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "261979",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 8.7,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "8.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-garage-talwandi-jawahar-nagar-talwandi-kota-76951",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "86886",
    "name": "Burger Farm",
    "cloudinaryImageId": "jd2mgfyedgkvxsm7rjss",
    "locality": "Rajeev Gandhi Nagar",
    "areaName": "Indraprastha Industrial Area",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Fast Food",
    "American",
    "Italian-American",
    "Snacks",
    "Grill",
    "Beverages",
    "Barbecue"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "86886",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "4660",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 8.8,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "8.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-12-15 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-farm-rajeev-gandhi-nagar-indraprastha-industrial-area-kota-86886",
    "type": "WEBLINK"
    }
    }
    ]


export  {Restaurant_DATA ,getdata};