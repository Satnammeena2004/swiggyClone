import { useState } from "react";

const SearchRestaurent = ({ALL_DATA,setRestaurentsList})=>{

    const [searchString,setSearchString] = useState('');
  function handleClick(){
  setRestaurentsList(ALL_DATA[2].restaurants.filter((e)=>e.info.name.toLowerCase().includes(searchString.toLowerCase())).map((e)=>e.info))
  }
  
    return (
      <div className="search-bar">
      <input value={searchString} onChange={(e)=>{setSearchString(e.target.value)}} className="search-restaurent" placeholder="Name" type="text" />
      <button onClick={handleClick}>Search</button>
      </div>
    )
  }

export default SearchRestaurent;