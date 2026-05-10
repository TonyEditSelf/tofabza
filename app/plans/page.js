// app/plans/page.js
import PricingGrid from "@/components/plans/PricingGrid";

const PlansPage = () => {
  return (
    <div className="pt-40 min-h-screen">
      <div className="absolute top-20 left-0 right-0 h-[540px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-28 animate-fade-up">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
            Pricing
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
            Start where you are.{" "}
            <span className="text-gold-gradient">
              Upgrade <br /> when you're ready
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
            One founder. Direct execution. No complexity.
          </p>
        </div>
        <div className="full-bleed-divider" />
        <PricingGrid variant="cream" />
      </div>
    </div>
  );
};

export default PlansPage;
