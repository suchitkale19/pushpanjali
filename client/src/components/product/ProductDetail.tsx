export default function ProductDetail() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="lg:text-4xl text-2xl font-bold text-primary font-logo ">
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
          <span className=" font-semibold text-xl text-accent">25% OFF</span>
        </h2>
      </div>
      <p className="text-lg text-bold text-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet
        laboriosam commodi ipsam necessitatibus quis quam placeat earum sequi
        nulla est distinctio ab sapiente, veniam, fugiat in aliquid? Dolores,
        omnis?
      </p>
    </div>
  );
}
