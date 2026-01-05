// // import { useParams, Link } from "react-router-dom";
// import projects from "../data/projects";
// import { motion } from "framer-motion";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projects.find(p => p.id === Number(id));

//   if (!project) {
//     return (
//       <div className="bg-[#0b0f14] min-h-screen flex items-center justify-center text-white">
//         Project not found
//       </div>
//     );
//   }

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-[#0b0f14] min-h-screen py-24 px-6"
//     >
//       <div className="max-w-5xl mx-auto">

//         <Link
//           to="/projects"
//           className="text-teal-400 hover:underline mb-10 inline-block"
//         >
//           ← Back to Projects
//         </Link>

//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-72 object-cover rounded-2xl mb-10"
//         />

//         <h1 className="text-4xl font-bold text-white mb-4">
//           {project.title}
//         </h1>

//         <p className="text-gray-400 max-w-3xl mb-10">
//           {project.description}
//         </p>

//         {/* Links */}
//         <div className="flex flex-wrap gap-4 mb-14">
//           <a
//             href={project.live}
//             target="_blank"
//             className="px-6 py-3 bg-teal-500 text-white rounded-lg"
//           >
//             Live Project
//           </a>

//           <a
//             href={project.github}
//             target="_blank"
//             className="px-6 py-3 border border-white/20 text-white rounded-lg"
//           >
//             GitHub (Client)
//           </a>
//         </div>

//         <Section title="Main Technology Stack">
//           <div className="flex flex-wrap gap-3">
//             {project.tech.map((t, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </Section>

//         <Section title="Challenges Faced">
//           <ul className="list-disc pl-6 text-gray-400 space-y-2">
//             {project.challenges.map((c, i) => (
//               <li key={i}>{c}</li>
//             ))}
//           </ul>
//         </Section>

//         <Section title="Future Improvements & Plans">
//           <ul className="list-disc pl-6 text-gray-400 space-y-2">
//             {project.futurePlans.map((f, i) => (
//               <li key={i}>{f}</li>
//             ))}
//           </ul>
//         </Section>

//       </div>
//     </motion.section>
//   );
// };

// const Section = ({ title, children }) => (
//   <div className="mb-14">
//     <h2 className="text-2xl font-semibold text-white mb-5">
//       {title}
//     </h2>
//     {children}
//   </div>
// );

// export default ProjectDetails;
