
import { useEffect, useRef, useState } from "react";

import ShimmerList from "./Shimmer";
import RestaurentCard from "./RestaurantCard";



const Restaurents = ({
    ALL_DATA,
    addMuch,
    setAddMuch,
    filterRestaurantList,
    searchString,
}) => {

    const [showShimmer, setShowShimmer] = useState(true);
    const flag = useRef(true);

    useEffect(() => {
        const element = document.documentElement;;
        const length= filterRestaurantList.length;
        function onScroll() {
            const ST = element.scrollTop;
            const SH = element.scrollHeight;
            const CH = element.clientHeight;
            const value = SH - (CH + ST);

            if (value <= 200 && flag.current && addMuch<=length) {
                setShowShimmer(true)
                flag.current = false
                setTimeout(() => {
                    setShowShimmer(false)
                    setAddMuch( addMuch + 6)
                    console.log("inSetTineOut")
                    flag.current = true
                }, 1000)
            }

        }

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);

        }
    }, [setAddMuch,addMuch])

    return (
        <>
            <h1 className="text-2xl pl-44 box-border font-extrabold mt-4">Top restaurant chains in Kota</h1>
            {searchString !== "" && filterRestaurantList.length === 0 ? (
                <h2>Search Result Not Found "{searchString}"</h2>
            ) : (
                ""
            )}

            <div className="restaurents">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-14 px-10 mx-auto  py-8 j  w-9/12 font-[Poppins]">
                    {ALL_DATA.length > 0
                        ? filterRestaurantList
                            ?.slice(0, 6 + addMuch)
                            .map((e) => <RestaurentCard key={e.info.id} {...e.info} />)
                        : <ShimmerList count={6} />}
                    {showShimmer && <ShimmerList count={3} />}
                </div>
            </div>

            {filterRestaurantList.length > 0 ? (
                <div className="text-center p-4">
                    <button
                        className="more-restaurant-btn"
                        onClick={() => setAddMuch((n) => n + 3)}
                    >
                        MORE
                    </button>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Restaurents;