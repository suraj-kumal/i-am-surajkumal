import { supabase } from "./supabase";

export async function getPublishedBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    throw error;
  }

  return data ?? [];
}

export async function getPublishedBlogSlugs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("slug")
    .eq("published", true);

  if (error) {
    console.log(error);
    throw error;
  }

  return data ?? [];
}
