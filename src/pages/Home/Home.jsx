import React from "react";
import HeroSection from "../../components/Herosection/HeroSection";
import Service from "../../components/Service/Service";
import Gallery from "../../components/Gallery/Gallery";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = ({AddToCart}) => {
  return (
    <>
      <HeroSection />
      <Service />
      <PopularProducts AddToCart={AddToCart} />
      <Gallery />
      <Testimonial/>
    </>
  );
};

export default Home;
