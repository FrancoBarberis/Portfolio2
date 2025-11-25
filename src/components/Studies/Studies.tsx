import "./Studies.css";

export default function Studies() {
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
        <section className="studies" id="studies">
            <div className="studies-container">
                <h2 className="studies-title">Mi Formación</h2>
                <div className="timeline">
                    {education.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-year">{item.year}</div>
                            <h3 className="timeline-item-title">{item.title}</h3>
                            <p className="timeline-institution">{item.institution}</p>
                            <p className="timeline-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
