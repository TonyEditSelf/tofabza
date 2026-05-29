"use client";

import { useEffect } from "react";
import { signIn, signOut } from "next-auth/react";

function getBrowserOrigin() {
  const url = new URL(window.location.href);

  if (url.hostname === "0.0.0.0") {
    url.hostname = "localhost";
  }

  return url.origin;
}

export default function AdminLoginPage() {
  useEffect(() => {
    async function startFreshAdminLogin() {
      await signOut({ redirect: false });
      await signIn("google", {
        callbackUrl: `${getBrowserOrigin()}/admin-auth/complete`,
      });
    }

    startFreshAdminLogin();
  }, []);

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 text-center">
      <p className="text-sm text-muted-foreground">Opening Google sign in...</p>
    </main>
  );
}
