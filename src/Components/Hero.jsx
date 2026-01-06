import { motion } from "framer-motion";
import img from "../assets/Untitled-2.png"
import { Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0b0f14] overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
     
              <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="space-y-6 md:mt-0 mt-25"
          >
            <span className="relative inline-block  text-white text-2xl  font-semibold speech-bubble animate-bounce">
             👋 Hello, I am
            </span>

            <motion.h1
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="text-5xl text-teal-500 md:text-6xl font-bold"
            >
              Maisha Tasnim <br />
              <span className="text-gray-300">Khan</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-lg"
            >
              A Professional Frontend Developer passionate about crafting beautiful user experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a href="#projects">
                <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white  rounded shadow-lg shadow-teal-500/30"
              >
                My Works
                
              </motion.button>
              </a>

              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3  rounded text-primary border-primary transition"
              >
            <a className="flex items-center gap-2" href="/src/assets/Maisha Tasnim Khan.pdf" download>
               <Download></Download> Download CV
            </a>
              </motion.button>
            </motion.div>
          </motion.div>

        {/* RIGHT PROFILE CARD */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-sm mx-auto bg-white/5 backdrop-blur-xl border border-teal-400 rounded-full p-4 shadow-xl">
            <img
              src={img}
              alt="Profile"
              className="rounded-full  grayscale group-hover:grayscale-0 object-cover"
            />

         
          </div>
        </motion.div> */}
        {/* <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative group"
>
  <div className="relative w-full max-w-sm mx-auto bg-white/5 backdrop-blur-xl border border-teal-400/40 rounded-full p-4 shadow-xl">
     <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[340px] h-[340px] rounded-full bg-teal-500/20 blur-3xl"
          />
    <img
      src={img}
      alt="Profile"
      className="
        rounded-full
        object-cover
        grayscale
        transition
        duration-500
        ease-in-out
        group-hover:grayscale-0
        group-hover:scale-105
        group-hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]
      "
    />
  </div>
</motion.div> */}

<motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Glow Ring */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-teal-500/20 blur-3xl"
          />

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[400px] h-[400px] rounded-full p-2 bg-white/5 backdrop-blur-xl border border-teal-400/40 shadow-xl"
          >
            <img
              src={img}
              alt="Profile"
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


// import { motion } from "framer-motion";
// import img from "../assets/Untitled-2.png";
// import { Download } from "lucide-react";

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center bg-[#0b0f14] overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.12),transparent_45%)]" />

//       <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="visible"
//           className="space-y-6"
//         >
//           <motion.span
//             variants={fadeUp}
//             className="inline-block text-teal-400 text-lg font-medium"
//           >
//             👋 Hello, I am
//           </motion.span>

//           <motion.h1
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-bold leading-tight"
//           >
//             <span className="text-white">Maisha Tasnim</span>
//             <br />
//             <span className="text-teal-400">Khan</span>
//           </motion.h1>

//           {/* Typing-style role */}
//           <motion.p
//             variants={fadeUp}
//             className="text-lg text-gray-400 max-w-lg"
//           >
//             A <span className="text-teal-400">Frontend Developer</span> crafting
//             modern, responsive & interactive web experiences.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             className="flex gap-4 pt-2"
//           >
//             <a href="#projects">
//               <motion.button
//                 whileHover={{ y: -4 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-teal-500 text-black font-medium rounded-lg shadow-lg shadow-teal-500/30"
//               >
//                 My Works
//               </motion.button>
//             </a>

//             <motion.a
//               whileHover={{ y: -4 }}
//               whileTap={{ scale: 0.95 }}
//               href="/src/assets/Maisha Tasnim Khan.pdf"
//               download
//               className="flex items-center gap-2 px-6 py-3 border border-teal-400 text-teal-400 rounded-lg"
//             >
//               <Download size={18} /> Download CV
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT PROFILE IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="relative flex justify-center"
//         >
//           {/* Glow Ring */}
//           <motion.div
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute w-[340px] h-[340px] rounded-full bg-teal-500/20 blur-3xl"
//           />

//           {/* Floating Image */}
//           <motion.div
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             className="relative w-[280px] h-[280px] rounded-full p-2 bg-white/5 backdrop-blur-xl border border-teal-400/40 shadow-xl"
//           >
//             <img
//               src={img}
//               alt="Profile"
//               className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition duration-500"
//             />
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;
