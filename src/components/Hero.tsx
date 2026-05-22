"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "calc(var(--nav-h) + 60px)", paddingBottom: "80px" }}
    >
      {/* Grid background */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />

      {/* Glow orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          background: "rgba(107,184,232,0.10)",
          filter: "blur(130px)",
          top: -120, left: -80,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          background: "rgba(224,48,48,0.09)",
          filter: "blur(120px)",
          bottom: 0, right: -60,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden"
            style={{
              border: "3px solid rgba(107,184,232,0.5)",
              boxShadow: "0 0 40px rgba(107,184,232,0.25), 0 0 80px rgba(107,184,232,0.1)",
            }}
          >
            <Image
              src="/begone.jpg"
              alt="BEGONE avatar"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Handle pill */}
        <div
          className="inline-block mb-7 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
          style={{
            color: "var(--blue)",
            border: "1px solid rgba(107,184,232,0.3)",
            backdropFilter: "blur(8px)",
          }}
        >
          @ademolabegone
        </div>

        {/* Name */}
        <h1
          className="gradient-text font-bold leading-none tracking-tighter mb-7"
          style={{ fontSize: "clamp(5rem, 18vw, 14rem)" }}
        >
          BEGONE
        </h1>

        {/* Role */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-5 font-medium tracking-wide"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "var(--text-muted)" }}
        >
          <span>Web3 Content Creator</span>
          <span style={{ color: "var(--red)", fontSize: "1.2em" }}>&amp;</span>
          <span>Meme Architect</span>
        </div>

        {/* Sub */}
        <p
          className="mb-11 leading-relaxed"
          style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}
        >
          Building culture. Driving communities.{" "}
          <span className="hidden sm:inline"><br /></span>
          Making noise in crypto since day one.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-[0.95rem] tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--blue)",
              color: "#000",
              boxShadow: "0 4px 0 rgba(107,184,232,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#89caef";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(107,184,232,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--blue)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 0 rgba(107,184,232,0.2)";
            }}
          >
            Let&apos;s Collab →
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-[0.95rem] tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: "var(--text)",
              border: "1px solid rgba(240,237,232,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)";
              (e.currentTarget as HTMLElement).style.color = "var(--blue)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.2)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
          >
            See the Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5">
        <span
          className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <div
          className="w-px"
          style={{
            height: 40,
            background: "linear-gradient(to bottom, var(--blue), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
