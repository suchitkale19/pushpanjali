import { LuTruck } from "react-icons/lu";
import { PiPlantDuotone } from "react-icons/pi";
import { IoCashOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import type { ReactNode } from "react";

export default function Productfeature() {
  const appfeatures = [
    {
      component: <LuTruck color="#2d2a26" size={20} />,
      name: "On-time Delivery",
    },
    {
      component: <PiPlantDuotone color="#2d2a26" size={20} />,
      name: "100% Fresh Flowers",
    },
    {
      component: <RiSecurePaymentLine color="#2d2a26" size={20} />,
      name: "Secure Pakaging",
    },
    {
      component: <IoCashOutline color="#2d2a26" size={20} />,
      name: "Best Price",
    },
  ];
  return (
    <div className="flex justify-between flex-wrap pr-8">
      {appfeatures.map((feature, index): ReactNode => {
        return (
          <div
            key={index}
            className="h-fit w-fit px-4 py-2 bg-border rounded-2xl flex items-center justify-center gap-2 text-sm font-semibold   text-text"
          >
            {feature.component}
            <p>{feature.name}</p>
          </div>
        );
      })}
    </div>
  );
}
