import "./Projects.css";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Proyectos</h1>
      <div className="projects-list">
        <ProjectCard title="Proyecto 1" description="Descripción del proyecto 1" imageUrl="url-to-image-1" link="https://link-to-project-1.com"></ProjectCard>
        <ProjectCard title="Proyecto 2" description="Descripción del proyecto 2" imageUrl="url-to-image-2" link="https://link-to-project-2.com"></ProjectCard>
        <ProjectCard title="Proyecto 3" description="Descripción del proyecto 3" imageUrl="url-to-image-3" link="https://link-to-project-3.com"></ProjectCard>
        <ProjectCard title="Proyecto 4" description="Descripción del proyecto 4" imageUrl="url-to-image-4" link="https://link-to-project-4.com"></ProjectCard>
      </div>
    </section>
  );
}
