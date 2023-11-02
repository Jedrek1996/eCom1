import { nanoid } from "nanoid";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export const FooterData = [
  {
    id: nanoid(),
    header: "EXPLORE",
    links: [
      "Shop Our Instagram",
      "Brand Ambassador Application",
      "Join The Club",
      "Wholesale",
      "Gift Cards",
    ],
  },
  {
    id: nanoid(),
    header: "Customer Care",
    links: [
      "Join our Newsletter",
      "Returns/Exchanges",
      "Find Your Ring Size",
      "Size Chart",
      "Product Care",
    ],
  },
  {
    id: nanoid(),
    header: "Help",
    links: [
      "Help & FAQ",
      "Live Chat",
      "Contact Us",
      "Shipping Info",
      "Careers",
    ],
  },
];

export const FooterIcons = [
  {
    id: nanoid(),
    icon: <AiFillTwitterCircle />,
  },
  {
    id: nanoid(),
    icon: <BsFacebook />,
  },
  {
    id: nanoid(),
    icon: <BsInstagram />,
  },
];
