"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { contacts, navItems } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-asphalt/88 backdrop-blur">
      <div className="page-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/#top" aria-label="ENDURIX главная">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold uppercase text-bone/80 hover:text-track">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={contacts.telegramHref}>Записаться</ButtonLink>
        </div>

        <button
          className="grid h-11 w-11 place-items-center border border-bone/20 text-bone lg:hidden"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-bone/10 bg-asphalt lg:hidden">
          <nav className="page-shell grid gap-1 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-bone/10 py-4 font-display text-2xl uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink className="mt-4 w-full" href={contacts.telegramHref}>
              Записаться
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
