"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const TAGS = [
  "Meme Creation",
  "Twitter/X Threads",
  "Web3 Copywriting",
  "AI Content",
  "Medium Articles",
  "Community Building",
  "Discord / Telegram",
  "Canva / Design",
  "SocialFi Platforms",
  "DeFi / CeDeFi",
];

const CHAINS = ["ETH", "SOL", "BNB", "TRON", "BASE"];

const STATS = [
  { num: "1K+", label: "X Followers" },
  { num: "4+", label: "Projects" },
  { num: "2021", label: "Web3 Since" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal") ?? [];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
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
          — About
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Left: sticky */}
          <div className="reveal lg:sticky" style={{ top: "calc(var(--nav-h) + 32px)" }}>
            {/* Avatar */}
            <div className="mb-8">
              <div
                className="relative w-24 h-24 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(107,184,232,0.4)",
                  boxShadow: "0 0 32px rgba(107,184,232,0.2)",
                }}
              >
                <Image
                  src="/begone.jpg"
                  alt="BEGONE"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <h2
              className="font-bold leading-[1.05] tracking-tighter mb-10"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
            >
              The Voice<br />Behind the<br />
              <span style={{ color: "var(--blue)" }}>Culture</span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="font-bold text-2xl mb-0.5"
                    style={{ color: "var(--blue)" }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-[0.72rem] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Chains */}
            <div className="flex flex-wrap gap-2">
              {CHAINS.map((c) => (
                <span
                  key={c}
                  className="text-[0.65rem] font-bold tracking-[0.1em] px-2.5 py-1 rounded-md"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {[
              "Web3 native content creator, meme architect & community builder. Active since 2021 — survived the bear, returned stronger for SocialFi. Creating culture, not just content.",
              "The approach is simple: understand the protocol, feel the community, then create content that spreads. Not because it's paid for — because it's real.",
              "From ambassador roles at KRAIN AI, Sanity United, and Idolly AI, to winning BitFi's Write-to-Earn program — every project gets sharp content, native energy, and results.",
            ].map((text, i) => (
              <p
                key={i}
                className="reveal mb-5 leading-[1.8]"
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-muted)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {text}
              </p>
            ))}

            {/* Notable Win card */}
            <div
              className="reveal flex gap-5 items-start rounded-xl p-6 mb-10 transition-all duration-300 cursor-default"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(107,184,232,0.2)",
                transitionDelay: "240ms",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--blue)";
                el.style.boxShadow = "0 0 32px rgba(107,184,232,0.10)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(107,184,232,0.2)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center font-bold text-lg"
                style={{ background: "var(--blue)", color: "#000" }}
              >
                W
              </div>
              <div>
                <div
                  className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: "var(--blue)" }}
                >
                  Notable Win
                </div>
                <div className="font-bold mb-1.5" style={{ color: "var(--text)" }}>
                  BitFi Write-to-Earn — Week 7 Winner
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Won the BitFi meme & write-to-earn competition, earning 200 $BFI tokens. Viral CeDeFi vs DeFi meme — recognized directly by @Bitfi_Org. 100% unlocked at TGE.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="reveal flex flex-wrap gap-2.5" style={{ transitionDelay: "320ms" }}>
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full cursor-default transition-all duration-300"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--blue)";
                    el.style.color = "var(--blue)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-muted)";
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
