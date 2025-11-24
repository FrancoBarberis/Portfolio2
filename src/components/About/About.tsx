
import "./About.css";

export default function About() {
    const education = [
        {
            year: "2024",
            title: "Desarrollo Frontend",
            institution: "Autodidacta",
            description: "Aprendizaje continuo en tecnologías modernas de frontend"
        },
        {
            year: "2023",
            title: "Fundamentos de Programación",
            institution: "Cursos Online",
            description: "HTML, CSS, JavaScript y React"
        }
    ];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <h1 className="about-title">Sobre Mí</h1>
                
                <p className="about-description">
                    Me apasiona <strong>crear interfaces visuales</strong> que van más allá de lo estético, 
                    transformándolas en <strong>experiencias completas</strong> que conectan con los usuarios. 
                    Cada día trabajo para mejorar como <strong>desarrollador frontend</strong>, 
                    explorando nuevas tecnologías y perfeccionando mis habilidades para construir 
                    aplicaciones web modernas, intuitivas y de alto rendimiento.
                </p>

                <div className="timeline-section">
                    <h2 className="timeline-title">Mi Formación</h2>
                    <div className="timeline">
                        {education.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-item-title">{item.title}</h3>
                                    <p className="timeline-institution">{item.institution}</p>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}