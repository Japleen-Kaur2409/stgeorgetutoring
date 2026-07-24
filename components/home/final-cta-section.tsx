"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-[2rem] border border-primary/20 bg-gradient-to-r from-primary/10 via-background to-secondary/20 px-6 py-12 text-center shadow-[0_20px_60px_-30px_rgba(37,99,235,0.3)] sm:px-10 lg:flex-row lg:text-left"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Ready to begin?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to Improve Your Grades?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Book your first tutoring session and start building confidence with focused support.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Book a Session
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </section>
  );
}
