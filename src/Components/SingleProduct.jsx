import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartslice";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [singledata, setSingleData] = useState([]);
  const price = singledata.price;
  const title = singledata.title;
  const img = singledata.image;

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const singleProduct = async () => {
      // console.log(data);
      try {
        // Fetch data from an API endpoint
        const { data } = await axios.get(`${server}/${id}`);
        // Set the data state

        console.log(data);
        setSingleData(data);
        console.log(setSingleData);
      } catch (error) {
        console.log("error");
      }
    };
    singleProduct();
  }, []);

  const handleAddToCart = (id) => {
    // console.log(id);
    dispatch(addToCart(id));
    toast.success("added to cart");
  };

  return (
    <>
      <div className=" justify-center mx-8 bg-white-100 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-9 px-10 bg-white shadow-lg">
          {/* <!-- Left side (Image) --> */}
          <div className=" h-2/5 ">
            <img
              src={singledata.image}
              alt="Product"
              className=" w-full object-contain md:h-full"
            />
          </div>
          {/* <!-- Right side (Product Details) --> */}
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl font-semibold mb-3">{singledata.title}</h2>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>
              <span className="text-gray-600 ml-2">(4.0)</span>
            </div>
            <p className="text-gray-600 mb-4">{singledata.description}</p>
            <div className="flex items-center mb-5">
              <p className="text-gray-700 font-bold mr-2">
                ${singledata.price}
              </p>
            </div>
            <button
              onClick={() => handleAddToCart({ id, img, price, title })}
              className="bg-purple-800 w-40 text-white px-4 py-2 rounded-full hover:bg-purple-700 mt-6"
            >
              Add to Cart
            </button>
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

export default SingleProduct;
