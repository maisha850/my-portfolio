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
                className="px-8 py-3 bg-primary  rounded shadow-lg shadow-teal-500/30"
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
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative group"
>
  <div className="relative w-full max-w-sm mx-auto bg-white/5 backdrop-blur-xl border border-teal-400/40 rounded-full p-4 shadow-xl">
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
</motion.div>


      </div>
    </section>
  );
};

export default Hero;


