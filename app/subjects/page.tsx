import Link from "next/link";
import { BookOpen, FlaskConical, Languages, Calculator, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const subjects = [
  { title: "Mathematics", description: "Algebra, functions, geometry, and exam prep with step-by-step support.", icon: Calculator },
  { title: "Science", description: "Biology, chemistry, and physics made easier with clear explanations.", icon: FlaskConical },
  { title: "English", description: "Writing, grammar, reading, and essay support for school and exams.", icon: BookOpen },
  { title: "SAT Preparation", description: "Focused prep for reading, writing, and math with confidence-building practice.", icon: Sparkles },
  { title: "IELTS / ESL", description: "Speaking, writing, listening, and reading support for English learners.", icon: Languages },
];

export default function SubjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Subjects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Support for the subjects that matter most.</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Every session is designed to make learning feel more manageable, structured, and rewarding.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          return (
            <Card key={subject.title} className="border-border/70 bg-background shadow-sm">
              <CardHeader>
                <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{subject.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{subject.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="mt-10">
        <Link href="/contact" className="text-sm font-semibold text-primary">Book a session →</Link>
      </div>
    </main>
  );
}
