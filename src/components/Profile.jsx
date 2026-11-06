function Profile() {
    return (
        <section
            id="profile"
            className="mx-auto max-w-6xl px-6 py-12"
        >
            <h2 className="mb-8 text-3xl font-bold text-[#252B42]">
                Profile
            </h2>

            <div className="grid gap-10 md:grid-cols-2">

                <div>
                    <h3 className="mb-5 text-xl font-semibold text-[#4731D3]">
                        Profile
                    </h3>

                    <dl className="space-y-4 text-sm">
                        <div className="grid grid-cols-[130px_1fr] gap-4">
                            <dt className="font-semibold text-[#252B42]">
                                Location
                            </dt>
                            <dd className="text-[#6B7280]">
                                Istanbul, Türkiye
                            </dd>
                        </div>

                        <div className="grid grid-cols-[130px_1fr] gap-4">
                            <dt className="font-semibold text-[#252B42]">
                                Education
                            </dt>
                            <dd className="text-[#6B7280]">
                                MSc Information Technology
                            </dd>
                        </div>

                        <div className="grid grid-cols-[130px_1fr] gap-4">
                            <dt className="font-semibold text-[#252B42]">
                                University
                            </dt>
                            <dd className="text-[#6B7280]">
                                UWE Bristol
                            </dd>
                        </div>

                        <div className="grid grid-cols-[130px_1fr] gap-4">
                            <dt className="font-semibold text-[#252B42]">
                                Focus
                            </dt>
                            <dd className="text-[#6B7280]">
                                Backend Development
                            </dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <h3 className="mb-5 text-xl font-semibold text-[#4731D3]">
                        About Me
                    </h3>

                    <div className="space-y-4 text-sm leading-7 text-[#6B7280]">
                        <p>
                            I'm a software developer with a background
                            in Software Engineering and a Master's
                            degree in Information Technology from
                            UWE Bristol.
                        </p>

                        <p>
                            I have professional experience in
                            developing reporting solutions and
                            business applications. My primary
                            interests include backend development,
                            RESTful APIs, and database-driven systems.
                        </p>

                        <p>
                            I also enjoy exploring frontend
                            technologies and building full-stack
                            applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
