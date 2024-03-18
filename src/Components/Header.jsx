import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  return (
    <nav className="bg-black text-white w-full  p-3 justify-self-center m-auto flex align-middle sticky top-0 z-50 ">
      <div className="flex justify-between align-middle w-full">
        <div className=" mx-3 si  flex align-middle justify-center">
          <h1 className="text-2xl font-bold">
            eShop<span className="text-purple-800">.</span>
          </h1>
        </div>
        <div className=" flex justify-center align-middle  p-2 gap-6 mr-4 ">
          <Link
            to={"/"}
            className=" hover:text-purple-400 ease-in-out duration-300"
          >
            Home
          </Link>
          <Link
            to={"/products"}
            className=" hover:text-purple-400 ease-in-out duration-300"
          >
            Products
          </Link>
          <Link
            to={"/addcart"}
            className="text-xl hover:text-purple-400 ease-in-out duration-200 "
          >
            <FiShoppingBag />
            <p className="absolute w-4 h-4 bg-purple-500 text-white grid place-content-center rounded-full text-sm   transform translate-x-3/4 -translate-y-3/4">
              {cartItems.length}
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
