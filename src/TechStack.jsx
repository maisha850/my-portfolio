const techs = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Figma",
  "Framer Motion",
];

const TechStack = () => {
  return (
    <section className="bg-[#0b0f14] py-16 overflow-hidden border-y border-white/5">
      <div className="relative">
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0b0f14] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0b0f14] to-transparent z-10" />

        {/* Marquee */}
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...techs, ...techs].map((tech, index) => (
            <span
              key={index}
              className="text-gray-400 text-lg font-medium tracking-wide hover:text-cyan-400 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
