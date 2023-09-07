import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  certificates,
  Contact,
  EarthCanvas,
  BallCanvas,
  StarsCanvas,
  Footer
} from "./components";
import Certification from "./components/Certification";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certification />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        
        <div className="z-5">
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
