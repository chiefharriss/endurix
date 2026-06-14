import Image from "next/image";
import Link from "next/link";
import { Instagram, Send, Video } from "lucide-react";
import { assetSlots, contacts, navItems } from "@/data/site";

const socialLinks = [
  { href: contacts.telegramHref, label: "Telegram", Icon: Send },
  { href: contacts.tiktokHref, label: "TikTok", Icon: Video },
  { href: contacts.instagramHref, label: "Instagram", Icon: Instagram }
];

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-asphalt">
      <div className="page-shell grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="relative h-16 w-72 max-w-full">
            <Image src={assetSlots.textLogo} alt="ENDURIX" fill sizes="288px" className="object-contain object-left" />
          </div>
          <p className="mt-5 max-w-md text-bone/65">
            Тренировки, развитие навыка, эндуро-атмосфера и люди, которые любят ездить там, где заканчивается обычная дорога.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center border border-bone/15 bg-bone/[0.03] text-bone transition hover:border-track hover:text-track"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
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
          <a
            href={contacts.phoneHref}
            className="inline-flex min-h-12 items-center justify-center border border-bone/24 px-5 py-3 text-sm font-black uppercase text-bone transition hover:border-track hover:text-track"
          >
            {contacts.phoneText}
          </a>
        </div>
      </div>
    </footer>
  );
}
