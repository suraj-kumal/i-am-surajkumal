import { getBlogContent } from "@/lib/content";
import "./style.css";

import LikeThePost from "@/components/LinkThePost";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const content = await getBlogContent(slug);
  const readersLoveThisPage = process.env.NEXT_PUBLIC_READER_LOVE_THIS_PAGE;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

  const trackVisit = async () => {
    // if (sessionStorage.getItem("read")) return;
    try {
      await fetch(`${readersLoveThisPage}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
          apikey: key!,
        },
        body: JSON.stringify({
          blog_id: content.id,
        }),
      });

      // sessionStorage.setItem("read", "true");
    } catch (err) {
      // console.error("something wrong", err);
    }
  };
  trackVisit();
  return (
    <>
      <div className="max-w-full sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[55vw] mx-auto px-4 mt-20">
        <h1 className="m-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          {content.title}
        </h1>
        <img
          src={content.cover_image}
          className="w-full h-32 rounded-md my-4"
        />
        <div
          className="custom-content text-base sm:text-lg md:text-xl"
          dangerouslySetInnerHTML={{ __html: content.content }}
          style={{ lineHeight: "1.6" }}
        ></div>
        <LikeThePost id={content.id} />

        <div className="w-full text-center mt-16 mb-16">
          <h3>
            You can mail me at{" "}
            <a
              href="mailto:surajkumal8773@gmail.com"
              className="underline text-gray-400 hover:text-primary"
            >
              surajkumal8773@gmail.com
            </a>
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            I post blogs—feel free to send feedback, suggestions, or just
            connect.
          </p>

          <br />

          <Link
            href="/blogs"
            className="underline text-[16px] text-gray-400 hover:text-primary"
          >
            {"print(readMoreBlogs)"}
          </Link>

          <br />

          <Link
            href="/"
            className="underline text-[16px] text-gray-400 hover:text-primary"
          >
            {"print(Portfolio)"}
          </Link>
        </div>
      </div>
    </>
  );
}
