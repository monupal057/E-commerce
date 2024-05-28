import React from "react";
import banner from "../../assets/banner.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="relative mt-[73px]">
        <div>
          <img
            src={banner}
            alt=""
            className="w-full object-cover object-center "
          />
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" absolute top-[20%] sm:top-[30%] w-full text-end right-3 "
        >
          <h1 className=" text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500  ">
            Discover Your
          </h1>
          <h1 className=" text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500  ">
            Next Adventure!
          </h1>
          <p className="text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold">
            Shop Our Latest Arrival
          </p>
          <Link to="/allproducts">
            <button className="flex ml-auto mt-2 md:mt-3 text-[11px] sm:text-[18px]  text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Shop Now
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
