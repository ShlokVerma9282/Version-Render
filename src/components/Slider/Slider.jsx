import React from "react";
import "swiper/css";
import ProductCarousel from "./ProductCarousel";

const Slider = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] mt-24" >
      {/* heading */}
      <span className="text-black text-3xl md:text-4xl lg:text-5xl font-bold text-center fuzzy-bubbles-bold">
        Recent Selections
      </span>
      <span className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-bold text-center fuzzy-bubbles-bold mt-2">
        Best Buys
      </span>

      {/* slider */}
      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Slider;
