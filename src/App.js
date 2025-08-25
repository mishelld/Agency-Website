import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import ManageSection from "./components/ManageSection";
import PixelgradeSection from "./components/PixelgradeSection";
import HelpSection from "./components/HelpSection";
import DesignSection from "./components/DesignSection";
import AdditionalSection from "./components/AdditionalSection";
import CaringSection from "./components/CaringSection";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ManageSection />
      <PixelgradeSection />
      <HelpSection />
      <DesignSection />
      <AdditionalSection />
      <CaringSection />
      <FinalSection />
      <Footer />
    </>
  );
}

export default App;
