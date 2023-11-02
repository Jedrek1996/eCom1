import React from "react";
import { FooterData, FooterIcons } from "../../data/FooterData";

const SiteFooter = () => {
  return (
    <section className="bg-gray-300">
      <div className="flex justify-evenly align-element">
        <div className="py-16 text-3xl capitalize font-bold text-white text-center">
          Shop
          <div className="flex flex-row pt-32">
            {FooterIcons.map((Icon) => {
              return (
                <div
                  className="mx-4 py-1 hover:scale-125 duration-300"
                  key={Icon.id}
                >
                  {Icon.icon}
                </div>
              );
            })}
          </div>
          <div className="font-thin text-xs pt-2 text-black">
            Created by: Jedrek Koh
          </div>
        </div>

        {FooterData.map((data) => {
          const { header, links, id } = data;
          return (
            <div className="py-20 px-2" key={id}>
              <h1 className="text-black font-bold pb-5">{header}</h1>

              <ul>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="py-1 hover:scale-105 transition-all"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SiteFooter;
