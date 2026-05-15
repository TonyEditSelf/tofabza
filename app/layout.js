import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NextAuthProvider } from "@/components/providers/SessionProvider";
import { AuthProvider } from "@/context/AuthContext";
import useEffect from "react";
// import VoiceWidget from "@/components/VoiceWidget";

export const metadata = {
  title: "Tofabza — Web, Automation & Digital Systems | India",
  description:
    "Tofabza builds websites, automation systems, and content strategies for growing businesses. Based in India. Direct execution, zero handoffs.",
  openGraph: {
    title: "Tofabza — Web, Automation & Digital Systems | India",
    description:
      "Tofabza builds websites, automation systems, and content strategies for growing businesses. Based in India. Direct execution, zero handoffs.",
    url: "https://www.tofabza.com",
    siteName: "Tofabza",
    images: [
      {
        url: "https://www.tofabza.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Tofabza — Digital Systems",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <NextAuthProvider>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <main className="relative">{children}</main>
              <Footer />
              <Toaster
                position="top-right"
                richColors
                offset="90px"
                toastOptions={{
                  style: { top: "66px", right: "27px", position: "fixed" },
                }}
              />
            </CartProvider>
          </AuthProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
