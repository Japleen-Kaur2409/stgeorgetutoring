"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CircleDollarSign,
  MessageCircleHeart,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

const features = [
  {
    title: "Small Group Learning",
    description:
      "Focused sessions that balance support, accountability, and peer learning.",
    icon: Users,
  },
  {
    title: "Personally Taught",
    description:
      "Every session is taught directly by the instructor, not delegated to assistants.",
    icon: MessageCircleHeart,
  },
  {
    title: "Affordable Pricing",
    description:
      "Flexible options designed to make high-quality tutoring accessible and sustainable.",
    icon: CircleDollarSign,
  },
  {
    title: "Convenient Downtown Location",
    description:
      "Meet in the OISE Building near St. George Station for easy access.",
    icon: Building2,
  },
];

export function WhyChooseSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why choose us"
          title="A tutoring experience built around clarity, support, and progress"
          description="Whether you need help catching up or preparing for a major exam, the experience is designed to feel calm, focused, and personal."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full border-border/70 bg-background/80 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{feature.description}</p>
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
