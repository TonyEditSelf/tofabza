import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, FileText, Users } from "lucide-react";
import { getDb } from "@/lib/mongodb";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  let stats = { posts: 0, users: 0, categories: 0 };
  try {
    const db = await getDb();
    const [posts, users, categories] = await Promise.all([
      db.collection("blogPosts").countDocuments(),
      db.collection("users").countDocuments(),
      db.collection("categories").countDocuments(),
    ]);
    stats = { posts, users, categories };
  } catch (error) {
    console.error("Failed to load dashboard stats", error);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gold-gradient">
        Welcome back, {session?.user?.name || "Admin"}
      </h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Blog Posts
            </CardTitle>
            <FileText className="h-4 w-4 text-gold-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.posts}</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Registered Users
            </CardTitle>
            <Users className="h-4 w-4 text-gold-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.users}</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Categories
            </CardTitle>
            <Activity className="h-4 w-4 text-gold-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.categories}</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="pt-8 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/admin/blog/new">
            <span className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
              Add New Blog Post
            </span>
          </Link>
          <Link href="/admin/blog">
            <span className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
              Manage Articles
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
