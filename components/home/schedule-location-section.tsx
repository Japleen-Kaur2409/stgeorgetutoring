"use client";

import { motion } from "framer-motion";
import { Clock3, MapPin, School, TrainFront } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

const details = [
  {
    title: "Hours",
    value: "Monday–Friday",
    description: "6:00 PM – 9:00 PM",
    icon: Clock3,
  },
  {
    title: "Location",
    value: "OISE Building",
    description: "Near St. George Station",
    icon: MapPin,
  },
  {
    title: "Campus",
    value: "University of Toronto",
    description: "Convenient downtown access",
    icon: School,
  },
];

export function ScheduleLocationSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Schedule & location"
          title="Flexible evenings, easy downtown access"
          description="Sessions are held in a welcoming learning environment close to the city’s core."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-primary/10 to-background p-0 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <TrainFront className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Downtown convenience
                  </p>
                  <p className="text-lg font-semibold text-foreground">A short trip from St. George Station</p>
                </div>
              </div>
              <div className="mt-8 rounded-3xl border border-border/70 bg-background/90 p-6 shadow-inner">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">OISE Building</p>
                    <p className="text-sm text-muted-foreground">University of Toronto, Toronto</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground">Monday–Friday</p>
                    <p className="mt-1 text-sm text-muted-foreground">6:00 PM – 9:00 PM</p>
                  </div>
                  <div className="rounded-2xl bg-muted p-4">
                    <p className="text-sm font-semibold text-foreground">Easy access</p>
                    <p className="mt-1 text-sm text-muted-foreground">Walking distance from transit</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="border-border/70 bg-background shadow-sm">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{detail.title}</p>
                        <p className="mt-1 text-base font-medium text-foreground">{detail.value}</p>
                        <p className="text-sm text-muted-foreground">{detail.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
