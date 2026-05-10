// app/layout.js
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NextAuthProvider } from "@/components/providers/SessionProvider";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Tofabza — Premium Digital Growth Partner",
  description:
    "Tofabza helps businesses grow online with clarity, consistency, and automation. Premium digital marketing, content, and systems.",
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
            {/* Voice AI Widget */}
            {/* <iframe
              id="audio_iframe"
              src="https://widget.synthflow.ai/widget/v2/c25ffd10-3543-4a16-9081-a41a1bffeb81/1778064210754x862803998782295900"
              allow="microphone"
              scrolling="no"
              className="fixed bottom-4 right-4 z-[9999] w-[250px] h-[450px] md:w-[360px] md:h-[440px] bg-transparent"
            /> */}
            </CartProvider>
          </AuthProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
