"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: "var(--nav-h)",
        background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-[0.12em] transition-colors duration-300 hover:text-[var(--blue)]"
          style={{ color: "var(--text)" }}
        >
          BEGONE
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {["about", "work"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium tracking-[0.06em] uppercase transition-colors duration-300 hover:text-[var(--text)]"
              style={{ color: "var(--text-muted)" }}
            >
              {id}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold tracking-[0.04em] px-5 py-2.5 rounded-md border transition-all duration-300"
            style={{
              borderColor: "var(--blue)",
              color: "var(--blue)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--blue)";
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--blue)";
            }}
          >
            Let&apos;s Collab
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 w-6 rounded-sm transition-all duration-300 origin-center"
              style={{
                background: "var(--text)",
                transform:
                  menuOpen
                    ? i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : i === 1
                      ? "scaleX(0)"
                      : "translateY(-7px) rotate(-45deg)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 flex flex-col"
          style={{
            background: "rgba(8,8,16,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {["about", "work", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={close}
              className="px-8 py-4 text-base font-medium uppercase tracking-[0.06em] transition-colors"
              style={{
                color: id === "contact" ? "var(--blue)" : "var(--text)",
                borderBottom: id !== "contact" ? "1px solid var(--border)" : "none",
              }}
            >
              {id === "contact" ? "Let's Collab" : id}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
