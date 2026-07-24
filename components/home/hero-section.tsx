"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.16),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Premium support for ambitious learners
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Learn with Confidence. Achieve More.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Affordable small-group tutoring in Math, Science, English, SAT, and IELTS,
            guided by a dedicated educator with a strong background in mathematics, logic,
            and high-level academic coaching.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Book a Session
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2 shadow-sm">
              <BookOpen className="size-4 text-primary" />
              Small-group support
            </span>
            <span className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2 shadow-sm">
              <GraduationCap className="size-4 text-primary" />
              Strong academic mentorship
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto w-full max-w-xl"
        >
          <div className="relative rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-white to-secondary/20 p-5 shadow-[0_30px_90px_-35px_rgba(37,99,235,0.3)] sm:p-8">
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-sm font-medium text-primary">
              <BrainCircuit className="size-4" />
              Concept-driven teaching
            </div>
            <div className="mt-2 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <Card className="border-0 bg-white/90 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-primary">Weekly Focus</p>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">
                        Algebra + Writing
                      </h3>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <BookOpen className="size-5" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      "Timed practice questions",
                      "Step-by-step feedback",
                      "Confidence-building review",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="size-2 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <Card className="border-0 bg-background/90 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-secondary/20 p-3 text-secondary-foreground">
                        <GraduationCap className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Personalized help</p>
                        <p className="text-sm text-muted-foreground">Built around your pace</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-primary/95 text-primary-foreground shadow-sm">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">Flexible sessions</p>
                    <p className="mt-2 text-2xl font-semibold">Mon–Fri • 6–9 PM</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
