// app/theme-c/page.js
const ThemeC = () => {
  const NAVY = "#0B1C2C", NAVY2 = "#0E2238", NAVY3 = "#132B47";
  const CREAM = "#F8F3E8", CREAM2 = "#EFE8D6";
  const GOLD = "linear-gradient(135deg, #E6C766 0%, #D4AF37 50%, #C9A227 100%)";
  const GOLD_SOLID = "#D4AF37";

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: NAVY, minHeight: "100vh" }}>
      {/* Navbar */}
      <div style={{ background: "rgba(11,28,44,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(212,175,55,0.15)", padding: "16px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: NAVY, fontSize: 15, fontFamily: "Playfair Display" }}>TK</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, background: GOLD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Tofabza</div>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#888", textTransform: "uppercase" }}>Digital Solutions</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 32, color: "rgba(248,243,232,0.8)", fontSize: 13 }}>
          <span>Home</span><span>Services</span><span>Plans</span><span>Contact</span>
        </div>
        <div style={{ background: GOLD, color: NAVY, padding: "9px 18px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>Book a Call</div>
      </div>

      {/* HERO — Navy */}
      <div style={{ background: `radial-gradient(ellipse at top, ${NAVY2} 0%, ${NAVY} 60%, #08151F 100%)`, padding: "80px 60px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(212,175,55,0.1)", filter: "blur(120px)" }} />
        <div style={{ position: "relative", maxWidth: 1100 }}>
          <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 999, border: `1px solid rgba(212,175,55,0.35)`, color: GOLD_SOLID, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24, fontWeight: 600 }}>✦ Premium Digital Partner</div>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 64, lineHeight: 1.05, color: CREAM, marginBottom: 20, fontWeight: 600, margin: 0 }}>
            Helping businesses<br />
            <span style={{ background: GOLD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>grow online</span> with<br />
            clarity &amp; consistency.
          </h1>
          <p style={{ color: "rgba(248,243,232,0.7)", fontSize: 17, lineHeight: 1.6, maxWidth: 560, marginTop: 24, marginBottom: 36 }}>
            Strategy, content, and automation systems crafted for ambitious brands.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ background: GOLD, color: NAVY, padding: "14px 26px", borderRadius: 10, fontSize: 14, fontWeight: 700, boxShadow: "0 0 40px rgba(212,175,55,0.25)" }}>Get Started →</div>
            <div style={{ border: `1px solid rgba(212,175,55,0.4)`, color: CREAM, padding: "14px 26px", borderRadius: 10, fontSize: 14, fontWeight: 600 }}>Book a Call</div>
          </div>
        </div>
      </div>

      {/* PRICING — Cream section */}
      <div style={{ background: CREAM, padding: "80px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 999, border: `1px solid rgba(212,175,55,0.4)`, color: GOLD_SOLID, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Pricing</div>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 48, lineHeight: 1.05, color: NAVY, fontWeight: 600, margin: 0 }}>
            Plans that <span style={{ background: GOLD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>grow with you</span>.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1200, margin: "0 auto" }}>
          {[
            { name: "Starter", price: "₹14,999", tag: "Launch with confidence", highlight: false },
            { name: "Growth", price: "₹29,999", tag: "Scale faster", highlight: true },
            { name: "Custom", price: "Let's talk", tag: "Built around your goals", highlight: false },
          ].map((p) => (
            <div key={p.name} style={{
              background: p.highlight ? `linear-gradient(180deg, rgba(212,175,55,0.15) 0%, ${CREAM2} 100%)` : CREAM2,
              border: p.highlight ? `1px solid rgba(212,175,55,0.5)` : `1px solid rgba(11,28,44,0.08)`,
              borderRadius: 16,
              padding: 28,
              position: "relative",
              boxShadow: p.highlight ? "0 0 40px rgba(212,175,55,0.2)" : "0 2px 12px rgba(11,28,44,0.05)",
            }}>
              {p.highlight && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: GOLD, color: NAVY, padding: "5px 14px", borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>✦ Most Popular</div>
              )}
              <div style={{ color: GOLD_SOLID, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>{p.name}</div>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: 38, fontWeight: 600, color: NAVY, marginBottom: 6 }}>
                {p.price}{p.price.startsWith("₹") && <span style={{ fontSize: 14, color: "#5a6a7a" }}>/mo</span>}
              </div>
              <div style={{ color: "#5a6a7a", fontSize: 13, marginBottom: 24 }}>{p.tag}</div>
              <div style={{
                background: p.highlight ? GOLD : NAVY,
                color: p.highlight ? NAVY : CREAM,
                padding: "12px 0",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                textAlign: "center",
              }}>{p.name === "Custom" ? "Build Your Plan" : "Add to Cart"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeC;
