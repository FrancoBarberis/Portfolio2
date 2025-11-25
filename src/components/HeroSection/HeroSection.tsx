import "./HeroSection.css";


function scrollToSection(sectionName: string) {
  const Section = document.getElementById(sectionName);
  if (Section) {
    Section.scrollIntoView({ behavior: "smooth" });
  }
}
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="absolute-wrapper">
        <div className="main-container">
          <h1>
            Franco
            <br />
            Barberis
          </h1>
          <h2>Frontend developer</h2>
          <div className="seccion-botones">
            <button onClick={() => scrollToSection("projects")}> 
              <span>Proyectos</span>
            </button>
            <button onClick={() => scrollToSection("tech-stack")}> 
              <span>Stack</span>
            </button>
            <button onClick={() => scrollToSection("about")}> 
              <span>Sobre mí</span>
            </button>
            <button onClick={() => scrollToSection("studies")}> 
              <span>Estudios</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
