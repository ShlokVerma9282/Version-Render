import React from "react";
import Card from "./Card/Card";
import HeartEmoji from "../../img/gift.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/Sparkle.jpg";
import { motion } from "framer-motion";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="mt-24  ml-0 xl:ml-40 px-4 xl:px-0">
      <div className="flex flex-col xl:flex-row mt-36 mb-52 xl:items-stretch xl:justify-center" id="services">
        {/* left side */}
        <div className="relative w-full xl:w-7/12 hidden xl:block">
          <div className="relative h-full">
            {/* first card */}
            <motion.div
              initial={{ left: "25rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}
              className="absolute"
            >
              <Card
                emoji={HeartEmoji}
                detail={"Explore our curated selection that is sure to delight"}
              />
            </motion.div>
            {/* second card */}
            <motion.div
              initial={{ left: "-11rem", top: "12rem" }}
              whileInView={{ left: "-4rem" }}
              transition={transition}
              className="absolute"
            >
              <Card
                emoji={Glasses}
                detail={"Discover gifts that sparkle with joy and make every moment memorable!"}
              />
            </motion.div>
            {/* third card */}
            <motion.div
              initial={{ top: "19rem", left: "20rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}
              className="absolute"
            >
              <Card
                emoji={Humble}
                detail={"Gifts that glow with the warmth of a thousand stars!"}
                color="rgba(252, 166, 31, 0.45)"
              />
            </motion.div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full mt-36 xl:w-5/12 pt-0 xl:pt-0 xl:ml-auto">
          <div className="flex flex-col items-center xl:items-start h-full">
            <div className="mt-10 text-black text-3xl xl:text-5xl font-bold fuzzy-bubbles-bold">Our Awesome</div>
            <div className="text-orange-500 text-3xl xl:text-5xl font-bold fuzzy-bubbles-bold">services</div>
            <div className="text-black mt-4 text-center xl:text-left">
              Unlock the Art of Thoughtful Gifting at GiftGuru <span className="text-orange-400 text-xl">!!!</span> Navigate our constellation of curated treasures and unveil the perfect gift with cosmic ease. Begin your journey today, where every click whispers a personalized surprise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
