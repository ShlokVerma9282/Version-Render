import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Info from "./components/Info/Info";
import Slider from "./components/Slider/Slider";
import Recommendation from "./components/Recommendation/Recommendation";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Test";
import FAQ from "./components/FAQ/Faq"
import Baby from "./components/Baby/Slider"
import Ele from "./components/Electronics/Slider"
import "./App.css";


function App() {
  const introRef = useRef(null);
  const aboutRef= useRef(null);
  const servicesRef = useRef(null);
  const brandsRef = useRef(null);
  const listsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App bg-gray-100">
      <Navbar
        scrollToIntro={() => scrollToSection(introRef)}
        scrollToAbout={()=>scrollToSection(aboutRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToBrands={() => scrollToSection(brandsRef)}
        scrollToLists={() => scrollToSection(listsRef)}
      />
      <div className="ml-5 mr-5">
        <div ref={introRef}>
          <Intro />
        </div>
        <div >
          <Baby/>
        </div>
        <div ref={aboutRef}>
        <Info />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={brandsRef}>
          <Works />
        </div>
        <div ref={listsRef}>
        <Recommendation />
        </div>
      </div>
      <FAQ/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
