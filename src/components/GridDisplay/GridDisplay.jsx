import React from "react";

const GridDisplay = () => {
  return (
    <section>
      <div className="grid grid-cols-2 grid-rows-2 align-element py-16 px-44 gap-20">
        <div>
          <img
            src="../../../Images/GridDisplay/grid1.jpg"
            alt="Image 1"
            className="h-96 w-96 object-contain"
          />
        </div>

        <div className="text-black">
          <div className="pt-20 text-xl text-orange-500 font-thin">
            MORE FUN WITH YOUR LITTLE ONE!
          </div>
          <div className="capitalize text-2xl text-orange-500 font-bold pb-6">
            Shop Kids
          </div>
          <div className="pb-10">
            Your favorite designs now come in baby and kids sizes: Newborn to
            5T. Shop matching pieces for the whole family!
          </div>
          <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded duration-500">
            Shop for Kids
          </button>
        </div>
        <div className="text-black">
          <div className="pt-20 text-xl text-orange-500 font-thin">
            JOIN OUR 50,000+ AMBASSADORS!
          </div>
          <div className="capitalize text-2xl text-orange-500 font-bold pb-6">
            BECOME A BRAND AMBASSADOR
          </div>
          <div className="pb-10">
            If you love Elevated Faith and already find yourself sharing about
            our stuff with your friends, why not join our community of
            ambassadors? As a bonus, you’ll get sneak peeks at new product, be
            in fellowship with other believers, and earn commission when someone
            shops with your personalized code or link!
          </div>
          <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded duration-500">
            Learn More
          </button>
        </div>

        <div>
          <img
            src="../../../Images/GridDisplay/grid2.png"
            alt="Image 2"
            className="h-96 w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GridDisplay;
