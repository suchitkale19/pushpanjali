import type { ReactNode } from "react";
import OfferCard from "./OfferCard";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { LuBoxes } from "react-icons/lu";
import { GiBigDiamondRing } from "react-icons/gi";

import WeddingOffer from "./WeddingOffer";
import WeddingDecorCategory from "./WeddingDecorCategory";
import Title from "./Title";
import ImageButton from "./ImageButton";

export default function OfferSection() {
  const newOffers = [
    {
      component: <RiDiscountPercentFill color="#1b422c" size={90} />,
      offer: "FLAT 10% OFF",
      info: "On Your First Order",
      add: true,
      code: "FLAT10",
    },
    {
      component: <FaTruckFast color="#d94f70" size={90} />,
      offer: "FREE DELIVERY",
      info: "On Order Above ₹1999",
      add: false,
    },
    {
      component: <LuBoxes color="#1b422c" size={90} />,
      offer: "BULK ORDER DISCOUNTS",
      info: "Special Prizes For Wedding and Events",
      add: false,
    },
    {
      component: <GiBigDiamondRing color="#d94f70" size={90} />,
      offer: "FLAT ₹500 OFF",
      info: "On Wedding Packages",
      add: true,
      code: "SA500",
    },
  ];
  return (
    <div className=" flex flex-col items-center text-text">
      <Title
        name={"Offers Just For You"}
        para={"Offers , So You Get Your Product At Minimal Price"}
      />
      <div className="w-full  lg:px-16 px-2 pb-8 flex flex-wrap justify-center gap-2">
        {newOffers.map((offer): ReactNode => {
          return (
            <OfferCard
              component={offer.component}
              offer={offer.offer}
              info={offer.info}
              add={offer.add}
              code={offer.code}
              key={offer.info}
            />
          );
        })}
      </div>
      <div className="h-fit lg:block hidden w-full px-4">
        <div className="h-84 px-20 flex justify-between py-8 text-background w-full border-8 bg-cover bg-center rounded bg-[url(src/assets/offerbg0.png)]">
          <WeddingOffer />
          <WeddingDecorCategory />
          <ImageButton />
        </div>
      </div>
    </div>
  );
}
