
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
    const { data } = useLanguage();
    const [imageError, setImageError] = useState(false);

    const { hero, contact } = data;
    return (
        <section
            id="hero"
            className="mx-auto max-w-6xl px-6 pb-24 pt-10"
        >
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-[2px] w-16 bg-[#4731D3]" />

                        <span className="text-lg font-medium text-[#4731D3]">
                            {hero.greeting}
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#252B42] md:text-5xl">
                        {hero.title}
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-7 text-[#6B7280]">
                        {hero.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="rounded-md bg-[#3730A3] px-6 py-3 font-medium text-white transition-colors hover:bg-[#312E81]"
                        >
                            {hero.hireMe}
                        </a>

                        {contact.github && (
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md border border-[#3730A3] px-4 py-3 font-medium text-[#3730A3] hover:bg-[#F5F3FF]"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>
                        )}

                        {contact.linkedin && (
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md border border-[#3730A3] px-4 py-3 font-medium text-[#3730A3] hover:bg-[#F5F3FF]"
                            >
                                <FaLinkedinIn size={18} />
                                LinkedIn
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="flex h-72 w-full max-w-md items-center justify-center overflow-hidden rounded-xl bg-[#F3F4F6] shadow-md md:h-80">
                        {imageError ? (
                            <span className="text-6xl font-bold text-[#4731D3]">
                                KG
                            </span>
                        ) : (
                            <img
                                src="/images/profile/profile.jpg"
                                alt="Personal profile portrait"
                                className="h-full w-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
