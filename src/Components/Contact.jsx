
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin } from "lucide-react";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
setLoading(true)
    emailjs.sendForm(
        "service_ifphmx8",
        "template_d7vkr73",
        formRef.current,
        "ZJq8L_juvsFhOecf-"
      )
      .then(
        () => {
            setLoading(false);
          toast.success("Message sent successfully 🚀", {
            theme: "dark", // matches your dark theme
          });;
          formRef.current.reset();
        },
        (error) => {
             setLoading(false);
            toast.error("Something went wrong ❌", {
            theme: "dark",
          });
          console.log(error);
        }
      );
  };
  return (
    <section id="contact" className="bg-[#0b0f14] py-24">
       <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm  font-bold uppercase tracking-widest text-teal-400 mb-4">
            Contact
          </p>

          <h2 className="text-3xl uppercase md:text-5xl font-bold text-white leading-tight">
            Reach Out
           
              <span className="text-teal-400 ml-2">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md">
         
            Feel free to reach out if you’d like to connect or collaborate.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <a
              href="mailto:yourmail@example.com"
              className="flex md:text-[16px] text-xs items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
              <Mail size={20} />
              tasnimmaisha08@gmail.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="flex md:text-[16px] text-xs items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
              <Github size={20} />
           https://github.com/maisha850
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="flex md:text-[16px] text-xs items-center gap-3 text-gray-300 hover:text-teal-400 transition"
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
          className="bg-white/5 border border-white/10 backdrop-blur-xl md:w-full w-80 rounded-2xl p-8"
        >
         <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
      
      <div>
        <label className="block text-sm text-gray-400 mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
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
          name="email"
          required
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
          name="message"
          required
          placeholder="Tell me about your project"
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400 resize-none"
        />
      </div>

      <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg bg-teal-500 text-white font-medium transition ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-teal-400"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
    </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
