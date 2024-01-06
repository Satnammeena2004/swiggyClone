// SOME HELPER FUNCTION THAT HELP US IN CALCULATE SOMETHING;
export function filterBanner(res) {
    return res.data.cards
      .map((cards) => cards?.card?.card?.gridElements?.infoWithStyle?.info)
      .filter((e) => e !== undefined);
  }
export  function filterRestaurant(res) {
    return res.data?.cards
      .map((e) => e?.card.card?.gridElements?.infoWithStyle?.restaurants)
      .filter((e) => e !== undefined)[0]
  }



  

  