import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Why from "./components/Why/Why";
import GridDisplay from "./components/GridDisplay/GridDisplay";
import SignUp from "./components/SignUp/SignUp";
import SiteFooter from "./components/Footer/SiteFooter";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <GridDisplay />
      <SignUp />
      <SiteFooter />
    </>
  );
};

export default App;
