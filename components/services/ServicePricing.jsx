// components/services/ServicePricing.jsx
import PricingCard from "@/components/plans/PricingCard";

export default function ServicePricing({ service }) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-5 border border-gold-500/30 rounded-full px-4 py-1.5">
            Pricing
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-5">
            Plans for <span className="text-gold-gradient">{service.title}</span>.
          </h2>
          <p className="text-muted-foreground">
            Pick a tier that fits where you are today. Upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {service.plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant="cream" />
          ))}
        </div>
      </div>
    </section>
  );
}
