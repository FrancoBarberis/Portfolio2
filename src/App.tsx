import { useState } from "react";
import "./App.css";
import {HeroSection, Indice} from "./components"

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <HeroSection/>
      <Indice/>
    </>
  );
}

export default App;
