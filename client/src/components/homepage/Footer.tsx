import type { ReactNode } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  const footerSections = [
    {
      title: "Popular Categories",
      para: "Indian Toran | Wedding Decor | Car Decoration | Wedding Cards | Bouquets | Pooja Flowers",
    },
    {
      title: "Customer Service",
      para: "Track Orders | Returns | Shipping Policy | Cancellations | FAQ | Contact Us",
    },
    {
      title: "About Pushpanjali",
      para: "We bring you the freshest flower and beautiful decor for every occasion.",
    },
  ];
  return (
    <div className="bg-background w-fit h-fit flex flex-col items-center gap-4">
      <Logo />
      <div className="bg-hover lg:flex grid grid-cols-2 py-4 gap-2 text-background justify-evenly lg:px-12">
        {footerSections.map((section): ReactNode => {
          return (
            <div
              key={section.title}
              className="lg:px-8 px-2 py-2 border-r border-b"
            >
              <h2 className="font-logo font-semibold text-xl">
                {section.title}
              </h2>
              <p className="lg:text-sm text-xs">{section.para}</p>
            </div>
          );
        })}
        <div className="px-8 border-b">
          <h2 className="font-logo font-semibold text-xl">Follow Us</h2>
          <div className="flex gap-4 pt-2">
            <FaFacebook size={24} />
            <FaInstagramSquare size={24} />
            <FaPinterest size={24} />
            <FaWhatsappSquare size={24} />
            <FaYoutube size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
