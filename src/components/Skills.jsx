
import { useLanguage } from "../context/LanguageContext";

function Skills() {
    const { data, language } = useLanguage();

    const skills = data.skills;

    const skillItems = Array.isArray(skills?.items)
        ? skills.items
        : [];


    return (
        <section
            id="skills"
            className="mx-auto max-w-6xl px-6 py-12"
        >
            <h2 className="mb-7 text-3xl font-bold text-[#252B42]">
                {skills?.title}
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
                {skills.items.map((skill, index) => (
                    <div key={index}>
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


