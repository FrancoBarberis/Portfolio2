import "./TechStack.css";

export default function TechStack() {
  const technologies = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vite",
    "Git",
    "Node.js"
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <h1>Tecnologías</h1>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech} className="tech-item">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
