import React from 'react'


function Place({ text }) {

    return <div className='py-4 px-4 rounded-lg border border-gray-300 text-black/80 text-center text-ellipsis  truncate'>
        {text}
    </div>
}



function RestaurantPlaces({ cities }) {
    console.log("shwhdwhdukh",cities)
    return (
        <div className='w-10/12 mx-auto grid grid-cols-4 gap-4   '>
            {cities[0]?.brands.map(place => {
                return <Place {...place} />
            })}

        </div>
    )
}

export default RestaurantPlaces