import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container  mx-auto px-4">
        <div className="grid mx-5 grid-cols-1 sm:grid-cols-3 gap-12">
          {/* <!-- Footer Section 1 --> */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold">
              eShop<span className="text-purple-800">.</span>
            </h1>
            <p>&#169; 2024 eShop All right reserved.</p>
          </div>
          {/* <!-- Footer Section 2 --> */}
          <div className="grid text-center">
            <h4 className="text-lg font-semibold mb-3">Quick links</h4>
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
          </div>
          {/* <!-- Footer Section 3 --> */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <FaFacebookSquare className="text-2xl  hover:text-purple-400 ease-in-out duration-300" />

              <FaInstagramSquare className="text-2xl  hover:text-purple-400 ease-in-out duration-300" />

              <FaTwitterSquare className="text-2xl  hover:text-purple-400 ease-in-out duration-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
