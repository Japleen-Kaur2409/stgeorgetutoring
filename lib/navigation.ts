export type NavItem = {
  label: string;
  href: string;
};

export const SITE_NAME = "St. George Tutoring Sessions";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/why" },
  { label: "Subjects", href: "/subjects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const BOOK_SESSION_CTA = {
  label: "Book a Session",
  href: "/contact",
};
