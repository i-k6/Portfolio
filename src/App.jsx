import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  Footer,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-r from-black-500 via-black-200 to-gray-900">
        <div
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
          style={{
            backdropFilter: "blur(8px)",
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <About isLoading={isLoading} />
        <Experience isLoading={isLoading} />
        <Tech isLoading={isLoading} />
        <Works isLoading={isLoading} />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
