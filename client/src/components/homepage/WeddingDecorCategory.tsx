import { GiElvenCastle } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { GiFlowerPot } from "react-icons/gi";
import { GiSandCastle } from "react-icons/gi";
import type { ReactNode } from "react";

export default function WeddingDecorCategory() {
  const weddingCategory = [
    { component: <GiElvenCastle size={48} />, name: "Wedding Decor" },
    { component: <IoCarSportOutline size={48} />, name: "Car Decorations" },
    { component: <GiFlowerPot size={48} />, name: "Flower Bouquet" },
    { component: <GiSandCastle size={48} />, name: "Stage Decoration" },
  ];

  return (
    <div className="flex flex-wrap gap-4 w-80 h-fit mt-4">
      {weddingCategory.map((category): ReactNode => {
        return (
          <div
            className="h-fit w-fit p-2 flex  gap-2 flex-col items-center"
            key={category.name}
          >
            {category.component}
            <p>{category.name}</p>
          </div>
        );
      })}
    </div>
  );
}
