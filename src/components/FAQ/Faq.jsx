/** @format */

import React from "react";
import starIcon from "../../img/icon-star.svg";
import Accordion from "./Accordian";
import { faqs } from "./data";

function Faq() {
  return (
    <main className="min-h-screen relative p-4 pb-10">
      <section className="relative bg-white transition-all mx-auto w-10/12 max-w-7xl rounded-lg flex flex-col gap-4 mt-40 sm:mt-24 p-5">
        <h1 className="flex gap-3 items-center">
          <img src={starIcon} alt="star-icon" className="h-6 w-auto" />
          <span className="font-bold text-5xl text-orange-400 fuzzy-bubbles-bold">FAQs</span>
        </h1>
        <div className="flex flex-col gap-4 divide-y text-black font-bold text-lg">
          {faqs.map((d, i) => (
            <Accordion
              answer={d.answer}
              question={d.question}
              isAccordionOpen={d.isAccordionOpen}
              key={i}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Faq;
