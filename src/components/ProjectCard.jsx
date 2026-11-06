
function ProjectCard({ project }) {
    return (
        <article className="flex h-full flex-col">

            <div className="mb-5 flex h-44 items-center justify-center overflow-hidden rounded-md bg-[#F3F4F6]">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                            event.currentTarget.style.display = "none";
                        }}
                    />
                ) : (
                    <span className="text-sm text-[#6B7280]">
                        Project Preview
                    </span>
                )}
            </div>


            <h3 className="mb-3 text-xl font-semibold text-[#4731D3]">
                {project.title}
            </h3>

            <p className="mb-5 flex-grow text-sm leading-6 text-[#6B7280]">
                {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md border border-[#E5E7EB] px-3 py-1 text-xs font-medium text-[#4731D3]"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div className="flex gap-6 text-sm font-medium text-[#4731D3]">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[#312E81]"
                    >
                        GitHub
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[#312E81]"
                    >
                        View Site
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
