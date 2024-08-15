import {memo, useState} from "react";
import {customRestaurantIMG} from "../constants";
import {useSelector, useDispatch} from "react-redux";
import {addItem, disCardTheItem} from "../utils/cartSlices";

export const OrderCountSection = memo(
  ({className, showingAddButton, showingAddingButton, item}) => {
    // const [itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch();
    const itemsOfSlice = useSelector((store) => store.cart.items);
    const countOfOrder = itemsOfSlice?.find((e) => e?.id === item?.id);

    console.log("cart", itemsOfSlice);

    
    function handleAdd() {
      dispatch(addItem({...item}));
    }
    function handleDiscard() {
      dispatch(disCardTheItem({...item}));
    }

    
    return (
      <div className={"items-center justify-center flex bg-green-400" + className}>
        {countOfOrder?.orderCount === undefined && showingAddButton && (
          <button
            onClick={handleAdd}
            className=" left-10 bg-lime-500 px-2 rounded-lg text-center"
          >
            ADD +
          </button>
        )}

        {(countOfOrder?.orderCount >= 1 || showingAddingButton) && (
          <div className="price w-14 flex justify-between p-1 border border-green-300 rounded-sm bg-white">
            <button onClick={handleDiscard}>-</button>
            <span>{countOfOrder?.orderCount}</span>
            <button onClick={handleAdd}>+</button>
          </div>
        )}
      </div>
    );
  }
);

const RestaurantCartCard = ({
  imageId,
  name,
  id,
  defaultPrice,
  price,
  description,
  className,
  item,
}) => {
  // const [itemCounts, setItemCounts] = useState(1);
  //
  const [visible, setVisible] = useState(true);
  const itemsOfSlice = useSelector((store) => store.cart.items);
  const countOfOrder = itemsOfSlice?.find((e) => e?.id === item?.id);
  return (
    visible && (
      <div className="border rounded-md my-0 mx-auto  border-b name-img p-2 flex gap-3 items-center justify-around">
        <img
          className="rounded-lg"
          src={customRestaurantIMG(100, 100, imageId)}
          alt="..."
        />
        <div className="grow">
          <p className="truncate">{name}</p>
          <p>
            ₹
            {((defaultPrice || price) / 100) *
              (countOfOrder?.orderCount === 0 ? 1 : countOfOrder?.orderCount)}
          </p>
          {className && (
            <p className="text-neutral-600 text-xs">"👌{description}"</p>
          )}
        </div>
        <OrderCountSection
          setVisible={setVisible}
          showingAddButton={false}
          showingAddingButton={true}
          item={item}
        />
      </div>
    )
  );
};

export default RestaurantCartCard;
