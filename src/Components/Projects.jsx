
import projects from "../Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0f14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Projects that make an{" "}
          <span className="text-teal-400">impact</span>
        </h2>

        <p className="text-gray-400 text-center max-w-xl mx-auto mt-4">
          A selection of projects that showcase my skills in frontend
          development and UI design.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
