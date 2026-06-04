import type { ReactNode } from "react";

export default function CategorySection() {
  const categories: string[] = [
    "Wedding Hars",
    "Indian Torans",
    "Wedding Decor",
    "Car Decoration",
    "Flower Bouquets",
    "Pooja Flowers",
    "Baby Shower",
    "Gajare and Weni",
  ];

  return (
    <div className="h-48 w-full flex justify-evenly items-center text-text text-sm ">
      {categories.map((category): ReactNode => {
        return (
          <div key={category}>
            <img
              className="size-28 border-2 border-border rounded-full pb-2"
              src={`/src/assets/${category.split(" ").join("").toLowerCase()}.png`}
              alt={category}
            />
            <p className="font-semibold hover:text-black">{category}</p>
          </div>
        );
      })}
    </div>
  );
}
