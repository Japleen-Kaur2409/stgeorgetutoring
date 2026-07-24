import Link from "next/link";
import { BookOpen, Building2, Clock3, Sparkles, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const points = [
  {
    title: "One instructor, every session",
    description:
      "No rotating tutors, no re-explaining where you left off. Every class is taught personally by our founder, so your progress carries forward week to week.",
    icon: Users2,
  },
  {
    title: "Small-group learning",
    description:
      "Sessions stay small enough for real interaction and individual attention — but affordable enough to attend consistently, not just once a month.",
    icon: BookOpen,
  },
  {
    title: "Concepts over memorization",
    description:
      "We teach the why behind the material, not just the answer. That is what makes it stick past the next test.",
    icon: Sparkles,
  },
  {
    title: "Transparent, accessible pricing",
    description:
      "$25/hour drop-in, or $200 every two weeks for unlimited access to weekday group sessions — a fraction of typical private tutoring rates.",
    icon: Sparkles,
  },
  {
    title: "Convenient location & hours",
    description:
      "Based at the OISE Building, steps from St. George Station. Open Monday–Friday, 6–9 PM, when students actually need help.",
    icon: Building2,
  },
  {
    title: "Every level, one place",
    description:
      "From Grade 6 foundations to first-year university courses, plus SAT prep and IELTS/ESL support — one consistent teaching approach across every stage.",
    icon: Clock3,
  },
];

export default function WhyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why St. George Tutoring</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Small groups. One instructor. Real understanding.</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          We built St. George Tutoring around a simple gap in the market: private tutoring gets results but costs too much, and classroom-sized group lessons rarely give students the attention they need. We sit right in between.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <Card key={point.title} className="border-border/70 bg-background shadow-sm">
              <CardContent className="space-y-4 p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{point.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 border-border/70 bg-muted/50 shadow-sm">
        <CardContent className="space-y-4 p-8">
          <h2 className="text-xl font-semibold text-foreground">An instructor who has lived it</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            96% in Grade 12 Math, a perfect 800/800 SAT Math score, and hands-on experience across ESL teaching, university tutoring, and current work as a GenAI Engineer — someone who has recently been exactly where your student is now.
          </p>
          <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Book a Session
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
