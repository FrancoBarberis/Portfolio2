
import './ProjectCard.css';
import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => (
    <div className="project-card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="project-card-content">
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-description">{description}</p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                >
                    Ver proyecto
                </a>
            )}
        </div>
    </div>
);

export default ProjectCard;