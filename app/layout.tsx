// app/layout.tsx
import "@/app/ui/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { libreBaskerville } from "@/app/ui/fonts";
import type { Metadata } from "next";

const siteUrl = "https://surajkumal.vercel.app";
const siteName = "Suraj Kumal - Software Developer";
const siteDescription =
  "Software Developer specializing in full-stack web development with expertise in React, Next.js, Node.js, Python, Django, and cloud technologies. Your vision, my code, a digital masterpiece.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Suraj Kumal",
  },
  description: siteDescription,
  keywords: [
    "Software Developer",
    "Suraj Kumal",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Django Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Laravel",
    "Express.js",
    ".NET Developer",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Azure",
    "Vercel",
    "Tailwind CSS",
  ],
  authors: [{ name: "Suraj Kumal" }],
  creator: "Suraj Kumal",
  publisher: "Suraj Kumal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  // manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: "/Dx.gif",
        width: 1200,
        height: 630,
        alt: "Suraj Kumal - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/Dx.gif"],
    creator: "@yourtwitterhandle", 
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={libreBaskerville.className}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
