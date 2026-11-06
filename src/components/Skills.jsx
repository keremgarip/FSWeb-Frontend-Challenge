
const skills = [
    {
        name: "C# & .NET",
        description:
            "Building RESTful APIs and backend applications with C#, ASP.NET Core, and object-oriented programming.",
    },
    {
        name: "React.js",
        description:
            "Developing responsive and interactive web interfaces using React, JavaScript, and Tailwind CSS.",
    },
    {
        name: "SQL & Databases",
        description:
            "Designing relational databases and working with SQL Server, PostgreSQL, and Entity Framework Core.",
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-6xl px-6 py-12"
        >
            <h2 className="mb-7 text-3xl font-bold text-[#252B42]">
                Skills
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <h3 className="mb-3 text-xl font-semibold text-[#4731D3]">
                            {skill.name}
                        </h3>

                        <p className="text-sm leading-6 text-[#6B7280]">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
