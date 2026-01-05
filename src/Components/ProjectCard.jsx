// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";

// const ProjectCard = ({ project }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ type: "spring", stiffness: 300 }}
//       className="relative group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden"
//     >
//       {/* Glow Effect */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

//       {/* Image */}
//       <div className="overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5 relative z-10">
//         <h3 className="text-lg font-semibold text-white">
//           {project.title}
//         </h3>

//         <p className="text-sm text-gray-400 mt-2">
//           {project.description}
//         </p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           {project.tech.map((item, index) => (
//             <span
//               key={index}
//               className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex gap-4 mt-5">
//           <a
//             href={project.live}
//             target="_blank"
//             className="flex items-center gap-1 text-teal-400 text-sm hover:underline"
//           >
//             Live <ExternalLink size={14} />
//           </a>
//           <a
//             href={project.github}
//             target="_blank"
//             className="flex items-center gap-1 text-gray-300 text-sm hover:text-white"
//           >
//             Code <Github size={14} />
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`relative rounded-2xl overflow-hidden shadow-xl ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* CONTENT */}
        <div
          className={`${
            isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"
          }`}
        >
          <h3 className="text-3xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            {project.description}
          </p>

          {/* TECH */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm rounded-full bg-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 transition"
            >
              <Github size={18} />
              Code
            </a>

            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-teal-500 text-black font-medium hover:bg-teal-400 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

