import React from "react";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="flex flex-col xl:flex-row h-auto mt-16 p-6 xl:p-12 items-center justify-center xl:justify-between" id="works">
      <div className="flex flex-col w-full xl:w-1/2 items-center xl:items-start text-center xl:text-left mb-8 xl:mb-0">
        <div className="font-bold text-black text-3xl xl:text-5xl fuzzy-bubbles-bold">Works with All these</div>
        <div className="font-bold text-orange-500 text-3xl xl:text-5xl fuzzy-bubbles-bold">Brands & Clients</div>
        <div className="text-black mt-4 w-11/12 xl:w-8/12">
          Trusted by Top Brands We’re proud to collaborate with global giants like Shopify and Amazon to bring you an array of choices from the best in the business. Whether it’s a birthday bash or a token of appreciation, find the ideal gift with ease and confidence.
        </div>
      </div>
      {/* right side */}
      <div className="relative w-full mr-10 xl:w-3/12 hidden xl:block   justify-center xl:justify-end">
        {/* background Circles */}
        <div className="absolute w-52 h-52 rounded-full" style={{ background: '#1949b8', left: '10rem', top: '0rem' }}></div>
        <div className="absolute w-52 h-52 rounded-full" style={{ background: '#f5c32c', left: '10rem', top: '8rem' }}></div>
        <motion.div
          initial={{ rotate: 45 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative w-48 h-48 xl:w-72 xl:h-72 rounded-full shadow-lg bg-white z-10"
        >
          {/* company logos */}
          <div className="absolute w-16 h-16 xl:w-24 xl:h-24 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white shadow-lg" style={{ top: '-2rem', left: '50%', transform: 'translateX(-50%)' }}>
            <img src={Upwork} alt="" className="transform scale-60" />
          </div>
          <div className="absolute w-16 h-16 xl:w-24 xl:h-24 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white shadow-lg" style={{ top: '6rem', left: '10%', transform: 'translateX(-50%)' }}>
            <img src={Fiverr} alt="" className="transform scale-60" />
          </div>
          <div className="absolute w-18 h-16 xl:w-24 xl:h-24 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white shadow-lg" style={{ top: '6rem', left: '50%', transform: 'translateX(-50%)' }}>
            <img src={Amazon} alt="" className="transform scale-60" />
          </div>
          <div className="absolute w-16 h-16 xl:w-24 xl:h-24 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white shadow-lg" style={{ top: '6rem', left: '90%', transform: 'translateX(-50%)' }}>
            <img src={Shopify} alt="" className="transform scale-60" />
          </div>
          <div className="absolute w-16 h-16 xl:w-24 xl:h-24 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white shadow-lg" style={{ top: '14rem', left: '50%', transform: 'translateX(-50%)' }}>
            <img src={Facebook} alt="" className="transform scale-60" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
