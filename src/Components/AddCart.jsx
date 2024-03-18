import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  calculatePrice,
} from "../store/cartslice";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const AddCart = () => {
  const dispatch = useDispatch();
  const { items, subTotal, tax, total } = useSelector((state) => state.cart);
  // console.log(cartItems.title);
  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));

    dispatch(calculatePrice());
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
    dispatch(calculatePrice());
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
    dispatch(calculatePrice());
    toast.success("Item removed");
  };
  return (
    <>
      <div className=" mx-auto px-4 py-8 h-screen">
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 gap-5 ">
          {/* <!-- Cart Items (Left Side) --> */}
          <div className="mr-4">
            <div className="bg-purple-100 rounded-lg shadow-md p-4 h-96 overflow-y-auto ">
              <div className=" w-full p-2 mb-9">
                <p className="font-semibold uppercase text-left text-2xl">
                  Item Added to cart
                </p>
              </div>
              {/* <!-- Cart Item 1 --> */}
              {items.length === 0 ? (
                <div className="text-xl text-slate-300 flex justify-center align-middle my-20 ">
                  No items in cart
                </div>
              ) : (
                items.map((item) => (
                  <CartItems
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    increment={handleIncrement}
                    decrement={handleDecrement}
                    remove={handleRemove}
                  />
                ))
              )}

              {/* <!-- Add more cart items as needed --> */}
            </div>
          </div>
          {/* <!-- Cart Summary (Right Side) --> */}
          <div className=" w-3/5">
            <div className="bg-purple-100 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
              <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                <span>Subtotal:</span>
                <span>${subTotal}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                <span>Tax:</span>
                <span>${tax}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <button className="w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-800 focus:outline-none">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link to={"/products"}>
        <button className="bg-gray-300 w-full hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded">
          Continue Shopping
        </button>
      </Link>
    </>
  );
};

const CartItems = ({
  id,
  img,
  title,
  price,
  quantity,
  increment,
  decrement,
  remove,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center border-b bg-white  border-gray-200 p-8 rounded-md mb-4 md:flex-row ">
        <img
          src={img}
          alt="Item 1"
          className="w-20 h-20 object-contain rounded-lg mr-4"
        />
        <div className="flex-1">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-gray-600">Price: {price}</p>
          {/* <!-- Increment/Decrement buttons --> */}
          <div className="flex items-center mt-2">
            <button
              onClick={() => decrement(id)}
              className="text-gray-600 focus:outline-none mr-2"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => increment(id)}
              className="text-gray-600 focus:outline-none ml-2"
            >
              +
            </button>
          </div>
        </div>
        {/* <!-- Remove button --> */}
        <button
          onClick={() => remove(id)}
          className="text-gray-700 text-xl ml-4 focus:outline-none"
        >
          <AiFillDelete />
        </button>
      </div>
    </>
  );
};

export default AddCart;
