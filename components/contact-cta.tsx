import { Phone, Send, Video } from "lucide-react";
import { contacts } from "@/data/site";
import { ButtonLink } from "@/components/button-link";

export function ContactCta() {
  return (
    <div className="border border-track/45 bg-track p-6 text-bone sm:p-8">
      <p className="font-display text-3xl uppercase leading-none sm:text-5xl">Запишись на тренировку ENDURIX</p>
      <p className="mt-4 max-w-2xl text-bone/80">
        Напиши в Telegram или позвони, чтобы подобрать формат тренировки под твой уровень.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href={contacts.telegramHref} variant="dark">
          <Send size={18} /> Telegram
        </ButtonLink>
        <ButtonLink href={contacts.phoneHref} variant="dark">
          <Phone size={18} /> Позвонить
        </ButtonLink>
        <ButtonLink href={contacts.tiktokHref} variant="dark">
          <Video size={18} /> TikTok
        </ButtonLink>
      </div>
    </div>
  );
}
