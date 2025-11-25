import "./App.css";
import { HeroSection, About, TechStack, Projects } from "./components";
import Studies from "./components/Studies/Studies";

function App() {
  return (
    <>
      <div className="horizontal-display">
        <HeroSection />
        <Projects />
        <TechStack />
        <About />
        <Studies />
      </div>
    </>
  );
}

export default App;
