import HeroSection from "../components/homepage/HeroSection";
import OptionsPanel from "../components/homepage/OptionsPanel";
import Navbar from "./../components/homepage/Navbar";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <OptionsPanel />
      <HeroSection />
    </div>
  );
}
