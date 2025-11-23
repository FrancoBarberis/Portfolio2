import "./HeroSection.css";
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
          <div className="seccion-botones">
            <button>
              {" "}
              <span>Sobre mí</span>
            </button>
            <button>
              {" "}
              <span>Click Me</span>
            </button>
            <button>
              {" "}
              <span>Click Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
