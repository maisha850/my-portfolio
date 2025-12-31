import { motion } from "framer-motion";
import img from "../assets/Untitled-2.png"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0b0f14] overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
            Frontend Developer
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Crafting{" "}
            <span className="text-teal-400">digital experiences</span>
            <br />
            with precision.
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            I’m a passionate frontend developer focused on building responsive,
            clean, and user-friendly web interfaces using React.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-teal-500 text-black font-medium hover:bg-cyan-400 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-sm mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
            <img
              src={img}
              alt="Profile"
              className="rounded-xl object-cover"
            />

            <div className="mt-4">
              <h3 className="text-white font-semibold text-lg">
              Maisha Tasnim Khan
              </h3>
              <p className="text-sm text-gray-400">
                React Frontend Developer
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
