import React, { useEffect, useState } from "react";
import CartItems from "../CartItems/CartItems";
import { Spinner } from "../SpinnerEffect/SpinnerEffect";
import cartIcon from "../../../assets/cart-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline, IoMdAddCircleOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={`p-3 max-w-[800px] ${cartItems.length === 0 ? "" : "min-h-[800px]"} mx-auto sm:px-[40px] relative mt-[90px]`}>
          {cartItems.length === 0 ? (
            <div>
              <h1 className="text-center text-4xl font-bold">Cart is Empty</h1>
              <img className="w-60 mx-auto mt-10" src={cartIcon} alt="" />
            </div>
          ) : (
            <div>
              <h1 className="text-4xl mb-8 flex items-center gap-2 text-[#d74112] font-semibold">
                Cart Items <FaShoppingCart color="" />
              </h1>
              {cartItems.map((item, index) => (
                <CartItems key={index} item={{ ...item }} />
              ))}
            </div>
          )}

          <div className={`p-3 bg-white bg-opacity-70 backdrop-blur-md w-full fixed bottom-0 container flex mx-auto left-0 right-0 rounded-md border-t-2 ${cartItems.length === 0 ? "justify-end" : "justify-between"}`}>
            {cartItems.length !== 0 && (
              <button
                className="bg-green-500 p-3 font-semibold text-white rounded flex gap-2 text-xl items-center uppercase"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            )}
            {cartItems.length === 0 ? (
              <Link
                className="bg-[#f97315] p-3 font-semibold text-white rounded flex gap-2 text-xl items-center"
                to={"/"}
              >
                ADD ITEMS
                <IoMdAddCircleOutline size={"2rem"} />
              </Link>
            ) : (
              <button className="bg-[#f97315] p-3 font-semibold text-white rounded flex gap-2 text-xl items-center">
                PLACE ORDER <IoMdCheckmarkCircleOutline size={"2rem"} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
