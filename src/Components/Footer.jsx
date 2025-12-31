import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MaishaDev. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="https://mail.google.com/mail/u/0"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/maisha850"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/maishatasnimkhan/"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
