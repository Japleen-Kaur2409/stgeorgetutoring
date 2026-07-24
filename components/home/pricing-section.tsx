"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

const dropInFeatures = [
  "One-hour session",
  "Homework support",
  "Small group learning",
  "Flexible scheduling",
];

const membershipFeatures = [
  "Unlimited weekday sessions (Mon–Fri, 6–9 PM)",
  "Priority booking",
  "Homework support",
  "Best value for consistent learners",
];

export function PricingSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple options for one-off support or ongoing progress"
          description="Choose the format that fits your schedule and goals."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <Card className="h-full border-border/70 bg-background shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Drop-In Session</CardTitle>
                <p className="text-sm text-muted-foreground">Great for targeted help or a one-time boost.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-semibold text-foreground">$25/hour</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {dropInFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Book a Session
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.08 }}>
            <Card className="relative h-full border-primary/30 bg-primary/5 shadow-[0_20px_60px_-30px_rgba(37,99,235,0.35)]">
              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                <Sparkles className="size-4" /> Best Value
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Membership</CardTitle>
                <p className="text-sm text-muted-foreground">Ideal for students who want steady support each week.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-semibold text-foreground">$200 / 2 weeks</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {membershipFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Join Membership
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
