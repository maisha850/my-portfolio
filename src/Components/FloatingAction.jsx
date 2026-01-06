import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingActions = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const allSections = Array.from(document.querySelectorAll("section"));
    setSections(allSections);
  }, []);

  const scrollToTop = () => {
    if (!sections[0]) return;
    sections[0].scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    if (!sections[sections.length - 1]) return;
    sections[sections.length - 1].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">

      {/* Contact Button */}
      {/* <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="#contact"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-black shadow-lg shadow-teal-500/30"
      >
        <Phone size={20} />
      </motion.a> */}

      {/* Scroll Down → LAST SECTION */}
      <motion.button
        whileHover={{ y: 4 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToBottom}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-teal-400 backdrop-blur"
      >
        <ArrowDown size={20} />
      </motion.button>

      {/* Scroll Up → FIRST SECTION */}
      <motion.button
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-teal-400 backdrop-blur"
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  );
};

export default FloatingActions;
