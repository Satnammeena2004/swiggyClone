import React, { useState } from 'react'

const arr = ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/garnimnzruqmizx2acjt", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/75fd25ee-d2c5-4e26-878d-0be57878d5c0_69876.jpg"]


function BannerCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='max-w-4xl  w-full h-96 border mx-auto bg-rose-600 rounded-lg overflow-hidden *:box-border relative my-10'>
            <div style={{ transform: `translateX(-${activeIndex * 100}%)` }} className='flex w-full h-full bg-gray-300  transition ease-in-out duration-500'>
                {arr.map((src, index) => {
                    return <img key={index} src={src} alt={src} className='w-full h-full object-cover flex-shrink-0' />
                })}
            </div>
            <button onClick={() => {

                setActiveIndex((i) => (i - 1 + arr.length) % arr.length)
            }} className='p-2 bg-white w-10 h-10 rounded-full absolute left-10 top-2/4'>P</button>
            <button onClick={() => {

                setActiveIndex((i) => (i + 1) % arr.length)
            }} className='p-2 bg-white w-10 h-10 rounded-full absolute right-10 top-2/4'>N</button>
            <div className="absolute bottom-4 left-2/4 transform -translate-x-2/4 flex gap-2">
        {arr.map((_, index) => (
          <span
            key={index}
            className={`block h-1 cursor-pointer rounded-2xl transition-all ${
              activeIndex === index ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => {
                setInterval(()=>{
                    setActiveIndex((i) => (i + 1) % arr.length)

                },2000)
            }}
          />
        ))}
      </div>
        </div>
    )
}

export default BannerCarousel