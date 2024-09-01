import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

function Place({ text }) {

    return <div className='py-4 px-4 rounded-lg border border-gray-400 text-black/90 text-center text-ellipsis  truncate'>
        {text}
    </div>
}



function RestaurantPlaces({ cities }) {
    console.log("shwhdwhdukh",cities)
    const [showMore,setShowMore] = useState(15)
    return (
        <>
        <h1 className=' text-2xl font-semibold p-2 pl-24 my-4'>{cities[0]?.title }</h1>
        <div className='w-10/12 mx-auto grid grid-cols-4 gap-4   '>
            {cities[0]?.brands.slice(0,showMore).map(place => {
                return <Place {...place} />
            })}
           {cities[0]?.brands.lenght!==showMore && <button className='py-4 px-4 rounded-lg border border-gray-400 text-black/90 text-center text-ellipsis  truncate flex items-center justify-center' onClick={()=>{
              setShowMore(cities[0]?.brands.lenght)
            }}> <span>Show More </span><FaAngleDown/></button>}
        </div>
        </>
    )
}

export default RestaurantPlaces