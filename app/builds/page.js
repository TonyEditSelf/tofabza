import Link from "next/link";
import BuildsHero from "@/components/builds/BuildsHero";
import BuildsMedia from "@/components/builds/BuildsMedia";

export const metadata = {
  title: "My Builds - Tofabza",
  description: "Designed and built from scratch. No templates.",
};

const BuildsPage = () => {
  return (
    <div className="min-h-screen pb-7">
      <BuildsHero />
      <BuildsMedia />

      {/* Bottom CTA linking to central plans page */}
      <section className="pt-20">
        <div className="container">
          <div className="glass-card relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-10 text-center md:p-14">
            <div className="absolute inset-0 animated-gradient-bg opacity-50" />
            <div className="relative z-10">
              <h3 className="mb-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Ready to build{" "}
                <span className="text-gold-gradient">something real?</span>
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Find the right plan or book a call. <br /> I&apos;ll build a
                custom package around your goals.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/plans"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-gold-gradient px-7 font-semibold text-navy-900 transition-opacity hover:opacity-90 gold-border-glow"
                >
                  View Plans
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-gold-500/40 px-7 font-semibold text-foreground transition-colors hover:bg-gold-500/10 hover:text-gold-500"
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
