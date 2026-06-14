import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-black uppercase transition";
  const variants = {
    primary: "bg-track text-bone hover:bg-bone hover:text-asphalt",
    ghost: "border border-bone/24 text-bone hover:border-track hover:text-track",
    dark: "bg-asphalt text-bone shadow-redline hover:bg-track"
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const external = href.startsWith("http") || href.startsWith("tel:");

  if (external) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
