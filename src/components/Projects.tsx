import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "../animations/variants";

const projects = [
  {
    title: "Gaming Groove : A Game review website",
    description:
      "A full-featured online shopping platform with cart functionality and payment integration.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather forecasting application with interactive maps and detailed analytics.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "Weather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    variants={scaleIn}
    whileHover={{ y: -10 }}
  >
    <div className="relative group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
        <a
          href={project.liveUrl}
          className="p-2 bg-white rounded-full hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={20} />
        </a>
        <a
          href={project.githubUrl}
          className="p-2 bg-white rounded-full hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
