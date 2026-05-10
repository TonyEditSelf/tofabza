// components/contact/ContactForm.jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { toast } from "sonner";
import SuccessMessage from "./SuccessMessage";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target?.value ?? e });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setSuccess(true);
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      toast.error(err.message || "Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) return <SuccessMessage onReset={() => setSuccess(false)} />;

  return (
    <form
      onSubmit={submit}
      className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground/90">
            Name
          </Label>
          <Input
            id="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className="h-12 bg-navy-900/50 border-gold-500/20 focus:border-gold-500 focus:ring-gold-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground/90">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className="h-12 bg-navy-900/50 border-gold-500/20 focus:border-gold-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-foreground/90">Service of Interest</Label>
        <Select
          value={form.service}
          onValueChange={(v) => setForm({ ...form, service: v })}
        >
          <SelectTrigger className="h-12 bg-navy-900/50 border-gold-500/20">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-navy-800 border-gold-500/20">
            {SERVICE_OPTIONS.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground/90">
          Message
        </Label>
        <Textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your business and goals..."
          className="bg-navy-900/50 border-gold-500/20 focus:border-gold-500 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold h-14 text-base gold-border-glow"
      >
        {loading ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Send className="mr-2 h-4 w-4" />
        )}
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
