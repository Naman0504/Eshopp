import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Service = () => {
  return (
    <div className="bg-purple-200 w-full h-screen  flex justify-evenly items-center">
      <div className="border-none rounded-md justify-center w-auto h-auto">
        <ServiceCard
          icon={<FaShoppingCart className="text-purple-400  text-3xl mx-1" />}
          title={"Free Delivery"}
          desc={"Xyz"}
        />
      </div>
      <div className="border-none rounded-md justify-center w-auto h-auto">
        <ServiceCard
          icon={<FaShoppingCart className="text-purple-400  text-3xl mx-1" />}
          title={"Free Delivery"}
          desc={"Xyz"}
        />
      </div>
      <div className="border-none rounded-md justify-center w-auto h-auto">
        <ServiceCard
          icon={<FaShoppingCart className="text-purple-400  text-3xl mx-1" />}
          title={"Free Delivery"}
          desc={"Xyz"}
        />
      </div>
      <div className="border-none rounded-md justify-center w-auto h-auto">
        <ServiceCard
          icon={<FaShoppingCart className="text-purple-400  text-3xl mx-1" />}
          title={"Free Delivery"}
          desc={"Xyz"}
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="h-auto w-60 p-2 bg-gray-100 rounded-md ">
      <div className="flex justify-left py-3  text-nowrap">
        {icon}
        <h2 className="text-3xl mx-2">{title}</h2>
      </div>
      <div className="flex justify-center items-center px-3">
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
