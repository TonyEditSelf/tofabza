"use client";

import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Bold, Italic, List, ListOrdered, Heading2, Loader2, Save, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Minimal schema for form validation
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  featuredImage: z.string().optional(),
  categories: z.array(z.string()).default([]),
  tags: z.string().optional(), // We'll parse this into an array on save
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: z.enum(["draft", "published", "scheduled"]).default("draft"),
  publishedAt: z.date().optional().nullable(),
});

const objectIdPattern = /^[a-f\d]{24}$/i;

const getObjectIdString = (value) => {
  if (!value) return null;

  if (typeof value === "string") {
    return objectIdPattern.test(value) ? value : null;
  }

  if (typeof value === "object") {
    const nestedId = value._id || value.id || value.$oid;
    if (nestedId && nestedId !== value) {
      return getObjectIdString(nestedId);
    }

    if (typeof value.toString === "function") {
      const stringValue = value.toString();
      return objectIdPattern.test(stringValue) ? stringValue : null;
    }
  }

  return null;
};

const getObjectIdArray = (values) => {
  if (!Array.isArray(values)) return [];

  return values.map(getObjectIdString).filter(Boolean);
};

export default function BlogEditor({ initialData = null, onSave }) {
  const { data: session } = useSession();
  const [categories, setCategories] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const autosaveTimer = useRef(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      excerpt: initialData?.excerpt || "",
      content: initialData?.content || "",
      featuredImage: initialData?.featuredImage || "",
      categories: getObjectIdArray(initialData?.categories),
      tags: initialData?.tags?.join(", ") || "",
      seoTitle: initialData?.seoTitle || "",
      seoDescription: initialData?.seoDescription || "",
      status: initialData?.status || "draft",
      publishedAt: initialData?.publishedAt ? new Date(initialData.publishedAt) : null,
    },
  });

  const { watch, setValue, getValues, formState: { isDirty, isValid, dirtyFields } } = form;

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialData?.content || "",
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none min-h-[300px] p-4 focus:outline-none border border-border rounded-md bg-input/50",
      },
    },
    onUpdate: ({ editor }) => {
      setValue("content", editor.getHTML(), { shouldDirty: true });
    },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/blog/categories");
        setCategories(
          res.data
            .map((category) => ({
              ...category,
              _id: getObjectIdString(category._id),
            }))
            .filter((category) => category._id),
        );
      } catch (e) {
        console.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  // Auto-generate slug from title if slug is empty or wasn't manually edited
  const title = watch("title");
  useEffect(() => {
    if (!initialData && title && !dirtyFields.slug) {
      const generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setValue("slug", generatedSlug, { shouldValidate: true });
    }
  }, [title, initialData, setValue, dirtyFields.slug]);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/blog/upload", formData);
      setValue("featuredImage", res.data.url, { shouldDirty: true });
      toast.success("Image uploaded");
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const submitData = async (statusOverride = null) => {
    const data = getValues();
    if (statusOverride) {
      data.status = statusOverride;
      if (statusOverride === "published" && !data.publishedAt) {
        data.publishedAt = new Date();
      }
    }

    const payload = {
      ...data,
      author:
        getObjectIdString(initialData?.author) ||
        getObjectIdString(session?.user?.id),
      categories: getObjectIdArray(data.categories),
      tags: data.tags ? data.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
    };

    if (process.env.NODE_ENV === "development") {
      console.debug("[BlogEditor] save payload relationship fields", {
        rawAuthor: initialData?.author,
        rawAuthorType: typeof initialData?.author,
        sessionAuthor: session?.user?.id,
        sessionAuthorType: typeof session?.user?.id,
        payloadAuthor: payload.author,
        rawCategories: data.categories,
        rawCategoriesTypes: Array.isArray(data.categories)
          ? data.categories.map((category) => typeof category)
          : typeof data.categories,
        payloadCategories: payload.categories,
      });
    }

    setIsSaving(true);
    try {
      await onSave(payload);
      form.reset(data); // Reset dirtiness
    } catch (e) {
      // Error handled in parent
    } finally {
      setIsSaving(false);
    }
  };

  // Autosave every 30s
  useEffect(() => {
    autosaveTimer.current = setInterval(() => {
      if (isDirty && isValid && initialData) { // Only autosave if it's already created
        submitData("draft");
        toast("Autosaved draft", { position: "bottom-right" });
      }
    }, 30000);

    return () => clearInterval(autosaveTimer.current);
  }, [isDirty, isValid, initialData]);

  if (!editor) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-lg">Title</Label>
          <Input 
            id="title" 
            className="text-xl font-bold p-6" 
            placeholder="Article Title..." 
            {...form.register("title")} 
          />
        </div>

        <div className="space-y-2">
          <Label>Content</Label>
          <div className="border border-border rounded-md bg-card overflow-hidden">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-muted/50">
              <Button
                variant="ghost"
                size="sm"
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "bg-accent/20 text-accent" : ""}
              >
                <Bold className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "bg-accent/20 text-accent" : ""}
              >
                <Italic className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive("heading", { level: 2 }) ? "bg-accent/20 text-accent" : ""}
              >
                <Heading2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "bg-accent/20 text-accent" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedList") ? "bg-accent/20 text-accent" : ""}
              >
                <ListOrdered className="h-4 w-4" />
              </Button>
            </div>
            {/* Editor */}
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea 
            id="excerpt" 
            placeholder="Brief summary of the article..." 
            rows={3} 
            {...form.register("excerpt")} 
          />
        </div>
        
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="text-lg font-semibold text-brand-gradient">SEO Settings</h3>
          <div className="space-y-2">
            <Label htmlFor="seoTitle">SEO Title (Optional)</Label>
            <Input id="seoTitle" {...form.register("seoTitle")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="seoDescription">SEO Description (Optional)</Label>
            <Textarea id="seoDescription" rows={2} {...form.register("seoDescription")} />
          </div>
        </div>
      </div>

      {/* Sidebar Panel */}
      <div className="w-full lg:w-80 space-y-6">
        <div className="glass-card p-4 rounded-lg space-y-4">
          <h3 className="font-semibold border-b border-border pb-2">Publishing</h3>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              onClick={() => submitData("draft")}
              disabled={isSaving}
              className="w-full"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button 
              onClick={() => submitData("published")}
              disabled={isSaving}
              className="w-full"
            >
              <Send className="mr-2 h-4 w-4" />
              Publish
            </Button>
          </div>

          <div className="pt-2">
            <Label className="mb-2 block">Schedule Publication</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !watch("publishedAt") && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {watch("publishedAt") ? format(watch("publishedAt"), "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-card border-border">
                <Calendar
                  mode="single"
                  selected={watch("publishedAt")}
                  onSelect={(date) => {
                    setValue("publishedAt", date, { shouldDirty: true });
                    if (date > new Date()) {
                      setValue("status", "scheduled", { shouldDirty: true });
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg space-y-4">
          <h3 className="font-semibold border-b border-border pb-2">URL Slug</h3>
          <Input id="slug" {...form.register("slug")} />
        </div>

        <div className="glass-card p-4 rounded-lg space-y-4">
          <h3 className="font-semibold border-b border-border pb-2">Featured Image</h3>
          {watch("featuredImage") && (
            <img 
              src={watch("featuredImage")} 
              alt="Featured" 
              className="w-full h-40 object-cover rounded-md border border-border" 
            />
          )}
          <div className="flex items-center gap-2">
            <Input 
              type="file" 
              accept="image/*" 
              className="flex-1 text-xs" 
              onChange={handleImageUpload}
              disabled={uploading}
            />
            {uploading && <Loader2 className="h-4 w-4 animate-spin text-brand-gradient" />}
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg space-y-4">
          <h3 className="font-semibold border-b border-border pb-2">Categories</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {categories.map((category) => (
              <div key={category._id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`cat-${category._id}`} 
                  checked={watch("categories").includes(category._id)}
                  onCheckedChange={(checked) => {
                    const current = getObjectIdArray(watch("categories"));
                    const updated = checked 
                      ? [...current, category._id]
                      : current.filter(id => id !== category._id);
                    setValue("categories", updated, { shouldDirty: true, shouldValidate: true });
                  }}
                />
                <Label htmlFor={`cat-${category._id}`} className="text-sm font-normal cursor-pointer">
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg space-y-4">
          <h3 className="font-semibold border-b border-border pb-2">Tags</h3>
          <p className="text-xs text-muted-foreground">Comma separated</p>
          <Input id="tags" placeholder="e.g. Next.js, React" {...form.register("tags")} />
        </div>
      </div>
    </div>
  );
}
