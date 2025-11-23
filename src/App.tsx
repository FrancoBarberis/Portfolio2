import { useState } from "react";
import "./App.css";
import {HeroSection, About, Projects} from "./components"

function App() {

  return (
    <>
      <HeroSection/>
      <About/>
      <Projects/>
    </>
  );
}

export default App;
