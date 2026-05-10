// components/contact/SuccessMessage.jsx
"use client";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessMessage({ onReset }) {
  return (
    <div className="glass-card rounded-2xl p-12 text-center">
      <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold-500/30">
        <CheckCircle2 className="h-10 w-10 text-navy-900" />
      </div>
      <h3 className="font-display text-3xl font-semibold mb-4">
        Message received.
      </h3>
      <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
        Thank you for reaching out. I will get back to you within 24 hours with
        next steps.
      </p>
      <Button
        onClick={onReset}
        variant="outline"
        className="border-gold-500/40 text-foreground hover:bg-gold-500/10 hover:text-gold-500"
      >
        Send Another Message
      </Button>
    </div>
  );
}
