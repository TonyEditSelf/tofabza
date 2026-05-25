"use client";

import { useRouter } from "next/navigation";
import BlogEditor from "@/components/admin/BlogEditor";
import { toast } from "sonner";
import axios from "axios";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewBlogPostPage() {
  const router = useRouter();

  const handleSave = async (data) => {
    try {
      const res = await axios.post("/api/blog/posts", data);
      toast.success("Post created successfully");
      // Redirect to edit mode for autosaving
      router.push(`/admin/blog/${res.data.slug}/edit`);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to create post");
      throw error;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gold-gradient">Create Article</h1>
      </div>
      
      <BlogEditor onSave={handleSave} />
    </div>
  );
}
