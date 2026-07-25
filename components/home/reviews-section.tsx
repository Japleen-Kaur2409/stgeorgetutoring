"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

const reviews = [
  {
    name: "Priya S.",
    role: "IELTS Student",
    quote:
      "I had been stuck at 5.5 bands in Speaking and Writing for over 3 months, even after studying abroad. I started sessions with Japleen ma'am and in just one month, I scored a 7 band overall. Her feedback was so specific — she'd point out exactly what was pulling my score down and how to fix it. I was finally able to apply for my PR. I genuinely don't think I could have done it without her.",
  },
  {
    name: "Mrs. Amina K.",
    role: "Parent (Grade 7)",
    quote:
      "My son used to dread math homework every single night. Since joining St. George Tutoring, that's completely changed — he actually asks to go to his sessions. Japleen explains things in a way that makes sense to him, and I've seen a real jump in his test scores in just a couple of months. As a parent, the peace of mind is worth every penny.",
  },
  {
    name: "Daniel W.",
    role: "University Student (CSC148)",
    quote:
      "I was falling behind in my intro CS course and honestly considering dropping it. Japleen tutored me through recursion and data structures, and not only did I pass, I ended up genuinely enjoying the material. She actually understands the content at a deep level, not just enough to get by — you can tell from how she explains it.",
  },
  {
    name: "Mr. Chen",
    role: "Parent (Grade 10)",
    quote:
      "We tried a few tutoring services before this one and none of them stuck. What's different here is that it's the same instructor every single week, so she actually knows where my daughter is struggling instead of starting from scratch each time. Her grades in Grade 10 Math have gone from low 70s to consistently in the 90s.",
  },
  {
    name: "Sarah T.",
    role: "SAT Student",
    quote:
      "I went from a 650 to a 780 on SAT Math after just six weeks with Japleen. She didn't just drill practice questions — she taught me how to actually think through problems faster, which helped on every section, not just math. Worth every session.",
  },
  {
    name: "Mrs. Fernandes",
    role: "Parent (Grade 6)",
    quote:
      "My daughter was very shy about asking questions in her regular school class. The small group setting at St. George Tutoring gave her the confidence to speak up and ask things she'd normally keep to herself. Her report card this term was the best it's ever been.",
  },
  {
    name: "Ravi M.",
    role: "ESL Student",
    quote:
      "I moved to Canada last year and my English wasn't strong enough for the classes I wanted to take. Japleen worked with me on both grammar and confidence in speaking. Within a few months I felt ready to join regular classes without needing extra support. She's patient and never made me feel embarrassed about mistakes.",
  },
];

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleReviews = useMemo(() => {
    const items = [] as typeof reviews;
    for (let offset = 0; offset < 3; offset += 1) {
      items.push(reviews[(activeIndex + offset) % reviews.length]);
    }
    return items;
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reviews"
          title="Families and students trust the experience"
          description="A consistent teaching approach, thoughtful feedback, and visible results are what parents and students keep coming back for."
        />

        <div className="mt-12 rounded-[2rem] border border-border/70 bg-muted/35 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={showPrevious}
                className="rounded-full border border-border/70 bg-background p-2 text-foreground transition hover:bg-accent"
                aria-label="Show previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="rounded-full border border-border/70 bg-background p-2 text-foreground transition hover:bg-accent"
                aria-label="Show next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              {activeIndex + 1} / {reviews.length}
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <Card key={review.name} className="border-border/70 bg-background/95 shadow-sm">
                <CardContent className="space-y-4 p-6 sm:p-8">
                  <div className="text-lg text-amber-500">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm leading-7 text-muted-foreground">“{review.quote}”</p>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
