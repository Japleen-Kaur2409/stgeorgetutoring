import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

import { NAV_ITEMS, SITE_NAME } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/90 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
              SG
            </span>
            <div>
              <p className="font-heading text-base font-semibold text-foreground">{SITE_NAME}</p>
              <p className="text-sm text-muted-foreground">Premium tutoring with real support.</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Small-group tutoring designed to help students feel more confident, prepared, and capable.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <span>hello@stgeorgetutoring.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="size-4 text-primary" />
                <span>@stgeorgetutoring</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Location</p>
            <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>OISE Building, University of Toronto, near St. George Station</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 St. George Tutoring Sessions. All rights reserved.</p>
        <p>Built for ambitious learners.</p>
      </div>
    </footer>
  );
}
