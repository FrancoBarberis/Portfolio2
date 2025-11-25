import "./App.css";
import { HeroSection, About, TechStack, Projects } from "./components";
import Studies from "./components/Studies/Studies";

import { useState } from "react";

const sections = [
  { id: "hero", label: "Inicio", component: (goToSection: (idx: number) => void) => <HeroSection goToSection={goToSection} /> },
  { id: "projects", label: "Proyectos", component: () => <Projects /> },
  { id: "tech-stack", label: "Stack", component: () => <TechStack /> },
  { id: "about", label: "Sobre mí", component: () => <About /> },
  { id: "studies", label: "Estudios", component: () => <Studies /> },
] as const;

function App() {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((prev) => Math.min(prev + 1, sections.length - 1));
  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goToSection = (idx: number) => setCurrent(idx);

  const getPrevLabel = (): string => {
    if (current === 0) return "";
    const prevIdx = current - 1;
    return `← ${sections[prevIdx].label}`;
  };

  const getNextLabel = (): string => {
    if (current === sections.length - 1) return "";
    const nextIdx = current + 1;
    return `${sections[nextIdx].label} →`;
  };

  return (
    <div className="section-navigator">
      {sections.map((section, idx) => {
        const isActive = idx === current;
        if (section.id === "hero") {
          return (
            <div key={section.id} className={isActive ? "active-section" : ""}>
              {section.component(goToSection)}
            </div>
          );
        } else {
          return (
            <div key={section.id} className={isActive ? "active-section" : ""}>
              {section.component()}
              {isActive && (
                <div className="nav-buttons">
                  <button onClick={goPrev} disabled={current === 0}>{getPrevLabel()}</button>
                  <button onClick={goNext} disabled={current === sections.length - 1}>{getNextLabel()}</button>
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
