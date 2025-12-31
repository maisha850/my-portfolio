import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-5">
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-1 text-teal-400 text-sm hover:underline"
          >
            Live <ExternalLink size={14} />
          </a>
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 text-gray-300 text-sm hover:text-white"
          >
            Code <Github size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
