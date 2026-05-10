"use client";

import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Chrome, Phone, User, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function AuthModal({ isOpen, onOpenChange, onSuccess, callbackUrl }) {
  const { data: session, status } = useSession();
  const [step, setStep] = useState(1); // 1: Google Sign-in, 2: Profile Completion
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  // Automatically move to step 2 if logged in but profile incomplete
  useEffect(() => {
    if (!isOpen) return;
    
    if (status === "authenticated") {
      if (session?.user?.profileCompleted) {
        // If profile is already complete, we're done!
        onSuccess?.();
        onOpenChange(false);
      } else {
        // If not, move to profile form
        setStep(2);
        setFormData({
          name: session.user.name || "",
          phone: session.user.phone || "",
        });
      }
    }
  }, [status, session, onSuccess, onOpenChange, isOpen]);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signIn("google", {
        redirect: Boolean(callbackUrl),
        ...(callbackUrl ? { callbackUrl } : {}),
      });
      
      // If sign-in is successful and session is now available
      // Note: useSession might take a moment to update, so we can also check the result
      if (result?.ok) {
        // We rely on the useEffect to detect the new session status
        // But for users who are ALREADY complete, we want to close immediately
        // However, since status change is async, we'll add a small check
        toast.success("Signed in with Google!");
      }
    } catch (error) {
      toast.error("Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Profile updated successfully!");
        onSuccess?.();
        onOpenChange(false);
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to update profile");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] bg-navy-900 border-gold-500/20 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-semibold text-center">
            {step === 1 ? "Welcome to " : "Complete Your "}
            <span className="text-gold-gradient">Tofabza</span>
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            {step === 1 
              ? "Sign in with Google to access your cart and checkout." 
              : "We just need a few more details to secure your account."}
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          {step === 1 ? (
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full h-12 border-gold-500/20 hover:bg-gold-500/5 hover:text-gold-500 transition-all group"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Chrome className="mr-2 h-5 w-5 text-gold-500 group-hover:scale-110 transition-transform" />
                )}
                Continue with Google
              </Button>
              <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                Secure & encrypted
              </p>
            </div>
          ) : (
            <form onSubmit={handleProfileSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-gold-500/80">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="pl-10 bg-navy-800/50 border-gold-500/10 focus:border-gold-500/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-gold-500/80">Phone Number</Label>
                <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                  Please provide your phone number so that we can contact you to provide the required services.
                </p>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="pl-10 bg-navy-800/50 border-gold-500/10 focus:border-gold-500/50"
                    required
                    type="tel"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gold-gradient text-navy-900 font-semibold hover:opacity-90 transition-opacity"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                )}
                Complete Registration
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
