import { BsLightning } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function ProductButtons() {
  return (
    <div className="flex lg:flex-row  flex-col gap-4 pr-8">
      <button className="flex hover:bg-transparent bg-hover w-full justify-center items-center gap-2 px-4 py-2 hover:text-text font-semibold text-background border-2 border-primary rounded-lg">
        <BsLightning /> Buy Now
      </button>
      <button className="flex bg-transparent hover:bg-hover w-full justify-center items-center gap-2 px-4 py-2 text-text font-semibold hover:text-background border-2 border-primary rounded-lg">
        <MdOutlineShoppingCart /> Add To Cart
      </button>
    </div>
  );
}
