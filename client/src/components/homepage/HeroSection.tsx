// import ButtonSVG from "./ButtonSVG";
// import type { ReactNode } from "react";

import MainButton from "./MainButton";

export default function HeroSection() {
  // const functionsSvg = [
  //   {
  //     path: "M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z",
  //     name: "Fresh and Premium flowers",
  //   },
  //   {
  //     path: "M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z",
  //     name: "Fresh and Premium flowers",
  //   },
  //   {
  //     path: "M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z",
  //     name: "Fresh and Premium flowers",
  //   },
  // ];
  // <div className="flex gap-4">
  //         {functionsSvg.map((svg): ReactNode => {
  //           return <ButtonSVG path={svg.path} name={svg.name} />;
  //         })}
  //       </div>
  return (
    <div className="lg:h-80 h-fit w-full flex text-text bg-secondary ">
      <div className="lg:pl-30 px-2 h-full w-full lg:text-left text-center flex flex-col lg:items-start items-center py-2 lg:py-0 justify-center lg:gap-6 gap-3 ">
        <img
          className="lg:hidden"
          src="/src/assets/herobanner.png"
          alt="herobanner"
        />
        <h1 className="lg:text-5xl text-4xl text-primary  font-semibold font-logo">
          Make Every Occasion Bloom with{" "}
          <span className="text-accent">Love</span>
        </h1>
        <p className="lg:w-80 w-full">
          Beautiful flowers, Traditional Touch, Unforgettable Moments.
        </p>
        <MainButton name={"Shop Now"} arrow={true} bg={"primary"} />
      </div>
      <div className="lg:block hidden h-80 w-[160%] bg-cover bg-[url(/src/assets/herobanner.png)]">
        <div className="w-full h-full bg-linear-to-l  via-transparent via-90% to-[#f8ebdd]"></div>
      </div>
    </div>
  );
}
