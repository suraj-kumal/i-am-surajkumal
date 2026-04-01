import { getPublishedBlogs } from "@/lib/blogs";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function BlogsPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="w-full min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg font-semibold mb-6">BLOGS</h1>

        <div className="flex flex-col gap-4 mb-2">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <Card
                className="
                group flex flex-row overflow-hidden
                    border
                    transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1 hover:border-primary/40
                    cursor-pointer
                "
              >
                {/* LEFT IMAGE */}
                <div className="w-44 h-[9rem] md:h-[8rem] flex-shrink-0 overflow-hidden">
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-4 flex-1">
                  {/* TOP: Title + Date */}
                  <div className="flex justify-between items-start gap-4">
                    <CardHeader className="p-0">
                      <CardTitle className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                        {blog.title}
                      </CardTitle>
                    </CardHeader>

                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                      {new Date(blog.updated_at).toLocaleDateString()}
                    </span>
                  </div>

                  {/* EXCERPT */}
                  <CardContent className="p-0 mt-1">
                    <CardDescription className="text-xs text-muted-foreground line-clamp-2">
                      {blog.excerpt}
                    </CardDescription>
                  </CardContent>

                  {/* BUTTON */}
                  <div className="mt-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="text-xs h-7 px-3 transition-transform group-hover:scale-105"
                    >
                      Read post
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
