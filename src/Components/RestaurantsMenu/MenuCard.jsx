import { IMG_CDN } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";
import { useEffect, useState } from "react";
import VEG_IMG from "../../../assets/icons8-veg-48.png";

const MenuCard = (props) => {
  const { dishData } = props;
  const cartItems = useSelector(store => store.cart.items);
  const {id, name, price, description, imageId, defaultPrice } =
    dishData?.card?.info;

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const itemInfo = cartItems.filter((item) => id === item.id);
    setItemCount(itemInfo[0]?.quantity ? itemInfo[0]?.quantity : 0);
  }, [])

  const imageSource = IMG_CDN + imageId;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    const itemInfo = { ...item.card.info, quantity: 1 };

    setItemCount(itemCount + 1);
    dispatch(addItem(itemInfo));
  };

  const removeItemClick = (item) => {
    if (itemCount === 0) {
      return;
    }
    const itemInfo = { ...item.card.info, quantity: 1 };
    setItemCount(itemCount - 1);
    dispatch(removeItem(itemInfo));
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md flex md:flex-row justify-between border">
      <div className="">
        <img src={VEG_IMG} alt="veg-img" className="w-5" />
        <h3 className="md:text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-m">₹{price / 100 || defaultPrice / 100}</h4>
        <p className="text-sm text-gray-500 ">{description}</p>
      </div>

      <div className="ml-4 mt-4 ">
        <div className="w-[80px] h-[70px] md:w-[118px] relative md:h-[96px]">
          <img
            className="w-full h-full object-cover rounded-md border"
            src={imageSource}
            alt={name}
          />
          <div className="px-1 py-[1px] space-x-1 absolute bottom-1 md:px-2 md:py-[3px] bg-white rounded-full flex items-center translate-x-[20%] md:space-x-2 border">
            <button
              onClick={() => removeItemClick(dishData)}
              className="text-sm"
            >
              -
            </button>
            <span className=" text-[13px] md:text-base text-green-500 font-semibold">
              {itemCount === 0 ? "ADD" : itemCount}
            </span>
            <button onClick={() => handleClick(dishData)} className="text-sm">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
