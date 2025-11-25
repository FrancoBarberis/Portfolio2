import "./App.css";
import { HeroSection, About, TechStack, Projects } from "./components";

function App() {
  return (
    <>
      <div className="horizontal-display">
        <HeroSection />
        <Projects />
        <TechStack />
        <About />
      </div>
    </>
  );
}

export default App;
