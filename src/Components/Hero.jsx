import { motion } from "framer-motion";
import img from "../assets/Untitled-2.png";
import { Download } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0b0f14] overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:mt-0 mt-24"
        >
          <p className="inline-block text-white text-2xl font-semibold ">
            <span className="wave">👋</span> Hello, I am
          </p>

          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-teal-500"
          >
            Maisha Tasnim <br />
            <span className="text-gray-300">Khan</span>
          </motion.h1>

          {/* Animated Role Text */}
    
          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 max-w-lg"
          >
            I craft full-stack web applications using the MERN stack, focusing on clean code, intuitive interfaces, and scalable solutions that drive real-world impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <a href="#projects">
              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded shadow-lg shadow-teal-500/30"
              >
                My Works
              </motion.button>
            </a>

            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="/src/assets/Maisha Tasnim Khan.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded"
            >
              <Download size={18} /> Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        
       {/* RIGHT PROFILE IMAGE */}
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
    className="absolute md:w-[500px] md:h-[500px] w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-3xl"
  />

  {/* Floating Image */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="relative md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full p-2 bg-white/5 backdrop-blur-xl border border-teal-400/40 shadow-xl"
  >
    <img
      src={img}
      alt="Profile"
      className="w-full h-full rounded-full object-cover  transition duration-300"
    />

    

    {/* MERN Stack Developer Tag */}
    <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/50 backdrop-blur-md md:px-4 px-3 py-2 md:py-3 rounded-full border border-teal-500/40 text-white uppercase md:text-sm text-xs font-semibold">
   <span className="text-teal-500">MERN STACK</span> Developer
    </div>

  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;
