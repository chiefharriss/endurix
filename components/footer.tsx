import Link from "next/link";
import { contacts, navItems } from "@/data/site";
import { ButtonLink } from "@/components/button-link";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-asphalt">
      <div className="page-shell grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl uppercase">ENDURIX</p>
          <p className="mt-5 max-w-md text-bone/65">
            Тренировки, развитие навыка, эндуро-атмосфера и люди, которые любят ездить там, где заканчивается обычная дорога.
          </p>
        </div>
        <nav className="grid gap-3 text-sm font-bold uppercase text-bone/70">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-track">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="grid gap-3">
          <p className="text-sm text-bone/55">{contacts.location}</p>
          <ButtonLink href={contacts.telegramHref}>Telegram</ButtonLink>
          <ButtonLink href={contacts.phoneHref} variant="ghost">
            {contacts.phoneText}
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
