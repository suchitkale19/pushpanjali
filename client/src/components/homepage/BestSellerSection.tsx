export default function BestSellerSection() {
  return (
    <div>
      <div className="w-full flex justify-between px-16 py-4 text-text">
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
      <div className="flex px-16 justify-between">
        <div className="text-text text-sm ">
          <img
            className="h-40 w-52 rounded-xl"
            src="/src/assets/weddingdecor.png"
            alt="cardImage"
          />
          <p className="px-2">WEdding Decorations</p>
          <h1 className="text-xl px-2 flex items-center gap-1 font-bold">
            ₹25000
            <span className="text-sm font-extralight line-through">₹28000</span>
          </h1>
        </div>
        <div className="text-text text-sm ">
          <img
            className="h-40 w-52 rounded-xl"
            src="/src/assets/weddingdecor.png"
            alt="cardImage"
          />
          <p className="px-2">WEdding Decorations</p>
          <h1 className="text-xl px-2 flex items-center gap-1 font-bold">
            ₹25000<span className="text-sm font-extralight">₹28000</span>
          </h1>
        </div>
        <div className="text-text text-sm ">
          <img
            className="h-40 w-52 rounded-xl"
            src="/src/assets/weddingdecor.png"
            alt="cardImage"
          />
          <p className="px-2">WEdding Decorations</p>
          <h1 className="text-xl px-2 flex items-center gap-1 font-bold">
            ₹25000<span className="text-sm font-extralight">₹28000</span>
          </h1>
        </div>
        <div className="text-text text-sm ">
          <img
            className="h-40 w-52 rounded-xl"
            src="/src/assets/weddingdecor.png"
            alt="cardImage"
          />
          <p className="px-2">WEdding Decorations</p>
          <h1 className="text-xl px-2 flex items-center gap-1 font-bold">
            ₹25000<span className="text-sm font-extralight">₹28000</span>
          </h1>
        </div>
        <div className="text-text text-sm ">
          <img
            className="h-40 w-52 rounded-xl"
            src="/src/assets/weddingdecor.png"
            alt="cardImage"
          />
          <p className="px-2">WEdding Decorations</p>
          <h1 className="text-xl px-2 flex items-center gap-1 font-bold">
            ₹25000<span className="text-sm font-extralight">₹28000</span>
          </h1>
        </div>
        <div className="text-text text-sm ">
          <img
            className="h-40 w-52 rounded-xl"
            src="/src/assets/weddingdecor.png"
            alt="cardImage"
          />
          <p className="px-2">WEdding Decorations</p>
          <h1 className="text-xl px-2 flex items-center gap-1 font-bold">
            ₹25000<span className="text-sm font-extralight">₹28000</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
