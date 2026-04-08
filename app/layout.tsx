import "@/app/ui/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { libreBaskerville, SpaceGrotesk, RobotoMono } from "@/app/ui/fonts";
import type { Metadata } from "next";
import { ModeToggle } from "@/components/ui/modetoggle";
const siteUrl = "https://surajkumal.com.np";
const siteName = "Suraj Kumal – Software Developer | T-shaped Engineer";
const siteDescription =
  "Software Developer specializing in full-stack with expertise in Laravel, Next.js, Node.js, Flutter and Django. Your vision, my code, a digital masterpiece.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s",
  },
  description: siteDescription,
  keywords: [
    "Suraj Kumal",
    "Software Developer",
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
    google: "_35b-dCtwSwFT_DRtUXB3hcsXMXJUpbkm83u9W4BqN8",
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
      className={`${SpaceGrotesk.className} ${RobotoMono.variable}`}
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
          <div className="absolute top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
