
import { Moon, Sun } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-[#4731D3]">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <Moon size={15} />
              <span className="rounded-full bg-[#4731D3] px-2 py-1 text-white">
                <Sun size={13} />
              </span>
            </span>

            <span className="text-xs tracking-wide text-[#777777]">
              DARK MODE
            </span>
          </div>

          <span className="text-gray-300">|</span>

          <div className="text-xs tracking-wide">
            <span className="font-bold">TÜRKÇE</span>
            <span className="ml-1 text-[#777777]">
              'YE GEÇ
            </span>
          </div>
        </div>

        <nav
          className="mt-5 flex flex-wrap items-center justify-end gap-7 text-sm"
          aria-label="Main navigation"
        >
          <a
            href="#skills"
            className="text-[#6B7280] hover:text-[#4731D3]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-[#6B7280] hover:text-[#4731D3]"
          >
            Projects
          </a>

          <a
            href="#hero"
            className="rounded-md border border-[#4731D3] px-5 py-2 font-medium text-[#4731D3] hover:bg-[#F5F3FF]"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
