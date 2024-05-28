import React from "react";
import login from "../../assets/login.png";
import aboutImg from "../../assets/aboutusimg.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={login}
          alt=""
          className=" object-cover w-full object-center h-[200px] mt-5"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className=" absolute top-[40%] left-[10%] text-white font-semibold  text-3xl md:text-5xl">
          About Us
        </h2>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="object-cover object-center rounded"
              alt="hero"
              src={aboutImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            >
              Who we are?
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="mb-8 leading-relaxed"
            >
              The MechShop Group is one of India’s leading digital commerce
              entities and includes group companies Flipkart, Myntra, Flipkart
              Wholesale, Flipkart Health+, and Cleartrip. Started in 2007,
              Flipkart has enabled millions of sellers, merchants, and small
              businesses to participate in India's digital commerce revolution.
              With a registered customer base of more than 500 million,
              Flipkart's marketplace offers over 150 million products across 80+
              categories.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center "
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              TECHNOLOGY AT MECHSHOP
            </h1>
            <p className="mb-8 leading-relaxed">
              MechShop technology drives path-breaking, customer-focused
              innovation that makes high quality products accessible to Indian
              shoppers, besides making the online shopping experience
              convenient, intuitive and seamless.
            </p>
          </motion.div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="object-cover object-center rounded"
              alt="hero"
              src="https://corporate.flipkart.net/assets/images/technology-image.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
