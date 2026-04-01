import { Toaster } from "@/components/ui/sonner";
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
