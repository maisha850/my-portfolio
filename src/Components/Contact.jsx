
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin, Phone, LocationEdit, Locate, MapPin } from "lucide-react";
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
    <section id="contact" className="bg-[#0b0f14]  py-24">
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
         
           <div className="  md:w-full w-90  px-4 py-3 rounded-2xl bg-black/30 border border-white/10 text-white outline-none hover:border-teal-400  focus:border-teal-400 shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] ">
        
             <a
              href="mailto:tasnimmaisha08@gmail.com/"
              target="_blank"
              className="flex md:text-[16px] text-xs items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
                
              <span className="md:w-12 md:h-12 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-teal-400 backdrop-blur-lg shadow-lg">
                <Mail size={20} />
              </span>
<div>
                 <h3 className="text-gray-400 text-sm">Email</h3>
       <p>tasnimmaisha08@gmail.com</p>
</div>
            </a>
           </div>
           <div className=" md:w-full w-90  px-4 py-3 rounded-2xl bg-black/30 border border-white/10 text-white outline-none hover:border-teal-400  focus:border-teal-400 shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] ">
        
             <a
              href="https://web.whatsapp.com/"
              target="_blank"
              className="flex md:text-[16px] text-xs items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
                
              <span className="md:w-12 md:h-12 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-teal-400 backdrop-blur-lg shadow-lg">
                <Phone size={20} />
              </span>
<div>
                 <h3 className="text-gray-400 text-sm">WhatsApp</h3>
       <p>  +880 1788-271969</p>
</div>
            </a>
           </div>
           <div className=" md:w-full w-90  px-4 py-3 rounded-2xl bg-black/30 border border-white/10 text-white outline-none hover:border-teal-400  focus:border-teal-400 shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] ">
        
             <a
              href=""
              target="_blank"
              className="flex md:text-[16px] text-xs items-center gap-3 text-gray-300 hover:text-teal-400 transition"
            >
                
              <span className="md:w-12 md:h-12 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-teal-400 backdrop-blur-lg shadow-lg">
                <MapPin size={20} />
              </span>
<div>
                 <h3 className="text-gray-400 text-sm">Location</h3>
       <p> Dinajpur, Bangladesh</p>
</div>
            </a>
           </div>

          
          </div>
          
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl md:w-full w-90 rounded-2xl p-8"
        >
         <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <label className="block text-sm text-gray-400 mb-1">Name</label>
      <div className="hover:border-teal-400 shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)]">
      
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full hover:border-teal-400 px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">
          Email Address
        </label>
       <div className="hover:border-teal-400 shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)]">
         <input
          type="email"
          name="email"
          required
          placeholder="email@gmail.com"
          className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white outline-none hover:border-teal-400 focus:border-teal-400"
        />
       </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">
          Message
        </label>
       <div className="hover:border-teal-400 shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)]">
         <textarea
          rows="4"
          name="message"
          required
          placeholder="Tell me about your project"
          className="w-full hover:border-teal-400 px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400  resize-none"
        />
       </div>
      </div>

      <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg bg-teal-400 hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition text-white font-medium  ${
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
