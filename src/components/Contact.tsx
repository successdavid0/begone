"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

const HANDLES = [
  {
    icon: "𝕏",
    platform: "Twitter / X",
    value: "@ademolabegone",
    href: "https://twitter.com/ademolabegone",
    iconColor: "var(--blue)",
  },
  {
    icon: "#",
    platform: "Discord",
    value: "BEGONE",
    href: null,
    iconColor: "#5865F2",
  },
  {
    icon: "@",
    platform: "Email",
    value: "Drop a line",
    href: "mailto:successdavidpraise99@gmail.com",
    iconColor: "var(--red)",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal") ?? [];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 md:py-36"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Label */}
        <div
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          — Contact
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <h2
              className="reveal font-bold leading-[1.05] tracking-tighter mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
            >
              Ready to<br />Build<br />
              <span style={{ color: "var(--blue)" }}>Something?</span>
            </h2>
            <p
              className="reveal leading-[1.8] mb-12 max-w-md"
              style={{ fontSize: "1.05rem", color: "var(--text-muted)", transitionDelay: "80ms" }}
            >
              Ambassador deals. Content campaigns. Meme strategy. If you&apos;re building in Web3 and need a voice — let&apos;s talk.
            </p>

            {/* Handles */}
            <div className="reveal flex flex-col gap-4" style={{ transitionDelay: "160ms" }}>
              {HANDLES.map((h) => {
                const inner = (
                  <div
                    className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0"
                      style={{ background: "var(--bg-3)", color: h.iconColor }}
                    >
                      {h.icon}
                    </div>
                    <div className="flex-1">
                      <div
                        className="text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {h.platform}
                      </div>
                      <div className="font-semibold text-[0.95rem]" style={{ color: "var(--text)" }}>
                        {h.value}
                      </div>
                    </div>
                    {h.href && (
                      <span style={{ color: "var(--text-muted)" }}>→</span>
                    )}
                  </div>
                );

                return h.href ? (
                  <a
                    key={h.platform}
                    href={h.href}
                    target={h.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block transition-transform duration-200 hover:translate-x-1"
                    onMouseEnter={(e) => {
                      const card = e.currentTarget.querySelector("div") as HTMLElement;
                      if (card) card.style.borderColor = "var(--blue)";
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget.querySelector("div") as HTMLElement;
                      if (card) card.style.borderColor = "var(--border)";
                    }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={h.platform}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center rounded-xl p-12"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(107,184,232,0.3)",
                  minHeight: 400,
                }}
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: "var(--blue)" }}
                >
                  ✓
                </div>
                <h3 className="font-bold text-xl mb-2">Message sent.</h3>
                <p style={{ color: "var(--text-muted)" }}>
                  BEGONE will hit you back.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.id}
                      className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full rounded-lg px-4 py-3.5 text-[0.95rem] outline-none transition-all duration-300"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--blue)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(107,184,232,0.12)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me what you're building..."
                    required
                    rows={6}
                    className="w-full rounded-lg px-4 py-3.5 text-[0.95rem] outline-none resize-y transition-all duration-300"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      fontFamily: "inherit",
                      minHeight: 140,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--blue)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(107,184,232,0.12)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-md font-semibold text-[0.95rem] tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--blue)", color: "#000" }}
                  onMouseEnter={(e) => {
                    if (!loading) (e.currentTarget as HTMLElement).style.background = "#89caef";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--blue)";
                  }}
                >
                  {loading ? "Sending..." : "Send It →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
