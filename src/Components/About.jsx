import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#0b0f14] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Building the future,
            <br />
            <span className="text-teal-400">one component at a time.</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-xl">
            I’m a frontend developer focused on creating clean, responsive, and
            user-friendly web interfaces using React. I enjoy turning ideas and
            designs into interactive digital experiences while continuously
            improving my skills.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed max-w-xl">
            As a fresher, I prioritize writing clean code, learning best
            practices, and building visually polished UIs that feel smooth and
            intuitive.
          </p>
        </motion.div>

        {/* RIGHT GLASS CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {[
            {
              title: "Clean Code",
              desc: "Readable, maintainable and well-structured components.",
            },
            {
              title: "Responsive UI",
              desc: "Mobile-first layouts that work on all screen sizes.",
            },
            {
              title: "Modern Tools",
              desc: "React, Tailwind CSS, Git, and Framer Motion.",
            },
            {
              title: "Continuous Learning",
              desc: "Always improving through projects and practice.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:border-cyan-400/40 transition"
            >
              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
