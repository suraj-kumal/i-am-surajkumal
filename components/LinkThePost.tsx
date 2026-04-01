"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Props = {
  id: string;
};

export default function LikeThePost({ id }: Props) {
  const [value, setValue] = useState<"up" | "down" | null>(null);

  const readerLoveThisPost = process.env.NEXT_PUBLIC_READER_LOVE_THIS_BLOG;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

  const storageKey = `post-like-${id}`;
  const sentKey = `post-like-${id}-sent`;

  // ✅ Load previous state
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "up" || stored === "down") {
      setValue(stored);
    }
  }, [storageKey]);

  // ✅ Save selection
  useEffect(() => {
    if (value) {
      localStorage.setItem(storageKey, value);
    }
  }, [value, storageKey]);

  // ✅ Send to backend ONLY once
  useEffect(() => {
    if (!value) return;

    const alreadySent = localStorage.getItem(sentKey);
    if (alreadySent) return;

    const trackFeedback = async () => {
      try {
        await fetch(`${readerLoveThisPost}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
            // apikey: key!,
          },
          body: JSON.stringify({
            blog_id: id,
            helpful: value === "up", // 👍 true, 👎 false
          }),
        });

        // mark as sent
        localStorage.setItem(sentKey, "true");
      } catch (err) {
        console.error("Something went wrong", err);
      }
    };

    trackFeedback();
  }, [value, id, readerLoveThisPost, key, sentKey]);

  return (
    <div className="flex flex-col items-center gap-4 p-4 border bg-card rounded-2xl w-full mt-16 mb-16">
      <p className="text-sm font-medium">Do you like the post?</p>

      <div className="flex gap-3">
        <Button
          variant={value === "up" ? "default" : "outline"}
          size="icon"
          onClick={() => {
            setValue("up");
            toast.success("Thanks for your feedback!", {
              position: "top-center",
            });
          }}
          className={cn(
            value === "up" && "bg-green-500 hover:bg-green-600 text-white",
          )}
        >
          <ThumbsUp className="w-5 h-5" />
        </Button>

        <Button
          variant={value === "down" ? "default" : "outline"}
          size="icon"
          onClick={() => {
            setValue("down");
            toast.success("Thanks for your feedback!", {
              position: "top-center",
            });
          }}
          className={cn(
            value === "down" && "bg-red-500 hover:bg-red-600 text-white",
          )}
        >
          <ThumbsDown className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
