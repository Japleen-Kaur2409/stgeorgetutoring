import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const subjectOptions = [
  "Mathematics",
  "Science",
  "English",
  "SAT Preparation",
  "IELTS / ESL",
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Ready to get started?</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Reach out to book a session, ask about availability, or learn more about the program.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-border/70 bg-background shadow-sm">
          <CardHeader>
            <CardTitle>Inquiry form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 text-sm text-muted-foreground">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="name">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="phone">Phone</label>
                  <Input id="phone" placeholder="Phone number" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="className">Class / Course name</label>
                  <Input id="className" placeholder="e.g. Grade 10 Math" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="school">School</label>
                <Input id="school" placeholder="Enter your school" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Subjects</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {subjectOptions.map((subject) => (
                    <label key={subject} className="flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-sm text-foreground">
                      <input type="checkbox" className="rounded border-border text-primary" />
                      {subject}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Tell us a bit about what you need help with"
                />
              </div>

              <button type="submit" className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Submit Inquiry
              </button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-background shadow-sm">
          <CardHeader>
            <CardTitle>Contact details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-primary" />
              <a href="mailto:japleenkaur2409@gmail.com" className="transition-colors hover:text-foreground">
                japleenkaur2409@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+16474712123" className="transition-colors hover:text-foreground">
                +1 6474712123
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>OISE Building, University of Toronto, near St. George Station</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
