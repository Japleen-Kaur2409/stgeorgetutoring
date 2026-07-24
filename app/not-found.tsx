import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Page not found.</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">The page you’re looking for doesn’t exist, but we can help you get back to learning.</p>
      <Button nativeButton={false} render={<Link href="/" />} className="mt-8">Go Home</Button>
    </main>
  );
}
