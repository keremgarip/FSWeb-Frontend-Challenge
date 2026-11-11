
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { language, data, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-[#4731D3]">

          {/* Theme switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            aria-pressed={isDark}
            className="flex items-center gap-2"
          >
            <span className="flex items-center gap-1">
              <Moon size={15} />

              <span className="rounded-full bg-[#4731D3] px-2 py-1 text-white">
                <Sun size={13} />
              </span>
            </span>

            <span className="text-xs tracking-wide text-[#777777]">
              {isDark
                ? data.header.lightMode
                : data.header.darkMode}
            </span>
          </button>

          <span className="text-gray-300">|</span>

          {/* Language switch */}
          <button
            type="button"
            onClick={changeLanguage}
            className="text-xs font-medium tracking-wide text-[#4731D3] hover:underline"
            aria-label={
              language === "en"
                ? "Switch to Turkish"
                : "İngilizceye geç"
            }
          >
            {data.header.changeLanguage}
          </button>
        </div>

        <nav
          className="mt-5 flex flex-wrap items-center justify-end gap-7 text-sm"
          aria-label="Main navigation"
        >
          <a
            href="#skills"
            className="text-[#6B7280] hover:text-[#4731D3]"
          >
            {data.header.skills}
          </a>

          <a
            href="#projects"
            className="text-[#6B7280] hover:text-[#4731D3]"
          >
            {data.header.projects}
          </a>

          <a
            href="#contact"
            className="rounded-md border border-[#4731D3] px-5 py-2 font-medium text-[#4731D3] hover:bg-[#F5F3FF]"
          >
            {data.header.hireMe}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

