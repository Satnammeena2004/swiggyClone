import {useState} from "react";

const SearchRestaurent = ({restaurentsList,setFilterRestaurantList,setQuery}) => {
  const [searchString, setSearchString] = useState("");
  // console.log("restaurentsList",restaurentsList)
  function handleClick() {
    setQuery(searchString)
    try {
      setFilterRestaurantList(restaurentsList.filter(((restaurant)=>restaurant.info.name.toLowerCase().includes(searchString.toLowerCase()))))
    } catch (err) {
      console.log("search string err", err);
    }
  }

  return (
    <div className="search-bar flex justify-center">
      <input
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        className="search-restaurent border-2 w-2/5 p-2 rounded-lg"
        placeholder="Name"
        type="text"
        id="search-input"
      />
     
      
      <button className="border-2 p-2 rounded-lg" onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchRestaurent;
