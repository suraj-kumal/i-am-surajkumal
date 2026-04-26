import { Toaster } from "@/components/ui/sonner";
import { getBlogContent } from "@/lib/content";
import { Metadata, ResolvingMetadata } from "next";

const siteUrl = "https://surajkumal.com.np";

export const revalidate = 600;


//always upload 1200x630 sized image
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const content = await getBlogContent(slug);

  if (!content) {
    return {
      title: "Blog Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const blogUrl = `${siteUrl}/blogs/${slug}`;
  const authors = (await parent).authors || [];

  return {
    title: content.seo_title,
    description: content.seo_description,
    keywords: content.seo_keywords,
    authors: [{ name: "Suraj Kumal" }, ...authors],
    creator: "Suraj Kumal",
    openGraph: {
      type: "article",
      title: content.seo_title,
      description: content.seo_description,
      url: blogUrl,
      siteName: "Suraj Kumal",
      images: [
        {
          url: content.cover_image,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
      publishedTime: content.created_at,
      modifiedTime: content.updated_at,
      authors: ["Suraj Kumal"],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo_title,
      description: content.description || content.excerpt,
      images: [content.cover_image],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
