import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Why from "./components/Why/Why";
import GridDisplay from "./components/GridDisplay/GridDisplay";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <GridDisplay />
    </>
  );
};

export default App;
