import { supabase } from "./supabase";

export async function getBlogContent(slug: string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle(); //  allows 0 rows

  if (error) {
    console.log(error);
    throw error;
  }

  if (!data) {
    console.log(`No blog found for slug: ${slug}`);
    return null; // handle 0 rows gracefully
  }

  return data;
}
