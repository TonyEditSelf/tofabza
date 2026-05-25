import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { BookText, Settings, LayoutDashboard } from "lucide-react";
import SignOutButton from "@/components/admin/SignOutButton";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col hidden md:flex">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold text-gold-gradient tracking-tight">Tofabza Admin</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link 
            href="/admin" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link 
            href="/admin/blog" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
          >
            <BookText className="h-5 w-5" />
            Blog CMS
          </Link>
          <Link 
            href="/admin/settings" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              {session.user.name?.[0] || session.user.email[0].toUpperCase()}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">{session.user.name || "Admin"}</p>
              <p className="text-xs truncate">{session.user.email}</p>
            </div>
          </div>
          <div className="mt-4">
            <SignOutButton />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card">
          <h2 className="text-lg font-bold text-gold-gradient">Tofabza Admin</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
