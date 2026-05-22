"use client";

import { useEffect, useRef } from "react";

interface WorkItem {
  tag: string;
  title: string;
  company: string;
  desc: string;
  letter: string;
  letterColor?: string;
  featured?: boolean;
  result?: string;
  chains?: string[];
}

const WORK_ITEMS: WorkItem[] = [
  {
    featured: true,
    tag: "Write-to-Earn · Week 7 Winner",
    company: "BitFi (CeDeFi)",
    title: "BitFi Write-to-Earn — Week 7 Winner",
    desc: "Won the BitFi meme & write-to-earn competition, earning 200 $BFI tokens. Created a viral CeDeFi vs DeFi meme using the classic buff Doge format — received direct recognition from @Bitfi_Org. Reward is 100% unlocked and claimable at TGE.",
    letter: "B",
    letterColor: "var(--blue)",
    result: "✓ 200 $BFI Earned · Recognition from @Bitfi_Org",
  },
  {
    tag: "Ambassador",
    company: "KRAIN AI",
    title: "KRAIN AI Ambassador",
    desc: "Brand ambassador for an AI-focused Web3 project. Drove awareness through content creation, community engagement, and Twitter/X presence to grow the project's reach.",
    letter: "K",
    letterColor: "var(--blue)",
    chains: ["AI", "Web3"],
  },
  {
    tag: "Ambassador",
    company: "Sanity United",
    title: "Sanity United Ambassador",
    desc: "Represented the project across social channels. Created educational and promotional content to onboard new community members and build brand identity.",
    letter: "S",
    letterColor: "var(--red)",
  },
  {
    tag: "Ambassador",
    company: "Idolly AI",
    title: "Idolly AI Ambassador",
    desc: "Promoted Idolly AI's offerings at the intersection of AI and Web3. Produced meme content and threads to drive organic engagement and community growth.",
    letter: "I",
    letterColor: "var(--blue)",
    chains: ["AI", "Web3"],
  },
  {
    tag: "Content Creator",
    company: "LF Wallet",
    title: "LF Wallet Content Creator",
    desc: "Produced creator content for LF Wallet's platform, communicating product value and use cases to Web3-native audiences across Twitter/X and Discord.",
    letter: "L",
    letterColor: "var(--red)",
  },
];

function CardVisual({ item }: { item: WorkItem }) {
  return (
    <div
      className="flex items-center justify-center relative overflow-hidden"
      style={{
        background: item.featured
          ? "linear-gradient(135deg, var(--bg-3) 0%, rgba(107,184,232,0.08) 100%)"
          : "var(--bg-3)",
        ...(item.featured
          ? { borderRight: "1px solid var(--border)", minHeight: 280 }
          : { aspectRatio: "16/9", borderBottom: "1px solid var(--border)" }),
      }}
    >
      <span
        className="font-bold select-none"
        style={{
          fontSize: item.featured ? "8rem" : "5rem",
          opacity: item.featured ? 0.25 : 0.18,
          color: item.letterColor ?? "var(--text-muted)",
        }}
      >
        {item.letter}
      </span>
      {item.featured && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 200, height: 200,
            background: "rgba(107,184,232,0.12)",
            filter: "blur(60px)",
          }}
        />
      )}
    </div>
  );
}

function WorkCard({ item, delay }: { item: WorkItem; delay: number }) {
  if (item.featured) {
    return (
      <div
        className="reveal work-card-grid lg:col-span-3 relative rounded-xl overflow-hidden transition-all duration-300 cursor-default"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          transitionDelay: `${delay}ms`,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(107,184,232,0.35)";
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--border)";
          el.style.transform = "none";
          el.style.boxShadow = "none";
        }}
      >
        {/* Badge */}
        <div
          className="absolute top-5 right-5 z-10 text-[0.65rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded"
          style={{ background: "var(--red)", color: "#fff" }}
        >
          Notable Win
        </div>
        <CardVisual item={item} />
        <div className="p-10 flex flex-col justify-center">
          <div
            className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-1"
            style={{ color: "var(--blue)" }}
          >
            {item.company}
          </div>
          <div
            className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            {item.tag}
          </div>
          <h3 className="font-bold text-2xl mb-4 leading-snug" style={{ color: "var(--text)" }}>
            {item.title}
          </h3>
          <p className="leading-relaxed mb-6" style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
            {item.desc}
          </p>
          {item.result && (
            <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--blue)" }}>
              {item.result}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="reveal flex flex-col rounded-xl overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(107,184,232,0.35)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "none";
        el.style.boxShadow = "none";
      }}
    >
      <CardVisual item={item} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2.5">
          <div
            className="text-[0.65rem] font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--blue)" }}
          >
            {item.company}
          </div>
          {item.chains && (
            <div className="flex gap-1">
              {item.chains.map((c) => (
                <span
                  key={c}
                  className="text-[0.6rem] font-bold tracking-[0.08em] px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(107,184,232,0.1)",
                    color: "var(--blue)",
                    border: "1px solid rgba(107,184,232,0.2)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
        <div
          className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-2"
          style={{ color: "var(--text-muted)" }}
        >
          {item.tag}
        </div>
        <h3 className="font-bold text-base leading-snug mb-2.5" style={{ color: "var(--text)" }}>
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal") ?? [];
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={ref}
      className="py-28 md:py-36"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Label */}
        <div
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          — Work
        </div>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-10 mb-16">
          <h2
            className="font-bold leading-[1.05] tracking-tighter"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
          >
            Proof of{" "}
            <span style={{ color: "var(--red)" }}>Work</span>
          </h2>
          <p
            className="max-w-sm leading-relaxed pb-2"
            style={{ color: "var(--text-muted)", fontSize: "1rem" }}
          >
            Ambassadorships. Meme wins. Content campaigns. Real projects, real results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORK_ITEMS.map((item, i) => (
            <WorkCard
              key={item.title}
              item={item}
              delay={i === 0 ? 0 : (i - 1) * 80}
            />
          ))}
        </div>
      </div>

      {/* Responsive override for featured card */}
      <style>{`
        @media (max-width: 1023px) {
          .work-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
