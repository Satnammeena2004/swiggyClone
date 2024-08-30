import { memo, useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow, BiFoodTag } from "react-icons/bi";
import { NOT_AVAILABLE_IMG, RESTAURANT_MENU_IMG } from "../constants";
import { addItem, removeItem } from "../utils/cartSlices";
import { useDispatch } from "react-redux";
import { OrderCountSection } from "./RestaurantCartCard";

const MenuItem = memo(({ card }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  function handleAdd(item) {
    dispatch(addItem(item?.card?.info));
    // console.log("item Of store",item)
  }
  function handleRemove(item) {
    console.log("handle removed item", item)
    dispatch(removeItem(item?.card?.info?.id));
  }

  return (
    <>
      <div
        className="toggle-restaurant flex justify-between p-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h3>
          {card.title}(
          {card?.itemCards ? card.itemCards.length : card.categories.length})
        </h3>
        {open ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
      </div>

      {open ? (
        <ul className=" flex flex-col gap-4 border bg-stone-50 has-[ul]:text-sm  has-[ul]:mx-2">
          {card.itemCards
            ? card.itemCards.map((ell, i) => {
              return (
                <li
                  key={i}
                  className="flex justify-between  p-2 items-center border "
                >
                  <div className="restaurant_manu_item_name text-sm">
                    <h5>
                      {ell.card?.info?.itemAttribute?.vegClassifier ===
                        "VEG" ? (
                        <BiFoodTag style={{ color: "green" }} />
                      ) : (
                        <BiFoodTag style={{ color: "red" }} />
                      )}{" "}
                    </h5>
                    <span style={{ color: "coral" }}>
                      {ell?.card?.info?.isBestseller ? "Bestseller" : ""}{" "}
                    </span>
                    <h5>{ell.card.info.name}</h5>
                    <h5>
                      ₹
                      {(ell.card.info.defaultPrice || ell.card.info.price) /
                        100}
                    </h5>
                  </div>{" "}
                  <div className="restaurant_manu_item_img w-36 h-36 relative border rounded-md">
                    <img
                      className="object-cover h-full w-full rounded-md"
                      src={
                        ell.card?.info?.imageId
                          ? RESTAURANT_MENU_IMG + ell.card?.info?.imageId
                          : NOT_AVAILABLE_IMG
                      }
                      alt="..."
                    />
                    {/* <button
                        onClick={() => handleClick(ell)}
                        className="absolute  left-10 bg-lime-200 px-2 rounded-lg text-center"
                      >
                        ADD +
                      </button> */}
                    <OrderCountSection handleRemove={handleRemove} showingAddButton={true} showingAddingButton={false} item={ell?.card?.info} className=" absolute bottom-1 left-10 px-2 rounded-lg " />
                  </div>
                </li>
              );
            })
            : card.categories.map((e, i) => (
              <li>
                {" "}
                <MenuItem key={i} card={e}></MenuItem>
              </li>
            ))}
        </ul>
      ) : (
        <ul></ul>
      )}
    </>
  );
});

export default MenuItem;
