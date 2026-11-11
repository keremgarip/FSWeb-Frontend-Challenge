import { useLanguage } from "../context/LanguageContext";

function Profile() {
    const { data } = useLanguage();
    const { profile } = data;

    return (
        <section
            id="profile"
            className="mx-auto max-w-6xl px-6 py-12"
        >
            <h2 className="mb-8 text-3xl font-bold text-[#252B42]">
                {profile.title}
            </h2>

            <div className="grid gap-10 md:grid-cols-2">

                <div>
                    <h3 className="mb-5 text-xl font-semibold text-[#4731D3]">
                        {profile.informationTitle}
                    </h3>

                    <dl className="space-y-4 text-sm">
                        {profile.information.map((item) => (
                            <div
                                key={item.label}
                                className="grid grid-cols-[130px_1fr] gap-4"
                            >
                                <dt className="font-semibold text-[#252B42]">
                                    {item.label}
                                </dt>

                                <dd className="text-[#6B7280]">
                                    {item.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div>
                    <h3 className="mb-5 text-xl font-semibold text-[#4731D3]">
                        {profile.aboutTitle}
                    </h3>

                    <div className="space-y-4 text-sm leading-7 text-[#6B7280]">
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
