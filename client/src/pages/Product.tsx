import MainButton from "../components/homepage/MainButton";
import Counter from "./../components/product/counter";

export default function Product() {
  return (
    <div className="h-fit w-full bg-background flex px-12 py-12">
      <div className="w-1/2 h-108 px-12  flex justify-center">
        <img
          className="w-lg h-full rounded-xl"
          src="/src/assets/weddingdecor.png"
          alt="cardImage"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-3">
        <h1 className="text-4xl text-bold text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="text-xl">
          ⭐⭐⭐⭐⭐{" "}
          <span>
            <strong>4.7</strong>/5
          </span>
        </div>
        <div>
          <h2 className="font-bold text-2xl flex gap-4">
            ₹25000
            <span className="font-semibold text-xl text-zinc-700 line-through">
              ₹25000
            </span>
            <span className="text-gold font-semibold text-xl">25% OFF</span>
          </h2>
        </div>
        <p className="text-lg text-bold text-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet
          laboriosam commodi ipsam necessitatibus quis quam placeat earum sequi
          nulla est distinctio ab sapiente, veniam, fugiat in aliquid? Dolores,
          omnis?
        </p>
        <div className="flex gap-4">
          <Counter />
          <MainButton name={"Add To Cart"} bg={"primary"} />
          <MainButton name={"Buy Now"} bg={"primary"} />
        </div>
      </div>
    </div>
  );
}
