import React from "react";
import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div >
     <NavBar />
     <Hero />
     <Destinations />
     <Search />
     <Selects />
     <Carousel />
     <Footer />
      </div>
  );
}

export default App;
