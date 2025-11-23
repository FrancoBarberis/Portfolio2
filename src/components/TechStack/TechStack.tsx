import "./TechStack.css";

export default function TechStack() {
  const row1 = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Next.js",
  ];

  const row2 = [
    "Node.js",
    "Git",
    "Vite",
    "Redux",
    "Tailwind",
    "Figma",
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <h1>Stack Tecnológico</h1>
      
      <div className="scroll-container">
        {/* Row 1 - Scrolls Left */}
        <div className="scroll-wrapper left">
          <div className="scroll-content">
            {/* Duplicate content for seamless loop */}
            {[...row1, ...row1, ...row1, ...row1].map((tech, index) => (
              <div key={`r1-${index}`} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="scroll-wrapper right">
          <div className="scroll-content">
             {/* Duplicate content for seamless loop */}
            {[...row2, ...row2, ...row2, ...row2].map((tech, index) => (
              <div key={`r2-${index}`} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
