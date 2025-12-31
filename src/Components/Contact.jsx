
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0b0f14] py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Let’s build something
            <br />
            <span className="text-teal-400">great together</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md">
            I’m open to internships, junior roles, and freelance opportunities.
            Feel free to reach out if you’d like to connect or collaborate.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <a
              href="mailto:yourmail@example.com"
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
              <Mail size={20} />
              tasnimmaisha08@gmail.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
              <Github size={20} />
           https://github.com/maisha850
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
              <Linkedin size={20} />
           https://www.linkedin.com/in/maishatasnimkhan/
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Maisha Tasnim Khan
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Message..."
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-teal-500 text-black font-medium hover:bg-teal-400 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
