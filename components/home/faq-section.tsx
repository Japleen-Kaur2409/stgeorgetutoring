"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/home/section-heading";

const faqs = [
  {
    question: "Who is tutoring for?",
    answer:
      "The sessions are designed for middle school, high school, and university students who want clear support in core academic subjects or exam prep.",
  },
  {
    question: "What subjects are offered?",
    answer:
      "Mathematics, Science, English, SAT preparation, and IELTS/ESL support are available.",
  },
  {
    question: "How large are the groups?",
    answer:
      "Groups remain intentionally small so the instructor can give personalized attention and keep sessions focused.",
  },
  {
    question: "Where are classes held?",
    answer:
      "Sessions take place at the OISE Building, near St. George Station, on the University of Toronto campus.",
  },
  {
    question: "How do I register?",
    answer:
      "You can book a session directly through the contact page or reach out by email for availability and registration details.",
  },
  {
    question: "Can university students attend?",
    answer:
      "Yes. The program is open to university students as well, especially those seeking support with academic writing, study skills, or exam preparation.",
  },
];

export function FaqSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the most common questions"
          description="Everything you need to know before booking your first session."
          align="center"
          className="mx-auto"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 rounded-[2rem] border border-border/70 bg-background/90 p-4 shadow-sm sm:p-8"
        >
          <Accordion type="multiple">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-4 text-base text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
