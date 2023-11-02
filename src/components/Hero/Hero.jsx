import React from "react";
import { CategoryImages } from "../../data/CategoriesData";

const Hero = () => {
  return (
    <section>
      <div>
        <div className="align-element py-11 flex">
          <img
            src="../../assets/Images/Hero-image.jpg"
            className="h-96"
            alt="Hero"
            style={{ filter: "brightness(1.25)" }}
          />
          <div className="mx-4 py-14 align-element text-center">
            <h1 className="capitalize font-bold text-4xl">
              APPRAELS MADE FROM RECYCLED MATERIALS
            </h1>

            <div className="p-7 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore suscipit corporis veritatis pariatur nihil totam ullam
              ipsam et amet saepe.
            </div>

            <button className="bg-white hover:bg-orange-400 text-black font-bold py-2 px-4 rounded duration-500">
              Shop Now!
            </button>
          </div>
        </div>

        <div className="align-element flex justify-center items-center gap-8">
          {CategoryImages.map((Cateogry) => {
            return (
              <div key={Cateogry.id}>
                <img
                  className="w-50 object-cover rounded-t-lg h-64 hover:scale-125 duration-500"
                  src={Cateogry.image}
                  alt={Cateogry.text}
                />
                <span className="text-black font-bold">{Cateogry.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
