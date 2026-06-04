import Title from "./Title";
import type { ReactNode } from "react";

export default function Inspiration() {
  interface bentoImgs {
    image: string;
    grid?: string;
  }

  const imageArr: bentoImgs[] = [
    { image: "bento3", grid: "row-span-2" },
    { image: "bento2" },
    { image: "bento4" },
    { image: "bento9", grid: "row-span-2" },
    { image: "bento1", grid: "row-span-2 col-span-2" },
    { image: "bento5", grid: "row-span-2" },
    { image: "bento8", grid: "row-span-2" },
    { image: "bento6" },
    { image: "bento7" },
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
              key={img.image}
              className={`${img.grid ? img.grid : ""} border-2 border-border bg-cover bg-center rounded-lg  overflow-hidden`}
            >
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-300 transition-transform"
                src={`/src/assets/${img.image}.png`}
                alt="bento1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
