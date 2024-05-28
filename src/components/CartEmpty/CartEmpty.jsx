import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div className=" w-full h-[80vh] mt-[80px] bg-[#f7f6f6] container mx-auto my-4 px-4 py-4 shadow-lg rounded-md flex justify-center items-center">
        <div className=" flex  items-center flex-col">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt=""
            className="w-[300px]"
          />
          <h3 className=" text-center text-2xl font-semibold mt-3">
            Your Cart is Empty
          </h3>
          <Link to="/">
            <button className=" text-white bg-indigo-500 border-0 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
