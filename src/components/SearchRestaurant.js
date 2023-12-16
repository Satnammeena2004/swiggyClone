import { useState } from "react";

const SearchRestaurent = ({restaurents_DATA,setRestaurentsList})=>{

    const [searchString,setSearchString] = useState('');
  
  function handleClick(){
     setRestaurentsList([...restaurents_DATA.filter((e)=>e.info.name.toLowerCase().includes(searchString.toLowerCase()))])
  }
  
    return (
      <div className="search-bar">
      <input value={searchString} onChange={(e)=>{setSearchString(e.target.value)}} className="search-restaurent" placeholder="Name" type="text" />
      <button onClick={handleClick}>Search</button>
      </div>
    )
  }

export default SearchRestaurent;