import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function ValuePropositionStatement() {
  return (
    <section className="flex flex-col items-center gap-10 text-center py-28 px-5 border-y border-gold-500/10 bg-navy-900/40">
      <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
        Most businesses don’t lack ideas. <br />
        <span className="text-gold-gradient">
          They lack systems <br /> that actually talk to each other.
        </span>
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
        I help you build systems — so your website, apps, content, and
        automations work together instead of sitting idle.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:items-center">
        <Link href="/plans" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 h-14 text-base gold-border-glow"
          >
            Book a Free Slot <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        {/* <Link href="/builds" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-gold-500/40 text-foreground hover:bg-gold-500/10 hover:text-gold-500 px-8 h-14 text-base"
          >
            View Builds
          </Button>
        </Link>
        <Link href="/contact" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto border border-gold-500/30 text-gold-500/70 hover:text-black hover:border-gold-500/60 px-5 h-14 text-sm"
          >
            Book a Call
          </Button>
        </Link> */}
      </div>
    </section>
  );
}
