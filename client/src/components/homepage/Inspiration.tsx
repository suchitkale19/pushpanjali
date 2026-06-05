import Title from "./Title";
import type { ReactNode } from "react";

export default function Inspiration() {
  interface bentoImgs {
    name: string;
    image: string;
    grid?: string;
  }

  const imageArr: bentoImgs[] = [
    { name: "Stage Decoration", image: "bento3", grid: "row-span-2" },
    { name: "Car Decoration", image: "bento2" },
    { name: "Haldi Decoration", image: "bento4" },
    { name: "Flower Decorations", image: "bento9", grid: "row-span-2" },
    {
      name: "Ganapati Bappa Decoration",
      image: "bento1",
      grid: "row-span-2 col-span-2",
    },
    { name: "Jagannath Decoration", image: "bento5", grid: "row-span-2" },
    { name: "Navratri Decoration", image: "bento8", grid: "row-span-2" },
    { name: "Satyanarayan Decoration", image: "bento6" },
    { name: "Toran Decoration", image: "bento7" },
  ];

  return (
    <div className=" w-full h-fit flex flex-col items-center pb-12">
      <Title
        name={"Inspiration Gallery"}
        para={"Explore The Beauty from Every Occasion"}
      />

      <div className="h-160 w-300 grid grid-cols-4 grid-rows-4 gap-2">
        {imageArr.map((img): ReactNode => {
          return (
            <div
              key={img.name}
              className={`${img.grid ? img.grid : ""} border-2 border-border bg-cover bg-center rounded-lg  overflow-hidden relative`}
            >
              <h1
                className="w-full flex items-end text-center font-logo font-bold text-background backdrop-blur-2xl duration-300 justify-center py-1 absolute z-50 bottom-0   
               text-2xl "
              >
                {img.name}
              </h1>
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-300  transition-transform "
                src={`/src/assets/${img.image}.png`}
                alt={img.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
