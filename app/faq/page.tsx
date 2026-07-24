import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "Who is tutoring for?", answer: "The sessions are designed for students who want support in school subjects, exam prep, or English-language learning." },
  { question: "What subjects are offered?", answer: "Mathematics, Science, English, SAT preparation, and IELTS/ESL support are available." },
  { question: "How large are the groups?", answer: "Groups stay small so students can receive more personal attention." },
  { question: "Where are classes held?", answer: "Sessions take place in the OISE Building near St. George Station on the University of Toronto campus." },
  { question: "How do I register?", answer: "You can book a session directly through the contact page or email for availability." },
  { question: "Can university students attend?", answer: "Yes. University students are welcome for academic support and exam preparation." },
];

export default function FaqPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Questions students and families often ask.</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">A quick guide to the tutoring experience, schedule, and registration process.</p>
      </div>
      <div className="mt-12 rounded-[2rem] border border-border/70 bg-background/90 p-4 shadow-sm sm:p-8">
        <Accordion type="multiple">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base text-foreground">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base leading-7">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
