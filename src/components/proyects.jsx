import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6"; // ----> importa el icono de GitHub
import { TbWorldWww } from "react-icons/tb"; // ----> importa el icono de mundo para demo en vivo

const ProjectCard = ({ title, description, tech, type, demoLink, codeLink, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 bg-gray-200">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Vista previa no disponible
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded ${
            type === 'Frontend' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
          }`}>
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Tecnologías:</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-sm rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Demo en vivo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Aplicación de Gestión de Tareas",
      description: "Aplicación web para gestionar tareas y proyectos con funcionalidades de arrastrar y soltar, etiquetas y filtros.",
      tech: ["React", "Tailwind CSS", "Context API", "LocalStorage"],
      type: "Frontend",
      demoLink: "#",
      codeLink: "#",
      image: null
    },
    {
      title: "Dashboard Interactivo",
      description: "Panel de control con gráficos en tiempo real, tablas de datos y filtros avanzados.",
      tech: ["React", "Chart.js", "Tailwind CSS", "React Query"],
      type: "Frontend",
      demoLink: "#",
      codeLink: "#",
      image: null
    },
    {
      title: "API RESTful E-commerce",
      description: "API completa para una tienda online con autenticación, gestión de productos y pedidos.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      type: "Backend",
      demoLink: "#",
      codeLink: "#",
      image: null
    },
    {
      title: "Sistema de Inventario",
      description: "Backend completo para gestión de inventario con GraphQL y caché distribuido.",
      tech: ["Node.js", "GraphQL", "MongoDB", "Redis"],
      type: "Backend",
      demoLink: "#",
      codeLink: "#",
      image: null
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
        
        {/* Frontend Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.type === "Frontend")
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </div>

        {/* Backend Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Backend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.type === "Backend")
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf(['Frontend', 'Backend']).isRequired,
  demoLink: PropTypes.string,
  codeLink: PropTypes.string,
  image: PropTypes.string
};

export default Projects;