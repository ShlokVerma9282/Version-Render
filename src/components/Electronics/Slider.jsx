import React from "react";
import "swiper/css";
import Coverflow from "./Coverflow";

const App = () => {
  return (
    <div className="flex flex-col xl:flex-row h-auto mt-5 xl: items-center justify-center xl:justify-between" >
      <div className="flex flex-col w-full xl:w-1/2 items-center xl:items-start text-center xl:text-left mb-8 xl:mb-0">
        <div className="font-bold text-black text-3xl xl:text-5xl fuzzy-bubbles-bold">Best Gift</div>
        <div className="font-bold text-orange-500 text-3xl xl:text-5xl fuzzy-bubbles-bold">For Youth</div>
      </div>
      <div className="relative w-full  xl:w-9/12 flex justify-center xl:justify-end">
        <Coverflow />
      </div>
    </div>
  );
};

export default App;
