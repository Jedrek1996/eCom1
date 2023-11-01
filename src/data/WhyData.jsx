import { nanoid } from "nanoid";
import { TbRecycle } from "react-icons/tb";
import { BiHomeHeart, BiWorld } from "react-icons/bi";

export const WhyData = [
  {
    id: nanoid(),
    icon: (
      <TbRecycle className="h-16 w-24 text-black mr-4 hover:text-orange-300 duration-300" />
    ),
    text: "We use sustainable materials for all our clothings.",
  },
  {
    id: nanoid(),
    icon: (
      <BiHomeHeart className="h-16 w-24 text-black mr-4 hover:text-orange-300 duration-300" />
    ),
    text: "We donate 10% of our earnings to charitable organisations.",
  },
  {
    id: nanoid(),
    icon: (
      <BiWorld className="h-16 w-24 text-black mr-4 hover:text-orange-300 duration-300" />
    ),
    text: "We ship worldwide no matter where you are!",
  },
];
