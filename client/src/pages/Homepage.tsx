import BestSellerSection from "../components/homepage/BestSellerSection";
import CategorySection from "../components/homepage/CategorySection";
import Footer from "../components/homepage/Footer";
import HeroSection from "../components/homepage/HeroSection";
import Inspiration from "../components/homepage/Inspiration";
import OfferSection from "../components/homepage/OfferSection";
import OptionsPanel from "../components/homepage/OptionsPanel";
import Navbar from "./../components/homepage/Navbar";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <OptionsPanel />
      <HeroSection />
      <CategorySection />
      <BestSellerSection />
      <OfferSection />
      <Inspiration />
      <Footer />
    </div>
  );
}
