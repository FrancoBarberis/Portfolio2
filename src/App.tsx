import { useState } from "react";
import "./App.css";
import {HeroSection, About, Projects, TechStack} from "./components"

function App() {

  return (
    <>
      <HeroSection/>
      <Projects/>
      <TechStack/>
      <About/>
    </>
  );
}

export default App;
