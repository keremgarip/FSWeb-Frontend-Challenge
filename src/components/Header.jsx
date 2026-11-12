
import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { language, data, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white dark:bg-[#171717]">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            aria-pressed={isDark}
            className="flex items-center gap-2 text-[#4731D3] dark:text-[#A78BFA]"
          >
            <Moon size={15} />

            <span className="rounded-full bg-[#4731D3] px-2 py-1 text-white dark:bg-[#A78BFA] dark:text-[#171717]">
              <Sun size={13} />
            </span>

            <span className="hidden text-xs tracking-wide text-[#777777] dark:text-[#D1D5DB] sm:inline">
              {isDark
                ? data.header.lightMode
                : data.header.darkMode}
            </span>
          </button>

          <span className="text-gray-300 dark:text-[#6B7280]">
            |
          </span>

          <button
            type="button"
            onClick={changeLanguage}
            className="text-xs font-medium tracking-wide text-[#4731D3] hover:underline dark:text-[#A78BFA]"
          >
            {data.header.changeLanguage}
          </button>
        </div>

        {/* Mobile navigation toggle */}
        <div className="mt-5 flex justify-end md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-md border border-[#4731D3] p-2 text-[#4731D3] dark:border-[#A78BFA] dark:text-[#A78BFA]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav
          className="mt-5 hidden items-center justify-end gap-7 text-sm md:flex"
          aria-label="Desktop navigation"
        >
          <a
            href="#skills"
            className="text-[#6B7280] hover:text-[#4731D3] dark:text-[#D1D5DB] dark:hover:text-[#A78BFA]"
          >
            {data.header.skills}
          </a>

          <a
            href="#projects"
            className="text-[#6B7280] hover:text-[#4731D3] dark:text-[#D1D5DB] dark:hover:text-[#A78BFA]"
          >
            {data.header.projects}
          </a>

          <a
            href="#contact"
            className="rounded-md border border-[#4731D3] px-5 py-2 font-medium text-[#4731D3] hover:bg-[#F5F3FF] dark:border-[#A78BFA] dark:text-[#A78BFA] dark:hover:bg-[#242424]"
          >
            {data.header.hireMe}
          </a>
        </nav>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mt-4 flex flex-col gap-4 rounded-lg border border-[#E5E7EB] p-4 text-sm dark:border-[#404040] md:hidden"
            aria-label="Mobile navigation"
          >
            <a
              href="#skills"
              onClick={closeMenu}
              className="text-[#6B7280] dark:text-[#D1D5DB]"
            >
              {data.header.skills}
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-[#6B7280] dark:text-[#D1D5DB]"
            >
              {data.header.projects}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-medium text-[#4731D3] dark:text-[#A78BFA]"
            >
              {data.header.hireMe}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

