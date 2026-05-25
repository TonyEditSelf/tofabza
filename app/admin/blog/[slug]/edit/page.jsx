"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogEditor from "@/components/admin/BlogEditor";
import { toast } from "sonner";
import axios from "axios";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EditBlogPostPage({ params }) {
  const { slug } = params;
  const router = useRouter();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/blog/posts/${slug}`);
        setInitialData(res.data);
      } catch (error) {
        toast.error("Failed to load post");
        router.push("/admin/blog");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug, router]);

  const handleSave = async (data) => {
    try {
      await axios.put(`/api/blog/posts/${slug}`, data);
      toast.success("Post updated successfully");
      
      // If slug changed, redirect to new slug
      if (data.slug !== slug) {
        router.push(`/admin/blog/${data.slug}/edit`);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to update post");
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gold-gradient" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gold-gradient">Edit Article</h1>
      </div>
      
      {initialData && <BlogEditor initialData={initialData} onSave={handleSave} />}
    </div>
  );
}
