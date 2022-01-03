import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation/navigation";
import { Header } from "./components/header/header";
import { Features } from "./components/features/features";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Contact } from "./components/contact/contact";
import JsonData from "./data/data.json";
import LogoSection from './components/LogoSection/LogoSection'
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Footer from "./components/Footer/Footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>

      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.ServicesHome} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
};

export default App;
