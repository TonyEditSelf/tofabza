// app/builds/page.js
import Link from "next/link";
import BuildsHero from "@/components/builds/BuildsHero";
import BuildsMedia from "@/components/builds/BuildsMedia";

export const metadata = {
  title: "My Builds — Tofabza",
  description: "Designed and built from scratch. No templates.",
};

const BuildsPage = () => {
  return (
    <div className="min-h-screen py-12">
      <BuildsHero />
      <BuildsMedia />

      {/* <div className="full-bleed-divider" /> */}

      {/* Bottom CTA linking to central plans page */}
      <section className="pt-20">
        <div className="container">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 animated-gradient-bg opacity-50" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-5">
                Ready to build{" "}
                <span className="text-gold-gradient">something real?</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Find the right plan or book a call. <br /> I'll build a custom
                package around your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/plans"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-gold-gradient text-navy-900 font-semibold hover:opacity-90 transition-opacity gold-border-glow"
                >
                  View Plans
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg border border-gold-500/40 text-foreground hover:bg-gold-500/10 hover:text-gold-500 font-semibold transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildsPage;
