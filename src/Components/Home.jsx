import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaShoppingCart, FaClock } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { server } from "../index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, calculatePrice } from "../store/cartslice";
import toast from "react-hot-toast";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${server}/?limit=10`);
        console.log(data);

        setProducts(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchProducts();
  }, []);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleAddToCart = (id) => {
    // console.log(id);
    dispatch(addToCart(id));
    toast.success("Added to cart");

    dispatch(calculatePrice());
  };
  return (
    <>
      <section className="bg-purple-100 text-black py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to eShop<span className="text-purple-800">.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Shop the latest trending produts
          </p>
          <Link
            to={"/products"}
            className="bg-purple-500 text-gray-800 px-8 py-3 rounded-full uppercase text-sm font-bold hover:bg-purple-700"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* <!-- Featured Products --> */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mx-5 mb-10">Featured Products</h2>

          <Slider {...settings}>
            {products.map((i) => (
              <div className=" px-5 ">
                <ServiceCard
                  id={i.id}
                  img={i.image}
                  title={i.title}
                  price={i.price}
                  handler={handleAddToCart}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <div className="bg-black">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Gallery</h2>
          <div className="grid grid-cols-1 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* <!-- Gallery Item 1 --> */}
            <div className="relative overflow-hidden h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={img1}
                alt="Random Image"
              />
            </div>
            {/* <!-- Gallery Item 2 --> */}
            <div className="relative overflow-hidden h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={img2}
                alt="Random Image"
              />
            </div>
            {/* <!-- Gallery Item 3 --> */}
            <div className="relative overflow-hidden h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={img3}
                alt="Random Image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-purple-100 py-12 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Service Card 1 --> */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-3 flex gap-3">
                <FaShoppingCart className="text-purple-400  text-3xl mx-1" />

                <h3 className="text-xl font-semibold text-gray-800 ">
                  Fast Shipping
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* <!-- Service Card 2 --> */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-3 flex gap-3">
                <FaClock className="text-purple-400 text-3xl mx-1" />
                <h3 className="text-xl font-semibold text-gray-800 ">
                  24/7 Support
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* <!-- Service Card 3 --> */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-3 flex gap-3">
                <TbTruckReturn className="text-purple-400  text-3xl mx-1" />

                <h3 className="text-xl font-semibold text-gray-800">
                  Easy Returns
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* <!-- Service Card 4 --> */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-3 flex gap-3">
                <RiSecurePaymentLine className="text-purple-400  text-3xl mx-1" />

                <h3 className="text-xl font-semibold text-gray-800 ">
                  Secure Payments
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const ServiceCard = ({ id, img, title, price, handler }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden h-fit">
      <img src={img} alt="Product" className="w-full h-44 object-contain" />
      <div className="p-4">
        <h3 className="text-md font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">${price}</p>
        <button
          onClick={() => handler({ price, id, img, title, quantity: 1 })}
          className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-full uppercase text-sm font-bold hover:bg-purple-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Home;
