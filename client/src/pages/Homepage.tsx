import BestSellerSection from "../components/homepage/BestSellerSection";
import CategorySection from "../components/homepage/CategorySection";

import HeroSection from "../components/homepage/HeroSection";
import Inspiration from "../components/homepage/Inspiration";
import OfferSection from "../components/homepage/OfferSection";
import OptionsPanel from "../components/homepage/OptionsPanel";

export default function Homepage() {
  return (
    <div className="bg-background">
      <OptionsPanel />
      <HeroSection />
      <CategorySection />
      <BestSellerSection />
      <OfferSection />
      <Inspiration />
    </div>
  );
}
