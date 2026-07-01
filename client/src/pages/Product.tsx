// import MainButton from "../components/homepage/MainButton";
// import Counter from "./../components/product/Counter";

import ProductButtons from "../components/product/ProductButtons";
import CheckDate from "../components/product/CheckDate";
import Productfeature from "../components/product/Productfeature";
import ProductDetail from "../components/product/ProductDetail";
import Customization from "../components/product/Customization";

export default function Product() {
  return (
    <>
      <div className="h-fit w-full bg-background flex flex-col lg:flex-row px-12 py-12">
        <div className="lg:w-1/2 w-full h-108 lg:px-12  flex justify-center">
          <img
            className="w-lg h-full rounded-xl"
            src="/src/assets/weddingdecor.png"
            alt="cardImage"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <ProductDetail />
          <Productfeature />
          <CheckDate />
          <ProductButtons />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col lg:flex-row   text-text">
        <Customization />
      </div>
    </>
  );
}
