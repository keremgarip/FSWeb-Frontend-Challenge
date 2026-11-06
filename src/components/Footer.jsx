
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer
            id="contact"
            className="mt-16 bg-[#F9F9F9]"
        >
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="flex flex-col justify-between gap-10 md:flex-row">

                    <div>
                        <h2 className="max-w-sm text-3xl font-bold leading-tight text-[#252B42]">
                            Let's work together on your next product.
                        </h2>

                        <a
                            href="mailto:hello@example.com"
                            className="mt-5 inline-block text-sm font-medium text-[#4731D3] underline underline-offset-4"
                        >
                            hello@example.com
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-[#4731D3] hover:underline"
                        >
                            <FaGithub size={18} />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-[#4731D3] hover:underline"
                        >
                            <FaLinkedinIn size={18} />
                            LinkedIn
                        </a>

                        <a
                            href="mailto:hello@example.com"
                            className="text-sm text-[#4731D3] hover:underline"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
