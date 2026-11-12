
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { data } = useLanguage();
  const { projects } = data;

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12"
    >
      <div className="mb-8 border-t border-[#E5E7EB] pt-10 dark:border-[#404040] md:mb-10">
        <h2 className="text-3xl font-bold text-[#252B42] dark:text-[#F9FAFB]">
          {projects.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            githubLabel={projects.githubLabel}
            demoLabel={projects.demoLabel}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

