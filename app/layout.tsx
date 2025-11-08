// app/layout.tsx
import "@/app/ui/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { libreBaskerville } from "@/app/ui/fonts";

export const metadata = {
  title: "Suraj Kumal",
  description: "I am a software developer",
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
