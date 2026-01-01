// // import { motion } from "framer-motion";

// // const skills = [
// //   {
// //     title: "Frontend",
// //     items: ["React", "JavaScript", "HTML5", "CSS3"],
// //   },
// //   {
// //     title: "Styling & UI",
// //     items: ["Tailwind CSS", "Responsive Design", "UI/UX Basics"],
// //   },
// //   {
// //     title: "Tools",
// //     items: [ "GitHub", "VS Code", "Figma"],
// //   },
// //   {
// //     title: "Other",
// //     items: ["API Integration", "Debugging", "Problem Solving"],
// //   },
// // ];

// // const Skills = () => {
// //   return (
// //     <section id="skills" className="bg-[#0b0f14] py-24">
// //       <div className="max-w-7xl mx-auto px-6">

// //         {/* Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-16"
// //         >
// //           <p className="text-sm uppercase tracking-widest text-teal-400 mb-3">
// //             Skills
// //           </p>
// //           <h2 className="text-3xl md:text-4xl font-bold text-white">
// //             What I <span className="text-teal-400">Work With</span>
// //           </h2>
// //           <p className="text-gray-400 mt-4 max-w-xl">
// //             Technologies and tools I use to build modern, responsive web
// //             applications.
// //           </p>
// //         </motion.div>

// //         {/* Skill Cards */}
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {skills.map((skill, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6 hover:border-teal-400/40 transition"
// //             >
// //               <h3 className="text-white font-semibold mb-4">
// //                 {skill.title}
// //               </h3>

// //               <ul className="space-y-2">
// //                 {skill.items.map((item, i) => (
// //                   <li
// //                     key={i}
// //                     className="text-gray-400 text-sm flex items-center gap-2"
// //                   >
// //                     <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;
import { motion } from "framer-motion";



const techIcons = [
  { name: "JavaScript", src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
  { name: "React", src: "https://cdn-icons-png.flaticon.com/128/15484/15484268.png" },
  { name: "GitHub", src: "https://cdn-icons-png.flaticon.com/128/5968/5968866.png" },
  { name: "Next.js", src: "https://tse2.mm.bing.net/th/id/OIP.DBqkoCqHBUkfVfULZSAJfQHaHa?pid=Api&P=0&h=220" },
  { name: "Node.js", src: "https://tse2.mm.bing.net/th/id/OIP.l2C4ff3XOonPiXDdIkXI4QAAAA?pid=Api&P=0&h=220" },
  { name: "Express.js", src: "https://tse4.mm.bing.net/th/id/OIP.IPTjRuTgaXA50H6Jyemw6gHaHa?pid=Api&P=0&h=220" },
  { name: "Firebase", src: "https://tse3.mm.bing.net/th/id/OIP.jgn-UQ39KrtA8b5j-qTnzAHaHa?pid=Api&P=0&h=220" },
  { name: "MongoDb", src: "https://tse4.mm.bing.net/th/id/OIP.CypH4tcPgMJBziGl27jjfgHaHa?pid=Api&P=0&h=220" },
  { name: "Tailwind", src: "https://tse1.mm.bing.net/th/id/OIP.yMEsQ5pCVMp4mARXDdgLnwHaHa?pid=Api&P=0&h=220" },
  { name: "HTML", src: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" },
  { name: "CSS", src: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0b0f14] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold  text-teal-400 ">What I Do</h2>
          <p className="mt-4 text-gray-400 tracking-wide uppercase text-sm">
            Frontend Developer Who Loves Building_toggle_clean_ui
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
             <motion.img
              src={`https://tse4.mm.bing.net/th/id/OIP.2oQ7AYl0HqweAVRe14D_RAHaEJ?pid=Api&P=0&h=220`}
              alt="Frontend Developer Illustration"
              className="w-full max-w-md rounded-full"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl  text-teal-400  font-semibold  mb-6">
              Frontend Development
            </h3>

            {/* Tech Icons */}
            <div className="flex flex-wrap  gap-4 mb-8">
              {techIcons.map((tech, i) => (
                <div className={`hover:${tech.name} `}>
                    <div
                                    key={i}
                    whileHover={{ scale: 1.15 }}
                    className="group flex items-center gap-3 bg-[#0b0f14] px-4 py-2 rounded-full border border-gray-700 hover:border-teal-400 transition"
                >
                  <img src={tech.src} alt={tech.name} className="w-6 h-6" />
                   <span className="text-gray-300 text-sm group-hover:text-teal-400 transition">
                      {tech.name}
                    </span>
                </div>
                </div>
              ))}
            </div>

            {/* Skill Points */}
            <ul className="space-y-4 text-gray-400">
              <li>⚡ Building responsive Single Page Applications using React</li>
              <li>⚡ Creating clean UI using Tailwind CSS</li>
              <li>⚡ Developing fast static websites with Next.js</li>
              <li>⚡ Writing reusable and maintainable components</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
// import { motion } from "framer-motion";

// const skillCategories = [
//   {
//     title: "Frontend Development",
//     skills: [
//       { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
//       { name: "React", icon: "https://cdn-icons-png.flaticon.com/128/15484/15484268.png" },
//       { name: "Next.js", icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png" },
//       { name: "Tailwind CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
//       { name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" },
//       { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
//     ],
//   },
//   {
//     title: "Backend (Basic)",
//     skills: [
//       { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png" },
//       { name: "Express.js", icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png" },
//       { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/128/919/919836.png" },
//       { name: "Firebase", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968841.png" },
//     ],
//   },
//   {
//     title: "Tools & Design",
//     skills: [
//       { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png" },
//       { name: "Git", icon: "https://cdn-icons-png.flaticon.com/128/2111/2111288.png" },
//       { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/128/733/733609.png" },
//       { name: "VS Code", icon: "https://cdn-icons-png.flaticon.com/128/906/906324.png" },
//     ],
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6 },
//   }),
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-[#0b0f14] py-28">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl font-bold text-teal-400">What I Do</h2>
//           <p className="mt-4 text-gray-400 text-sm uppercase tracking-widest">
//             Skills & Technologies I Work With
//           </p>
//         </motion.div>

//         {/* Skill Cards */}
//         <div className="grid md:grid-cols-2 gap-10">

//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className={`
//                 bg-[#0f1620]
//                 border border-teal-500/10
//                 rounded-2xl
//                 p-8
//                 hover:border-teal-400/30
//                 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]
//                 transition
//                 ${category.title === "Tools & Design" ? "md:col-span-2" : ""}
//               `}
//             >
//               <h3 className="text-xl font-semibold text-teal-400 mb-6">
//                 {category.title}
//               </h3>

//               <div className="flex flex-wrap gap-5">
//                 {category.skills.map((skill, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ scale: 1.15 }}
//                     className="group flex items-center gap-3 bg-[#0b0f14] px-4 py-2 rounded-full border border-gray-700 hover:border-teal-400 transition"
//                   >
//                     <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
//                     <span className="text-gray-300 text-sm group-hover:text-teal-400 transition">
//                       {skill.name}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}

//         </div>

//         {/* Bottom Skill Statement */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-16 text-center text-gray-400 max-w-2xl mx-auto"
//         >
//           I focus on building clean, responsive, and scalable interfaces while
//           continuously learning modern frontend best practices.
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Skills;

