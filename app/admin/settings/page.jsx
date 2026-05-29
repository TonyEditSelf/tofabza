"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";

export default function AdminSettingsPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: session?.user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (!formData.currentPassword) {
      toast.error("Current password is required to make changes");
      return;
    }

    setLoading(true);
    try {
      await axios.put("/api/admin/settings", {
        email: formData.email,
        password: formData.currentPassword,
        newPassword: formData.newPassword
      });
      
      toast.success("Settings updated successfully");
      
      // If email or password changed, might be good to sign out
      if (formData.email !== session?.user?.email || formData.newPassword) {
        toast.info("Please log in again with your new credentials");
        setTimeout(() => signOut({ callbackUrl: '/' }), 2000);
      } else {
        setFormData(prev => ({ ...prev, currentPassword: "", newPassword: "", confirmPassword: "" }));
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to update settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-brand-gradient">Account Settings</h1>
      
      <Card className="glass-card">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Update Credentials</CardTitle>
            <CardDescription>
              Change your email address or password. You must provide your current password to save changes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input 
                id="currentPassword" 
                name="currentPassword" 
                type="password" 
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password (optional)</Label>
              <Input 
                id="newPassword" 
                name="newPassword" 
                type="password" 
                value={formData.newPassword}
                onChange={handleChange}
                minLength={6}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => signOut({ callbackUrl: '/' })}>
              Sign Out
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
