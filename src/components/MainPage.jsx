import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import GrayBorder from "./sub-components/GrayBorder";
import Services from "./Services";

function MainPage() {
  return (
    <>
      <Hero />

      <GrayBorder />
      <About />

      <GrayBorder />
      <Services/>

      <GrayBorder />
      <Projects />

      <GrayBorder />
      <Skills />

      <GrayBorder />
      <Contact />

      <Footer />
    </>
  );
}

export default MainPage;