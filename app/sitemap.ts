import { MetadataRoute } from "next";
import { getPublishedBlogs } from "@/lib/blogs";

const BASE_URL = "https://surajkumal.com.np";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    
    const blogs = await getPublishedBlogs();

   
    const mainPages: MetadataRoute.Sitemap = [
      {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${BASE_URL}/blogs`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];

    
    const blogPages: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
      url: `${BASE_URL}/blogs/${blog.slug}`,
      lastModified: new Date(blog.updated_at || blog.created_at),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

    return [...mainPages, ...blogPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    
    return [
      {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${BASE_URL}/blogs`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];
  }
}
