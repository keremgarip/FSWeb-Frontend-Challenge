
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "E-Commerce Web Application",
        description:
            "A responsive e-commerce application built with React, Redux, and Tailwind CSS. Includes product listings, category filtering, authentication, and shopping features.",
        image: "/images/projects/ecommerce.png",
        technologies: [
            "React",
            "Redux",
            "Tailwind CSS",
            "Axios",
        ],
        github: "",
        demo: "",
    },
    {
        id: 2,
        title: "SupportFlow Ticket Management",
        description:
            "A backend ticket management system developed with ASP.NET Core and PostgreSQL. Features JWT authentication, role-based authorization, ticket assignments, and messaging.",
        image: "/images/projects/supportflow.png",
        technologies: [
            "C#",
            ".NET 8",
            "PostgreSQL",
            "JWT",
        ],
        github: "",
        demo: "",
    },
    {
        id: 3,
        title: "Personal Portfolio",
        description:
            "A personal portfolio website developed with React and Tailwind CSS, featuring responsive layouts, multilingual content, and customizable themes.",
        image: "/images/projects/portfolio.png",
        technologies: [
            "React",
            "Tailwind CSS",
            "Context API",
        ],
        github: "",
        demo: "",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-12"
        >
            <div className="mb-10 border-t border-[#E5E7EB] pt-10">
                <h2 className="text-3xl font-bold text-[#252B42]">
                    Projects
                </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
