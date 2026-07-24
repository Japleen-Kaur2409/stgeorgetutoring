"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Users2 } from "lucide-react";

import profileImage from "@/images/japleen-profile.jpeg";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

const points = [
  "Experienced instruction with a strong academic foundation",
  "Every session is led directly by the instructor",
  "A clear focus on concepts, confidence, and long-term understanding",
  "Small-group support that stays personal and practical",
];

export function AboutInstructorSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About the instructor"
          title="Thoughtful teaching from someone who genuinely enjoys helping students grow"
          description="The teaching approach is practical, encouraging, and centered on helping students build lasting understanding."
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <Card className="overflow-hidden border-border/70 bg-background shadow-sm">
            <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-primary/10 via-background to-secondary/20">
              <Image
                src={profileImage}
                alt="Instructor portrait"
                fill
                className="object-cover"
              />
            </div>
          </Card>
          <Card className="border-border/70 bg-background shadow-sm">
            <CardContent className="space-y-6 p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    Instructor profile
                  </p>
                  <p className="text-lg font-semibold text-foreground">Experienced, attentive instruction with a strong academic foundation</p>
                </div>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  Each session is taught with care, patience, and a strong emphasis on building lasting understanding.
                </p>
                <p>
                  The goal is to help students not only improve their results, but also feel more confident and capable in the subject itself.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {points.map((point) => (
                  <div key={point} className="flex items-start gap-2 rounded-2xl bg-muted/70 p-3">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-primary/10 p-3 text-sm text-primary">
                <Users2 className="size-4" />
                Small-group settings keep learning focused, supportive, and personal.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
