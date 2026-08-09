import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-black tracking-[-0.04em] text-slate-950">ORIVEX<span className="text-indigo-600">.</span></a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                  {label}
                </a>
              ))}
            </div>

            <a href="#contact" className="hidden rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700 md:inline-flex">
              Let's Talk
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl p-2 text-slate-700 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="mt-4 border-t border-slate-200 pt-3 md:hidden">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;