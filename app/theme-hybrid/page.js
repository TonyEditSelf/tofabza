// app/theme-hybrid/page.js
const ThemeHybrid = () => {
  const NAVY = "#0B1C2C";
  const NAVY2 = "#0E2238";
  const CREAM = "#F8F3E8";
  const CREAM2 = "#EFE8D6";
  const GOLD = "linear-gradient(135deg, #E6C766 0%, #D4AF37 50%, #C9A227 100%)";
  const GOLD_SOLID = "#D4AF37";

  const Section = ({ label, title, children, pad = 60 }) => (
    <div
      style={{
        padding: `${pad}px 60px`,
        borderTop: "1px solid rgba(212,175,55,0.1)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "5px 12px",
          borderRadius: 999,
          border: `1px solid rgba(212,175,55,0.35)`,
          color: GOLD_SOLID,
          fontSize: 10,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          marginBottom: 14,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
      <h3
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: 36,
          color: CREAM,
          fontWeight: 600,
          marginBottom: 30,
          margin: 0,
          marginTop: 0,
        }}
      >
        {title}
      </h3>
      <div style={{ marginTop: 24 }}>{children}</div>
    </div>
  );

  const CreamCard = ({ children, highlight }) => (
    <div
      style={{
        background: highlight
          ? `linear-gradient(180deg, rgba(212,175,55,0.2) 0%, ${CREAM2} 100%)`
          : CREAM2,
        border: highlight
          ? `1px solid rgba(212,175,55,0.5)`
          : "1px solid rgba(11,28,44,0.1)",
        borderRadius: 14,
        padding: 24,
        color: NAVY,
        boxShadow: highlight
          ? "0 0 40px rgba(212,175,55,0.25)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        position: "relative",
      }}
    >
      {children}
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: `radial-gradient(ellipse at top, ${NAVY2} 0%, ${NAVY} 50%, #08151F 100%)`,
        minHeight: "100vh",
      }}
    >
      <div style={{ padding: "40px 60px 20px", color: CREAM }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 999,
            background: "rgba(212,175,55,0.15)",
            border: `1px solid ${GOLD_SOLID}`,
            color: GOLD_SOLID,
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Hybrid Preview — Navy Background · Cream Cards
        </div>
      </div>

      {/* ABOUT STATS */}
      <Section label="About Us" title="Measurable growth.">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            maxWidth: 900,
          }}
        >
          {[
            { k: "50+", v: "Brands Served" },
            { k: "3x", v: "Avg. Growth" },
            { k: "98%", v: "Retention" },
          ].map((s) => (
            <CreamCard key={s.v}>
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 42,
                  fontWeight: 600,
                  background: GOLD,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.k}
              </div>
              <div style={{ fontSize: 13, color: "#5a6a7a", marginTop: 4 }}>
                {s.v}
              </div>
            </CreamCard>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section label="Testimonials" title="Trusted by ambitious brands.">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            maxWidth: 1100,
          }}
        >
          {[
            {
              q: "Tofabza transformed our online presence. Inbound leads tripled in 3 months.",
              n: "Ananya Sharma",
              r: "Founder, Lumen Co.",
            },
            {
              q: "The automation saved our team 20+ hours a week. ROI was obvious in month one.",
              n: "Rohan Mehta",
              r: "CEO, Atelier Build",
            },
          ].map((t) => (
            <CreamCard key={t.n}>
              <div
                style={{
                  fontSize: 24,
                  color: GOLD_SOLID,
                  opacity: 0.5,
                  marginBottom: 8,
                }}
              >
                ❝
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#1a2c3c",
                  marginBottom: 16,
                }}
              >
                {t.q}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: GOLD,
                    border: "2px solid rgba(212,175,55,0.5)",
                  }}
                />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>
                    {t.n}
                  </div>
                  <div style={{ fontSize: 11, color: "#5a6a7a" }}>{t.r}</div>
                </div>
              </div>
            </CreamCard>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section label="Pricing" title="Plans that grow with you.">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            maxWidth: 1100,
          }}
        >
          {[
            {
              name: "Starter",
              price: "₹14,999",
              tag: "Launch with confidence",
              highlight: false,
              cta: "Add to Cart",
            },
            {
              name: "Growth",
              price: "₹29,999",
              tag: "Scale faster",
              highlight: true,
              cta: "Add to Cart",
            },
            {
              name: "Custom",
              price: "Let's talk",
              tag: "Built around your goals",
              highlight: false,
              cta: "Build Your Plan",
            },
          ].map((p) => (
            <CreamCard key={p.name} highlight={p.highlight}>
              {p.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -11,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: GOLD,
                    color: NAVY,
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  ✦ Most Popular
                </div>
              )}
              <div
                style={{
                  color: GOLD_SOLID,
                  fontSize: 10,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 34,
                  fontWeight: 600,
                  color: NAVY,
                  marginBottom: 4,
                }}
              >
                {p.price}
                {p.price.startsWith("₹") && (
                  <span style={{ fontSize: 13, color: "#5a6a7a" }}>/mo</span>
                )}
              </div>
              <div style={{ color: "#5a6a7a", fontSize: 12, marginBottom: 18 }}>
                {p.tag}
              </div>
              <div
                style={{
                  background: p.highlight ? GOLD : NAVY,
                  color: p.highlight ? NAVY : CREAM,
                  padding: "10px 0",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {p.cta}
              </div>
            </CreamCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ThemeHybrid;
