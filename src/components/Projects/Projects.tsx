import "./Projects.css";
import ProjectCard from "./ProjectCard";
import WallpaperProviderIMG from "../../assets/WallpaperProvider.png"

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Proyectos</h1>
      <div className="projects-list">
        <ProjectCard title="Wallpaper Provider" description="Portal para descargar wallpapers" imageUrl={WallpaperProviderIMG} link="https://link-to-project-1.com"></ProjectCard>
        <ProjectCard title="Proyecto 2" description="Descripción del proyecto 2" imageUrl={WallpaperProviderIMG} link="https://link-to-project-2.com"></ProjectCard>
        <ProjectCard title="Proyecto 3" description="Descripción del proyecto 3" imageUrl={WallpaperProviderIMG} link="https://link-to-project-3.com"></ProjectCard>
        <ProjectCard title="Proyecto 4" description="Descripción del proyecto 4" imageUrl={WallpaperProviderIMG} link="https://link-to-project-4.com"></ProjectCard>
      </div>
    </section>
  );
}
