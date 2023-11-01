import { nanoid } from "nanoid";
import { BsCart2, BsSearch, BsBag } from "react-icons/bs";

export const navBarLinks = [
  { id: nanoid(), href: "#Home", text: "Home" },
  { id: nanoid(), href: "#New", text: "New" },
  { id: nanoid(), href: "#Best Seller", text: "Best Seller" },
  { id: nanoid(), href: "#About Us", text: "About Us" },
];

export const navBarIcons = [
  {
    id: nanoid(),
    icon: (
      <BsCart2 className="h-16 w-7 text-white mr-4 hover:text-orange-100 hover:h-18 hover:w-9 duration-300" />
    ),
  },
  {
    id: nanoid(),
    icon: (
      <BsSearch className="h-16 w-7 text-white mr-4 hover:text-orange-100 hover:h-18 hover:w-9 duration-300" />
    ),
  },
  {
    id: nanoid(),
    icon: (
      <BsBag className="h-16 w-7 text-white hover:text-orange-100 hover:h-18 hover:w-9 duration-300" />
    ),
  },
];
