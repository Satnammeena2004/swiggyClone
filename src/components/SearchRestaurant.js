import { useState } from "react";

const SearchRestaurent = ({ALL_DATA,filterRestaurantList})=>{

    const [searchString,setSearchString] = useState('');
  function handleClick(){
    try{

      filterRestaurantList(ALL_DATA[2].restaurants.filter((e)=>e.info.name.toLowerCase().includes(searchString.toLowerCase())).map((e)=>e.info),searchString)
    }catch(err){
      console.log("search string err",err);
    }
  }
  
    return (
      <div className="search-bar">
      <input value={searchString} onChange={(e)=>{setSearchString(e.target.value)}} className="search-restaurent" placeholder="Name" type="text" />
      <button onClick={handleClick}>Search</button>
      </div>
    )
  }

export default SearchRestaurent;