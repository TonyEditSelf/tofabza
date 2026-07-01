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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Loader2, Send, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { toast } from "sonner";
import SuccessMessage from "./SuccessMessage";

const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const MINUTES = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);

const TIMEZONES = [
  // India
  { label: "India — IST (UTC+5:30)", value: "Asia/Kolkata" },
  // Middle East
  { label: "UAE — GST (UTC+4)", value: "Asia/Dubai" },
  { label: "Saudi Arabia — AST (UTC+3)", value: "Asia/Riyadh" },
  { label: "Qatar — AST (UTC+3)", value: "Asia/Qatar" },
  { label: "Kuwait — AST (UTC+3)", value: "Asia/Kuwait" },
  { label: "Bahrain — AST (UTC+3)", value: "Asia/Bahrain" },
  { label: "Oman — GST (UTC+4)", value: "Asia/Muscat" },
  // Asia Pacific
  { label: "Pakistan — PKT (UTC+5)", value: "Asia/Karachi" },
  { label: "Bangladesh — BST (UTC+6)", value: "Asia/Dhaka" },
  { label: "Sri Lanka — SLST (UTC+5:30)", value: "Asia/Colombo" },
  { label: "Nepal — NPT (UTC+5:45)", value: "Asia/Kathmandu" },
  { label: "Singapore — SGT (UTC+8)", value: "Asia/Singapore" },
  { label: "Malaysia — MYT (UTC+8)", value: "Asia/Kuala_Lumpur" },
  { label: "Hong Kong — HKT (UTC+8)", value: "Asia/Hong_Kong" },
  { label: "China — CST (UTC+8)", value: "Asia/Shanghai" },
  { label: "Japan — JST (UTC+9)", value: "Asia/Tokyo" },
  { label: "South Korea — KST (UTC+9)", value: "Asia/Seoul" },
  { label: "Indonesia (WIB, UTC+7)", value: "Asia/Jakarta" },
  { label: "Philippines — PST (UTC+8)", value: "Asia/Manila" },
  { label: "Thailand — ICT (UTC+7)", value: "Asia/Bangkok" },
  { label: "Vietnam — ICT (UTC+7)", value: "Asia/Ho_Chi_Minh" },
  // Australia / Pacific
  { label: "Australia — AEST (UTC+10)", value: "Australia/Sydney" },
  { label: "Australia — ACST (UTC+9:30)", value: "Australia/Darwin" },
  { label: "Australia — AWST (UTC+8)", value: "Australia/Perth" },
  { label: "New Zealand — NZST (UTC+12)", value: "Pacific/Auckland" },
  // Europe
  { label: "UK — GMT/BST (UTC+0/+1)", value: "Europe/London" },
  { label: "Ireland — GMT/IST (UTC+0/+1)", value: "Europe/Dublin" },
  { label: "Portugal — WET (UTC+0/+1)", value: "Europe/Lisbon" },
  { label: "Central Europe — CET (UTC+1/+2)", value: "Europe/Berlin" },
  { label: "France — CET (UTC+1/+2)", value: "Europe/Paris" },
  { label: "Netherlands — CET (UTC+1/+2)", value: "Europe/Amsterdam" },
  { label: "Switzerland — CET (UTC+1/+2)", value: "Europe/Zurich" },
  { label: "Sweden — CET (UTC+1/+2)", value: "Europe/Stockholm" },
  { label: "Eastern Europe — EET (UTC+2/+3)", value: "Europe/Athens" },
  { label: "Turkey — TRT (UTC+3)", value: "Europe/Istanbul" },
  { label: "Russia — MSK (UTC+3)", value: "Europe/Moscow" },
  // Africa
  { label: "South Africa — SAST (UTC+2)", value: "Africa/Johannesburg" },
  { label: "Nigeria — WAT (UTC+1)", value: "Africa/Lagos" },
  { label: "Kenya — EAT (UTC+3)", value: "Africa/Nairobi" },
  { label: "Egypt — EET (UTC+2)", value: "Africa/Cairo" },
  // Americas
  { label: "Canada — EST/EDT (UTC-5/-4)", value: "America/Toronto" },
  { label: "US Eastern — EST/EDT (UTC-5/-4)", value: "America/New_York" },
  { label: "US Central — CST/CDT (UTC-6/-5)", value: "America/Chicago" },
  { label: "US Mountain — MST/MDT (UTC-7/-6)", value: "America/Denver" },
  { label: "US Pacific — PST/PDT (UTC-8/-7)", value: "America/Los_Angeles" },
  { label: "US Alaska — AKST (UTC-9/-8)", value: "America/Anchorage" },
  { label: "US Hawaii — HST (UTC-10)", value: "Pacific/Honolulu" },
  { label: "Mexico — CST (UTC-6/-5)", value: "America/Mexico_City" },
  { label: "Brazil — BRT (UTC-3)", value: "America/Sao_Paulo" },
  { label: "Argentina — ART (UTC-3)", value: "America/Argentina/Buenos_Aires" },
  { label: "Chile — CLT (UTC-4/-3)", value: "America/Santiago" },
  { label: "Colombia — COT (UTC-5)", value: "America/Bogota" },
  // UTC
  { label: "UTC (UTC+0)", value: "UTC" },
];

function TimeSelect({ value, onChange, options, width = "w-16" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${width}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className={`${width} h-12 rounded-md border border-brand-500/20 bg-navy-900/50 text-foreground text-sm px-2 focus:outline-none focus:border-brand-500 text-left`}
      >
        {value}
      </button>
      {open && (
        <ul
          className={`absolute z-50 bottom-full mb-1 ${width} max-h-[232px] overflow-y-auto rounded-md border border-brand-500/20 bg-[#0B1C2C] shadow-lg`}
        >
          {options.map((o) => (
            <li
              key={o}
              onMouseDown={() => {
                onChange(o);
                setOpen(false);
              }}
              className={cn(
                "px-3 py-2 text-sm cursor-pointer hover:bg-brand-500/10 hover:text-brand-500",
                o === value && "bg-brand-500/20 text-brand-500",
              )}
            >
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [date, setDate] = useState(null);
  const [time, setTime] = useState({ hour: "10", minute: "00", period: "AM" });
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [calOpen, setCalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target?.value ?? e });
  const updateTime = (k) => (v) => setTime((t) => ({ ...t, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    const phoneRegex = /^\+?[\d\s-]{7,15}$/;
    if (!phoneRegex.test(form.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    try {
      const preferredTime = date
        ? `${format(date, "dd MMM yyyy")} at ${time.hour}:${time.minute} ${time.period} (${timezone})`
        : null;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, preferredTime }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setDate(null);
      setTime({ hour: "10", minute: "00", period: "AM" });
      setTimezone("Asia/Kolkata");
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
            className="h-12 bg-navy-900/50 border-brand-500/20 focus:border-brand-500 focus:ring-brand-500"
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
            className="h-12 bg-navy-900/50 border-brand-500/20 focus:border-brand-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground/90">
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="+91 98765 43210"
          className="h-12 bg-navy-900/50 border-brand-500/20 focus:border-brand-500"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-foreground/90">Message</Label>
        <Textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell me about your business and goals..."
          className="bg-navy-900/50 border-brand-500/20 focus:border-brand-500 resize-none"
        />
      </div>

      {/* Preferred call time */}
      <div className="space-y-3">
        <Label className="text-foreground/90">
          Preferred call time{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>

        {/* Date + HH MM AM/PM in one row */}
        <div className="flex gap-2">
          {/* Date — takes remaining space */}
          <Popover open={calOpen} onOpenChange={setCalOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "flex-1 h-12 flex items-center gap-2 px-4 rounded-md border text-sm transition-colors text-left",
                  "bg-navy-900/50 border-brand-500/20 hover:border-brand-500/50",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="h-4 w-4 text-brand-500 shrink-0" />
                {date ? format(date, "dd MMM yyyy") : "Pick a date"}
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 bg-navy-900 border-brand-500/20"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setCalOpen(false);
                }}
                disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <TimeSelect
            value={time.hour}
            onChange={updateTime("hour")}
            options={HOURS}
          />
          <TimeSelect
            value={time.minute}
            onChange={updateTime("minute")}
            options={MINUTES}
          />
          <TimeSelect
            value={time.period}
            onChange={updateTime("period")}
            options={["AM", "PM"]}
          />
        </div>

        {/* Timezone — full width */}
        <Select modal={false} value={timezone} onValueChange={setTimezone}>
          <SelectTrigger className="w-full h-12 bg-navy-900/50 border-brand-500/20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-navy-900 border-brand-500/20 max-h-72">
            {TIMEZONES.map((tz) => (
              <SelectItem key={tz.value} value={tz.value}>
                {tz.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full bg-brand-gradient text-navy-900 hover:opacity-90 font-semibold h-14 text-base brand-border-glow"
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
