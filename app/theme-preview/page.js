// app/theme-preview/page.js
const THEMES = [
  {
    name: "Option A — Deep Black + Electric Gold",
    bg: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #141414 100%)",
    cardBg: "rgba(20,20,20,0.7)",
    border: "rgba(255,215,0,0.35)",
    glow: "0 0 60px rgba(255,215,0,0.2)",
    accent: "linear-gradient(135deg, #FFE55C 0%, #FFD700 50%, #F5C400 100%)",
    accentSolid: "#FFD700",
    text: "#FFFFFF",
    muted: "#a0a0a0",
    vibe: "Modern · Edgy · Tech-forward",
  },
  {
    name: "Option B — Charcoal + Warm Copper",
    bg: "linear-gradient(135deg, #1A1A1A 0%, #252220 50%, #2D2622 100%)",
    cardBg: "rgba(40,35,30,0.7)",
    border: "rgba(184,115,51,0.35)",
    glow: "0 0 60px rgba(184,115,51,0.2)",
    accent: "linear-gradient(135deg, #D89968 0%, #B87333 50%, #8B5A2B 100%)",
    accentSolid: "#B87333",
    text: "#F5EFE6",
    muted: "#a89c8c",
    vibe: "Premium · Warm · Refined",
  },
  {
    name: "Option C — Navy + Cream + Gold",
    bg: "linear-gradient(135deg, #0B1C2C 0%, #0E2238 60%, #132B47 100%)",
    cardBg: "rgba(248,243,232,0.96)",
    border: "rgba(212,175,55,0.5)",
    glow: "0 0 60px rgba(212,175,55,0.15)",
    accent: "linear-gradient(135deg, #E6C766 0%, #D4AF37 50%, #C9A227 100%)",
    accentSolid: "#D4AF37",
    text: "#0B1C2C",
    muted: "#5a6a7a",
    vibe: "Spacious · Elegant · Approachable",
    cream: true,
  },
];

const ThemePreview = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#08151F", padding: "60px 20px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 1800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50, color: "#fff" }}>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 42, marginBottom: 8 }}>
            Tofabza — Theme Comparison
          </h1>
          <p style={{ color: "#888" }}>Three alternative palettes side-by-side</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {THEMES.map((t) => (
            <div key={t.name} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ color: "#FFD700", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
                {t.name}
              </div>
              <div style={{ color: "#888", fontSize: 12, marginBottom: 4 }}>{t.vibe}</div>

              {/* Mock website hero card */}
              <div
                style={{
                  background: t.bg,
                  borderRadius: 16,
                  padding: 36,
                  minHeight: 520,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Glow orb */}
                <div
                  style={{
                    position: "absolute",
                    top: -100,
                    left: -100,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: t.accent,
                    opacity: 0.15,
                    filter: "blur(80px)",
                  }}
                />

                {/* Mock navbar */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: t.accent, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: t.cream ? "#0B1C2C" : "#000", fontSize: 14, fontFamily: "Playfair Display" }}>
                      TK
                    </div>
                    <div style={{ color: t.text, fontSize: 13, fontWeight: 600 }}>Tofabza</div>
                  </div>
                  <div style={{ background: t.accent, color: t.cream ? "#0B1C2C" : "#000", padding: "8px 16px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>
                    Book a Call
                  </div>
                </div>

                {/* Hero badge */}
                <div style={{ display: "inline-block", padding: "5px 12px", borderRadius: 999, border: `1px solid ${t.border}`, color: t.accentSolid, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>
                  ✦ Premium Digital Partner
                </div>

                {/* Hero headline */}
                <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 34, lineHeight: 1.1, color: t.text, marginBottom: 16, fontWeight: 600 }}>
                  Helping businesses{" "}
                  <span
                    style={{
                      background: t.accent,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    grow online
                  </span>{" "}
                  with clarity.
                </h2>

                <p style={{ color: t.muted, fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>
                  Strategy, content & automation crafted for ambitious brands.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", gap: 10, marginBottom: 30 }}>
                  <div style={{ background: t.accent, color: t.cream ? "#0B1C2C" : "#000", padding: "10px 20px", borderRadius: 8, fontSize: 12, fontWeight: 700, boxShadow: t.glow }}>
                    Get Started →
                  </div>
                  <div style={{ border: `1px solid ${t.border}`, color: t.text, padding: "10px 20px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>
                    Book a Call
                  </div>
                </div>

                {/* Mini pricing card */}
                <div style={{ background: t.cardBg, border: `1px solid ${t.border}`, borderRadius: 12, padding: 18, backdropFilter: "blur(10px)" }}>
                  <div style={{ color: t.accentSolid, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>
                    Growth Plan
                  </div>
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: 28,
                      fontWeight: 600,
                      background: t.accent,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: 4,
                    }}
                  >
                    ₹29,999<span style={{ fontSize: 13, color: t.muted, WebkitTextFillColor: t.muted }}>/mo</span>
                  </div>
                  <div style={{ color: t.muted, fontSize: 11 }}>Full-stack growth engine</div>
                </div>
              </div>

              {/* Color swatches */}
              <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                <div style={{ flex: 1, height: 24, borderRadius: 4, background: t.bg }} />
                <div style={{ flex: 1, height: 24, borderRadius: 4, background: t.accent }} />
                <div style={{ flex: 1, height: 24, borderRadius: 4, background: t.cardBg, border: "1px solid rgba(255,255,255,0.1)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemePreview;
