import React from "react";
import Carousel from "./Carousel";

const Recommendation = () => {
  return (
    <div className="ml-10 md:ml-0">
      <div>
        <div className="pt-10 ml-10">
          <span className="text-4xl text-black fuzzy-bubbles-bold">Our Curated </span>
          <span className="text-4xl text-orange-400 fuzzy-bubbles-bold">best list </span>
          <span className="text-4xl text-black fuzzy-bubbles-bold">for...</span>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Recommendation;
