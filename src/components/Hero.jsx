
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
            className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-10"
        >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

                <div className="min-w-0">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-[2px] w-10 shrink-0 bg-[#4731D3] dark:bg-[#A78BFA] sm:w-16" />

                        <span className="text-base font-medium text-[#4731D3] dark:text-[#A78BFA] sm:text-lg">
                            {hero.greeting}
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#252B42] dark:text-[#F9FAFB] sm:text-4xl lg:text-5xl">
                        {hero.title}
                    </h1>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B7280] dark:text-[#D1D5DB] sm:mt-6 sm:text-base">
                        {hero.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                        <a
                            href="#contact"
                            className="rounded-md bg-[#3730A3] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#312E81] dark:bg-[#A78BFA] dark:text-[#171717] dark:hover:bg-[#C4B5FD] sm:px-6 sm:text-base"
                        >
                            {hero.hireMe}
                        </a>

                        {contact.github && (
                            <a
                                href={contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md border border-[#3730A3] px-4 py-3 text-sm font-medium text-[#3730A3] hover:bg-[#F5F3FF] dark:border-[#A78BFA] dark:text-[#A78BFA] dark:hover:bg-[#242424] sm:text-base"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>
                        )}

                        {contact.linkedin && (
                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md border border-[#3730A3] px-4 py-3 text-sm font-medium text-[#3730A3] hover:bg-[#F5F3FF] dark:border-[#A78BFA] dark:text-[#A78BFA] dark:hover:bg-[#242424] sm:text-base"
                            >
                                <FaLinkedinIn size={18} />
                                LinkedIn
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex min-w-0 justify-center lg:justify-end">
                    <div className="flex h-64 w-full max-w-md items-center justify-center overflow-hidden rounded-xl bg-[#F3F4F6] shadow-md dark:bg-[#242424] dark:shadow-black/30 sm:h-80">
                        {imageError ? (
                            <span className="text-6xl font-bold text-[#4731D3] dark:text-[#A78BFA]">
                                KG
                            </span>
                        ) : (
                            <img
                                src="/images/profile/profile.jpeg"
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


