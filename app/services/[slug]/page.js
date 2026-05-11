// app/services/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceMedia from "@/components/services/ServiceMedia";
import ServiceDescription from "@/components/services/ServiceDescription";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/service-details";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — Tofabza`,
    description: service.tagline,
  };
}

const ServicePage = ({ params }) => {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <div className="min-h-screen">
      {/* Breadcrumb back link */}
      <div className="container pt-28">
        <Link
          href="/#WhatIBuild"
          className="inline-flex items-center gap-2 text-md text-muted-foreground hover:text-gold-500 transition-colors"
        >
          <span className="text-gold-gradient">← Back to 'What I Build'</span>
        </Link>
      </div>

      <ServiceHero service={service} />
      <ServiceMedia title={service.title} slug={service.slug} />
      <ServiceDescription service={service} />

      <div className="full-bleed-divider" />

      {/* Bottom CTA linking to central plans page */}
      <section className="pt-20">
        <div className="container">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 animated-gradient-bg opacity-50" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-5">
                Ready to start with{" "}
                <span className="text-gold-gradient">{service.title}?</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Explore the plans to find the right fit, or book a call and I'll
                build a custom package around your goals.
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

export default ServicePage;
