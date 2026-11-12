
import { useLanguage } from "../context/LanguageContext";

function Profile() {
  const { data } = useLanguage();
  const { profile } = data;

  return (
    <section
      id="profile"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12"
    >
      <h2 className="mb-8 text-3xl font-bold text-[#252B42] dark:text-[#F9FAFB]">
        {profile.title}
      </h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <h3 className="mb-5 text-xl font-semibold text-[#4731D3] dark:text-[#A78BFA]">
            {profile.informationTitle}
          </h3>

          <dl className="space-y-4 text-sm">
            {profile.information.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-4"
              >
                <dt className="font-semibold text-[#252B42] dark:text-[#F9FAFB]">
                  {item.label}
                </dt>

                <dd className="min-w-0 break-words text-[#6B7280] dark:text-[#D1D5DB]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-w-0">
          <h3 className="mb-5 text-xl font-semibold text-[#4731D3] dark:text-[#A78BFA]">
            {profile.aboutTitle}
          </h3>

          <div className="space-y-4 text-sm leading-7 text-[#6B7280] dark:text-[#D1D5DB]">
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;


