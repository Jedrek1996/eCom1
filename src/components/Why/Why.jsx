import React from "react";
import { WhyData } from "../../data/WhyData";

const Why = () => {
  return (
    <div className="bg-white mt-7 py-7">
      <h1 className="font-bold text-3xl text-center">Why buy from us?</h1>
      <div className="flex align-element justify-center gap-36 py-16">
        {WhyData.map((Why) => {
          return (
            <div key={Why.id} className="text-center">
              {Why.icon}
              {Why.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
