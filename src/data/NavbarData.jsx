import { nanoid } from "nanoid";
import { BsCart2, BsSearch, BsBag } from "react-icons/bs";

export const navBarLinks = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
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
