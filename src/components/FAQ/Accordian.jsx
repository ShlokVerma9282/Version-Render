/** @format */
"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import minusIcon from "../../img/icon-minus.svg";
import plusIcon from "../../img/icon-plus.svg";

function Accordion({ isAccordionOpen: initialIsAccordionOpen = false, question, answer }) {
  const [animationParent] = useAutoAnimate();
  const [isAccordionOpen, setAccordion] = useState(initialIsAccordionOpen);

  function toggleAccordion() {
    setAccordion(!isAccordionOpen);
  }

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <p
        onClick={toggleAccordion}
        className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
      >
        <span className="text-2xl ">{question}</span>
        {isAccordionOpen ? (
          <img src={minusIcon} alt="minus-icon" className="h-6 w-auto" />
        ) : (
          <img src={plusIcon} alt="plus-icon" className="h-6 w-auto" />
        )}
      </p>
      {isAccordionOpen && (
        <p className="text-sm sm:text-base text-black">{answer}</p>
      )}
    </div>
  );
}

export default Accordion;
