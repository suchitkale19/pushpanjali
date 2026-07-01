import type { ReactNode } from "react";

export default function BestSellerSection() {
  return (
    <div>
      <div className="w-full flex  justify-between lg:px-16 px-4 py-4 text-text">
        <h1 className="text-3xl font-logo font-bold">Best Seller</h1>
        <h2 className="flex gap-1 font-semibold hover:text-black">
          View All{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#2d2a26"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </h2>
      </div>
      <div className="flex flex-wrap lg:px-16 px-2  gap-2  lg:justify-between justify-center">
        {[1, 2, 3, 4, 5, 6].map((el: number): ReactNode => {
          return (
            <div key={el} className="text-text text-sm ">
              <img
                className="lg:h-64 h-32 lg:w-56 w-42 rounded-xl"
                src="/src/assets/weddingdecor.png"
                alt="cardImage"
              />
              <p className="font-semibold">Wedding Decorations</p>
              <span>⭐⭐⭐⭐⭐</span>
              <h1 className="text-lg  flex items-center gap-1 font-bold">
                ₹25000
                <span className="text-sm font-extralight line-through">
                  ₹28000
                </span>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
