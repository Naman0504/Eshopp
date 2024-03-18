import React, { useState, useEffect } from "react";
import { server } from "../index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, calculatePrice } from "../store/cartslice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = ({ id }) => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${server}`);
        // console.log(data);

        setProducts(data);
        setloading(false);
      } catch (error) {
        // setError(true)
        toast.error("error");
        setloading(false);
        console.log("error");
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
    toast.success("Added to cart");

    dispatch(calculatePrice());
  };

  return (
    <div className="bg-purple-200 flex justify-center h-full">
      <div className=" w-full h-fit bg-purple-200 ">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-20">
              {products.map((i) => (
                <Productcard
                  id={i.id}
                  title={i.title}
                  img={i.image}
                  price={i.price}
                  handler={handleAddToCart}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Productcard = ({ id, title, img, price, handler }) => {
  return (
    <>
      <div className="max-w-xs sm:max-w-md md:max-w-xs grid grid-flow-row bg-white rounded overflow-hidden shadow-xl pt-4 transform transition-transform duration-500 hover:scale-105">
        <img
          className="w-full object-contain h-36"
          src={img}
          alt="Product Image"
        />
        <div className="px-2 py-2 grid gap-4 justify-center text-center">
          <div className="font-semibold text-md mb-3 mt-3">{title}</div>
          <p className="text-gray-700 text-base">
            {price}
            {"$"}
          </p>
        </div>
        <div className="px-4 py-2 grid justify-center items-center">
          <button
            onClick={() => handler({ price, id, img, title, quantity: 1 })}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mr-2 w-40"
          >
            Add to Cart
          </button>
          <Link to={`/singleProduct/${id}`}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mt-2 w-40">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Products;
