import "./HeroSection.css";


type HeroSectionProps = {
  goToSection: (idx: number) => void;
};

export default function HeroSection({ goToSection }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="absolute-wrapper">
        <div className="main-container">
          <h1>
            Franco<br/>
            Barberis
          </h1>
          <h2>Frontend developer</h2>
          <div className="seccion-botones">
            <button onClick={() => goToSection(1)}>
              <span>Proyectos</span>
            </button>
            <button onClick={() => goToSection(2)}>
              <span>Stack</span>
            </button>
            <button onClick={() => goToSection(3)}>
              <span>Sobre mí</span>
            </button>
            <button onClick={() => goToSection(4)}>
              <span>Estudios</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
