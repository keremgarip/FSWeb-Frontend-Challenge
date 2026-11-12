import { useState } from "react";

function ProjectCard({ project, githubLabel, demoLabel }) {

    const [imageError, setImageError] = useState(false);

    const showImage = Boolean(project.image) ?? !imageError;
    return (
        <article className="flex h-full flex-col">

            <div className="mb-5 flex h-44 items-center justify-center overflow-hidden rounded-md bg-[#F3F4F6] dark:bg-[#242424]">
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
                    <span className="text-sm text-[#6B7280] dark:text-[#D1D5DB]">
                        Project Preview
                    </span>
                )}
            </div>


            <h3 className="mb-3 text-xl font-semibold text-[#4731D3] dark:text-[#A78BFA]">
                {project.title}
            </h3>

            <p className="mb-5 flex-grow text-sm leading-6 text-[#6B7280] dark:text-[#D1D5DB]">
                {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md border border-[#E5E7EB] px-3 py-1 text-xs font-medium text-[#4731D3] dark:border-[#404040] dark:text-[#A78BFA]"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div className="flex gap-6 text-sm font-medium text-[#4731D3] dark:text-[#A78BFA]">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[#312E81] dark:hover:text-[#C4B5FD]"
                    >
                        {githubLabel}
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[#312E81] dark:hover:text-[#C4B5FD]"
                    >
                        {demoLabel}
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
