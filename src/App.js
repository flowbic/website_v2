import HeroSection from "./components/heroSection";
import Company from "./components/company";
import MiddleSection from "./components/middleSection";
import AboutUs from "./components/aboutUs";
import Tech from "./components/tech";

import "./App.css";

export default function App() {
  return (
    <>
      <HeroSection />
      <Company />
      <Tech />
      <AboutUs />
      {/* <AboutUs />
      <Team /> */
      /* <Footer /> */}
    </>
  );
}
