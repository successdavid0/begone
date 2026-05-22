export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-lg font-bold tracking-[0.1em]">BEGONE</div>
          <div className="text-sm order-last sm:order-none" style={{ color: "var(--text-muted)" }}>
            © 2026 @ademolabegone — Web3 Content Creator &amp; Meme Architect
          </div>
          <a
            href="https://twitter.com/ademolabegone"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl transition-colors duration-300 hover:text-[var(--blue)]"
            style={{ color: "var(--text-muted)" }}
            aria-label="Twitter / X"
          >
            𝕏
          </a>
        </div>
      </div>
    </footer>
  );
}
