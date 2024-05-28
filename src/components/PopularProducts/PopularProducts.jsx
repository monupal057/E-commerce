import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const PopularProducts = ({ AddToCart }) => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    const PopularProductFetch = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1");

        setPopularProduct(res.data.products);
        console.log(res.data);
      } catch (err) {
        toast.error(err.message);
      }
    };

    PopularProductFetch();
  }, []);


   

  return (
    <>
      <div className=" mt-12 text-center ">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" text-4xl md:text-5xl font-semibold underline"
        >
          Popular Products
        </motion.h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {popularProduct
              .filter((item, index) => index !== 1)
              .map((popularItem) => (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full "
                  key={popularItem.id}
                >
                  <a className="block relative h-48 rounded overflow-hidden ">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={popularItem.thumbnail}
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {popularItem.title}
                    </h2>
                    <p className="mt-1 text-[20px] font-semibold">
                      Price : {popularItem.price} ₹
                    </p>
                  </div>

                  <button
                    className=" text-white bg-indigo-500 border-0 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4"
                    onClick={() => AddToCart(popularItem)}
                  >
                    Add to cart
                  </button>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
