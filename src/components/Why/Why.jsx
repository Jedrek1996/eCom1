import React from "react";
import { WhyData } from "../../data/WhyData";

const Why = () => {
  return (
    <section className="bg-white mt-7 py-20">
      <h1 className="font-bold text-3xl text-center">Why buy from us?</h1>
      <div className="flex align-element justify-center gap-36 py-16">
        {WhyData.map((Why) => {
          return (
            <div
              key={Why.id}
              className="text-center flex flex-col items-center gap-5 text-xl"
            >
              {Why.icon}
              {Why.text}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Why;
