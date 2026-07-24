import { GraduationCap, Sparkles, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  "Scored 96% in Grade 12 Math, a perfect 800/800 on the SAT Math section on my first attempt, and 100% in Math on the Grade 10 Indian Central Board exams",
  "Dean's List Scholar and recipient of an international scholarship at the University of Toronto, in a program grounded in mathematical reasoning, algorithms, and problem-solving",
  "Currently working as a GenAI Engineer at RBC, building AI tools used across the organization",
  "Two years of experience teaching ESL in India before university, working with students across a wide range of ages and learning styles",
  "Recognized leader of a university study group supporting CS students for the past two years, and experienced one-on-one tutor for university-level Computer Science and Statistics students",
  "Captain of my university badminton team and a TEDx speaker",
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Meet Japleen, the founder of St. George Tutoring.</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          I’m Japleen, the founder of St. George Tutoring. My path here started early: I found the pace of Grade 9 math so straightforward that I worked through most of Grade 10 and 11 content on my own, and that early head start turned into a genuine love for teaching math to students who were ready to be pushed further.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/70 bg-background shadow-sm">
          <CardContent className="space-y-4 p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><GraduationCap className="size-5" /></div>
            <h2 className="text-2xl font-semibold text-foreground">Why I teach</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              What ties everything together is a simple belief: every student has a ceiling that is higher than their curriculum, and my job is to find it. I don’t just teach students to get through material — I connect it to bigger ideas so the subject feels like it’s actually going somewhere.
            </p>
          </CardContent>
        </Card>
        <Card className="border-border/70 bg-background shadow-sm">
          <CardContent className="space-y-4 p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Users2 className="size-5" /></div>
            <h2 className="text-2xl font-semibold text-foreground">What I tutor</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              I tutor Math, Computer Science, Science, and English, in person and with flexible scheduling. I’d love to meet your child where they are and help them find that next level.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 border-border/70 bg-muted/50 shadow-sm">
        <CardContent className="space-y-5 p-8">
          <div className="flex items-start gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/20 text-secondary-foreground"><Sparkles className="size-5" /></div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">A snapshot of the academic and professional experience I bring into each session.</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
