import React from "react";
import PerfectPresent from "./PerfectPresent";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

const Info = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-20">
      <div className="w-full lg:w-1/2 pr-4 ml-10">
        <PerfectPresent />
      </div>
      <div className="w-full lg:w-1/2 pl-4">
        <div className=" flex-1 relative min-h-screen justify-center items-center lg:flex block">
          <img src={Vector1} alt="" className="lg:block hidden" />
          <img src={Vector2} alt="" className="absolute scale-75 -left-3 lg:block hidden" />
          <img src={boy} alt="" className="absolute scale-125 left-28 lg:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Info;
