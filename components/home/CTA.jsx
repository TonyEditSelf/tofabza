// components/home/CTA.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="pt-28">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden glass-card p-12 md:p-20 text-center">
          <div className="absolute inset-0 animated-gradient-bg opacity-60" />
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-500/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Whether you're <br />
              <span className="text-gold-gradient">
                starting out or scaling up,
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's build the system that gets you there.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 h-14 text-base gold-border-glow"
                >
                  Book a Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/plans">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold-500/40 text-foreground hover:bg-gold-500/10 hover:text-gold-500 px-8 h-14 text-base"
                >
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
