import React from "react";
import { BannerData } from "../../data/BannerData";

const Banner = () => {
  return (
    <div className="bg-white text-center capitalize py-1 font-bold">
      {BannerData.text}
    </div>
  );
};

export default Banner;
