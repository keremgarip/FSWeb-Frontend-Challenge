
import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { data } = useLanguage();
  const { skills } = data;

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12"
    >
      <h2 className="mb-7 text-3xl font-bold text-[#252B42] dark:text-[#F9FAFB]">
        {skills.title}
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.items.map((skill) => (
          <div key={skill.name} className="min-w-0">
            <h3 className="mb-3 text-xl font-semibold text-[#4731D3] dark:text-[#A78BFA]">
              {skill.name}
            </h3>

            <p className="text-sm leading-6 text-[#6B7280] dark:text-[#D1D5DB]">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;




