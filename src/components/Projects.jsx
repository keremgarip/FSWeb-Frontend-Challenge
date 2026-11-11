import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";

function Projects() {
    const {data} = useLanguage();
    const {projects} = data
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-12"
        >
            <div className="mb-10 border-t border-[#E5E7EB] pt-10">
                <h2 className="text-3xl font-bold text-[#252B42]">
                    {projects.title}
                </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
