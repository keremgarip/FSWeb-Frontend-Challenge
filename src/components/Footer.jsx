
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { data } = useLanguage();
  const { footer, contact } = data;

  return (
    <footer
      id="contact"
      className="mt-12 bg-[#F9F9F9] dark:bg-[#242424] md:mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-10">
          {/* Contact */}
          <div className="min-w-0">
            <h2 className="max-w-sm text-2xl font-bold leading-tight text-[#252B42] dark:text-[#F9FAFB] sm:text-3xl">
              {footer.title}
            </h2>

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="mt-5 inline-block break-all text-sm font-medium text-[#4731D3] underline underline-offset-4 dark:text-[#A78BFA]"
              >
                {contact.email}
              </a>
            )}
          </div>

          {/* Social media */}
          <div className="flex shrink-0 flex-col gap-4">
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#4731D3] hover:underline dark:text-[#A78BFA]"
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
                className="flex items-center gap-2 text-sm text-[#4731D3] hover:underline dark:text-[#A78BFA]"
              >
                <FaLinkedinIn size={18} />
                {footer.linkedinLabel}
              </a>
            )}

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-[#4731D3] hover:underline dark:text-[#A78BFA]"
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

