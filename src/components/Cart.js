import { useSelector, useDispatch } from "react-redux";
import RestaurantCartCard from "./RestaurantCartCard";
import { clearItems } from "../utils/cartSlices";

function Cart({ className }) {
  const cartItems = useSelector((s) => s.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems);
  function handleClear() {
    dispatch(clearItems());
  }

  return (
    <>
      <div className={"m-auto w-3/5 "}>
        <button className="p-2 bg-green-400 rounded-md" onClick={handleClear}>
          Clear Items
        </button>
        <h2 className="text-lg text-center">Your Cart Items</h2>
        {cartItems.map((item) => (
          <RestaurantCartCard key={item.id} item={item} {...item} />
        ))}
      </div>
    </>
  );
}

export default Cart;
