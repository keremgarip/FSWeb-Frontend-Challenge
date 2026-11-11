
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
    const { data } = useLanguage();
    const { footer, contact } = data;

    return (
        <footer
            id="contact"
            className="mt-16 bg-[#F9F9F9]"
        >
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="flex flex-col justify-between gap-10 md:flex-row">

                    <div>
                        <h2 className="max-w-sm text-3xl font-bold leading-tight text-[#252B42]">
                            {footer.title}
                        </h2>

                        {contact.email && (
                            <a href={`mailto:${contact.email}`}
                                className="mt-5 inline-block text-sm font-medium text-[#4731D3] underline underline-offset-4">
                                {contact.email}
                            </a>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        {contact.github && (
                            <a
                                href={contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-[#4731D3] hover:underline"
                            >
                                <FaGithub size={18} />
                                {footer.githubLabel}
                            </a>
                        )}

                        {contact.linkedin && (
                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-[#4731D3] hover:underline"
                            >
                                <FaLinkedinIn size={18} />
                                {footer.linkedinLabel}
                            </a>
                        )}


                        {contact.email && (
                            <a
                                href={`mailto:${contact.email}`}
                                className="text-sm text-[#4731D3] hover:underline"
                            >
                                {footer.emailLabel}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
