import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../../utils/cartSlice";
import { IMG_CDN } from "../../utils/constants";

const CartItems = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const item = props.item;
  const { id, imageId, name, quantity } = item;
  const dispatch = useDispatch();

  const addItemClick = () => {
    const itemInfo = { ...item, quantity: 1 };
    setItemCount(itemCount + 1);
    dispatch(addItem(itemInfo));
  };

  const removeItemClick = () => {
    if (itemCount === 0) {
      return;
    }
    const itemInfo = { ...item, quantity: 1 };
    setItemCount(itemCount - 1);
    dispatch(removeItem(itemInfo));
  };

  const deleteItemClick = () => {
    dispatch(deleteItem(item.id));
  };

  useEffect(() => {
    const itemInfo = cartItems.find((item) => id === item.id);
    setItemCount(itemInfo?.quantity || 0);
  }, [cartItems, id]);

  return (
    <div className="border-2 border-gray-300 p-2 mb-2 flex justify-between rounded-md shadow-md">
      <div className="flex h-[150px] flex-col justify-start gap-2">
        <h1 className="text-lg font-semibold truncate text-gray-800">
          {name}
        </h1>
        <div className="w-40">
          <img
            src={`${IMG_CDN}${imageId}`}
            alt={name}
            className="w-full h-[110px] object-cover rounded-md border"
          />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <h2 className="font-semibold text-gray-600">
          Quantity: {quantity}
        </h2>
        <div className="flex flex-col gap-1 items-center">
          <div className="px-2 py-[3px] bg-white rounded-full flex items-center space-x-4 border border-red-500">
            <button onClick={removeItemClick} className="text-sm">
              -
            </button>
            <span className="text-green-500 font-semibold text-lg">
              {itemCount === 0 ? "ADD" : itemCount}
            </span>
            <button onClick={addItemClick} className="text-sm">
              +
            </button>
          </div>
          <button
            className="text-xl font-semibold bg-red-500 text-white px-2 py-1 rounded-lg overflow-hidden mb-2 hover:bg-red-600"
            onClick={deleteItemClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
