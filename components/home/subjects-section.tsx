"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FlaskConical,
  Languages,
  Calculator,
  Sparkles,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

const subjects = [
  {
    title: "Mathematics",
    description: "Algebra, geometry, functions, and exam preparation with clear step-by-step support.",
    icon: Calculator,
  },
  {
    title: "Science",
    description: "Biology, chemistry, and physics help that makes complex concepts easier to grasp.",
    icon: FlaskConical,
  },
  {
    title: "English",
    description: "Writing, reading comprehension, grammar, and essay structure support.",
    icon: BookOpen,
  },
  {
    title: "SAT Preparation",
    description: "Targeted practice for reading, writing, and math to improve confidence and scores.",
    icon: Sparkles,
  },
  {
    title: "IELTS / ESL",
    description: "Speaking, listening, reading, writing, and vocabulary support for international students.",
    icon: Languages,
  },
];

export function SubjectsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Subjects"
          title="Support for core subjects and high-stakes exams"
          description="The sessions are structured to be practical, encouraging, and tailored to the learner’s needs."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <Card className="h-full border-border/70 bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
