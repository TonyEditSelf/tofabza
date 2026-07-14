import Link from "next/link";
import AutomatedWorkflowHero from "@/components/automatedworkflow/AutomatedWorkflowHero";
import AutomatedWorkflowMedia from "@/components/automatedworkflow/AutomatedWorkflowMedia";

export const metadata = {
  title: "My Builds - Tofabza",
  description: "Designed and built from scratch. No templates.",
};

const AutomatedWorkflowPage = () => {
  return (
    <div className="min-h-screen pt-16 pb-7">
      <AutomatedWorkflowHero />
      <AutomatedWorkflowMedia />

      {/* Bottom CTA linking to central plans page */}
      <section className="pt-28 pb-5">
        <div className="container">
          <div className="glass-card relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-10 text-center md:p-14">
            <div className="absolute inset-0 animated-gradient-bg opacity-50" />
            <div className="relative z-10">
              <h3 className="mb-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Need something similar{" "}
                <span className="text-brand-gradient">for your business?</span>
              </h3>
              <p className="mx-auto mb-8 max-w-3xl text-muted-foreground">
                Let's discuss your workflow and whether a similar approach fits
                your operation.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/first-projects"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-gradient px-7 font-semibold text-navy-900 transition-opacity hover:opacity-90 brand-border-glow"
                >
                  How the process works
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-brand-500/40 px-7 font-semibold text-foreground transition-colors hover:bg-brand-500/10 hover:text-brand-500"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomatedWorkflowPage;
