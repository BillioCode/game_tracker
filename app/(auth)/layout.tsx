import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen">
        <div className="absolute top-8 left-12">
          <Link href="/" className={buttonVariants({ variant: "secondary" })}>
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </div>
        {children}
      </main>
    </>
  );
}
