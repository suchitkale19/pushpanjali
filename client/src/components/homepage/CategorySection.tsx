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
    <>
      <div className="w-full flex  justify-between lg:px-16 px-4 py-4 text-text">
        <h1 className="text-3xl font-logo font-bold">Shop By Categories</h1>
      </div>
      <div className="lg:h-40 h-auto w-full flex justify-evenly items-center gap-2 px-2 py-2  flex-wrap text-text text-sm ">
        {categories.map((category): ReactNode => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={category}
            >
              <div className="h-fit w-fit rounded-full  overflow-hidden">
                <img
                  className="lg:size-32 hover:scale-110 transition-all  size-20 border-2 object-cover object-center bg-background border-border rounded-full"
                  src={`/src/assets/${category.split(" ").join("").toLowerCase()}.png`}
                  alt={category}
                />
              </div>
              <p className="lg:w-full lg:block hidden w-16 text-center font-semibold hover:text-black">
                {category}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
