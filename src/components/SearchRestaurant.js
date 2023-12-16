import { useState } from "react";

const SearchRestaurent = ({ALL_RESTAURANT_DATA,setRestaurentsList})=>{

    const [searchString,setSearchString] = useState('');
  
  function handleClick(){
     setRestaurentsList([...ALL_RESTAURANT_DATA?.filter((e)=>e.name.toLowerCase().includes(searchString.toLowerCase()))])
  }
  
    return (
      <div className="search-bar">
      <input value={searchString} onChange={(e)=>{setSearchString(e.target.value)}} className="search-restaurent" placeholder="Name" type="text" />
      <button onClick={handleClick}>Search</button>
      </div>
    )
  }

export default SearchRestaurent;