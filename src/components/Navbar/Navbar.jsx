import React from "react";
import { navBarLinks, navBarIcons } from "../../data/NavbarData";
import { BsCart2, BsSearch, BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-orange-400">
      <div className="align-element py-4 flex justify-between">
        <h3 className="text-3xl py-3 capitalize font-bold text-white">Shop</h3>
        <div className="flex py-4">
          {navBarLinks.map((links) => {
            return (
              <a
                className="capitalize text-lg tracking-wide px-4 text-white hover:text-orange-100 hover:text-xl duration-300"
                key={links.id}
                href={links.href}
              >
                {links.text}
              </a>
            );
          })}
        </div>
        <div className="w-auto flex">
          {navBarIcons.map((link) => {
            return (
              <a href="#" key={link.id}>
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
