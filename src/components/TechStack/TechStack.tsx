import "./TechStack.css";

export default function TechStack() {
  const techStacks = [
    ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    ["Git", "GitHub", "Vite", "SASS"]
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <h1>Stack Tecnológico</h1>
      <div className="ribbons-container">
        {techStacks.map((stack, index) => (
          <div key={index} className={`ribbon ribbon-${index % 2 === 0 ? 'ltr' : 'rtl'}`}>
            <div className="ribbon-content">
              {[...stack, ...stack, ...stack].map((tech, techIndex) => (
                <span key={techIndex} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
