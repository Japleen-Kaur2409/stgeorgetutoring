import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Pricing</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Flexible options for every learning rhythm.</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Choose a one-off session or a membership for steady weekly support.</p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/70 bg-background shadow-sm">
          <CardHeader>
            <CardTitle>Drop-In Session</CardTitle>
            <p className="text-sm text-muted-foreground">Perfect for a single boost or targeted help.</p>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-4xl font-semibold text-foreground">$25/hour</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> One-hour session</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Homework support</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Small group learning</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Flexible scheduling</li>
            </ul>
            <Link href="/contact" className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Book a Session
            </Link>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/5 shadow-[0_20px_60px_-30px_rgba(37,99,235,0.35)]">
          <CardHeader>
            <CardTitle>Membership</CardTitle>
            <p className="text-sm text-muted-foreground">Best value for consistent weekly support.</p>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-4xl font-semibold text-foreground">$200 / 2 weeks</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Unlimited weekday sessions</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Priority booking</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Homework support</li>
              <li className="flex items-center gap-2"><Check className="size-4 text-primary" /> Best value for ongoing learners</li>
            </ul>
            <Link href="/contact" className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Join Membership
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
