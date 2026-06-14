import { ArrowRight, Phone, Send, Video } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { GalleryGrid } from "@/components/gallery-grid";
import { ImageFrame } from "@/components/image-frame";
import { SectionTitle } from "@/components/section-title";
import { assetSlots, contacts, mapWidgetSrc, supportLinks, trainingLevels } from "@/data/site";

export default function Home() {
  return (
    <>
      <section id="top" className="noise relative min-h-[calc(100vh-5rem)] overflow-hidden">
        <div className="absolute inset-0 asset-fallback">
          <ImageFrame
            src={assetSlots.hero}
            alt="Райдер ENDURIX на бревне"
            priority
            className="h-full min-h-full border-0 opacity-95"
            imageClassName="object-[58%_48%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/74 to-asphalt/10" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-asphalt to-transparent" />
        <div className="page-shell relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-14">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl">
              ENDURIX — эндуро-тренировки в Московской области
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contacts.telegramHref}>
                Записаться в Telegram <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href={contacts.phoneHref} variant="ghost">
                Позвонить
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="trainings" className="scroll-mt-24 section-pad">
        <div className="page-shell">
          <div className="mb-10 max-w-4xl">
            <p className="eyebrow">Формат под твой уровень</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-7xl">Тренировки</h2>
          </div>
          <div className="mb-8 border border-track/45 bg-bone/[0.04] p-6 text-bone shadow-redline sm:p-8">
            <p className="border-l-4 border-track pl-5 font-display text-2xl uppercase leading-none sm:text-4xl">
              Тренировки проводятся на своем мотоцикле
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {trainingLevels.map((level) => (
              <article key={level.title} className="border border-bone/12 bg-bone/[0.03] p-6 shadow-redline">
                <p className="font-display text-5xl uppercase text-track">{level.title}</p>
                <p className="mt-4 font-bold text-bone">{level.lead}</p>
                <p className="mt-3 text-bone/65">{level.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="flex min-h-48 flex-col border border-bone/12 p-7">
              <h3 className="font-display text-4xl uppercase">Индивидуальная тренировка</h3>
              <p className="mt-auto pt-8 font-display text-4xl uppercase text-track">1500 ₽ / 1 час</p>
            </article>
            <article className="flex min-h-48 flex-col border border-bone/12 p-7">
              <h3 className="font-display text-4xl uppercase">Групповая тренировка</h3>
              <p className="mt-auto pt-8 font-display text-4xl uppercase text-track">По запросу</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-bone text-asphalt">
        <div className="page-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageFrame
            src={assetSlots.zakhar}
            alt="Захар Гринин на мотоцикле"
            className="min-h-[38rem]"
            imageClassName="object-[50%_38%]"
          />
          <div>
            <p className="font-display text-4xl uppercase leading-none text-track sm:text-6xl">Обо мне</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none sm:text-6xl">Захар Гринин</h2>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-asphalt/72">
              <p>
                Я занимаюсь эндуро с 10 лет и активно участвую в соревнованиях по всей России. За годы тренировок и гонок я получил большой опыт езды по самому разному рельефу — от Московского кантри до хардового Геленджика.
              </p>
              <p>
                Сегодня я выступаю на мотоцикле AJ1 AX300 2T, продолжаю регулярно тренироваться и развивать свои навыки. Для меня эндуро — это не просто спорт, а образ жизни, который объединяет людей, любовь к приключениям и постоянное стремление стать лучше.
              </p>
              <p>
                На тренировках ENDURIX я делюсь реальным гоночным опытом и помогаю райдерам любого уровня подготовки увереннее чувствовать себя на мотоцикле, правильно работать с техникой и получать удовольствие от каждой поездки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 section-pad">
        <div className="page-shell">
          <SectionTitle eyebrow="Галерея" title="Тренировки, гонки, покатушки" />
          <GalleryGrid limit={5} />
        </div>
      </section>

      <section id="support" className="scroll-mt-24 border-y border-bone/10 bg-asphalt text-bone">
        <div className="page-shell grid gap-8 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <h2 className="font-display text-5xl uppercase leading-none text-bone sm:text-7xl">
              Поддержка трассы ENDURIX
            </h2>
            <div className="mt-6 grid gap-4 text-lg leading-8 text-bone/72">
              <p>
                Трасса требует постоянного ухода и развития. Мы регулярно расчищаем новые маршруты, убираем завалы, восстанавливаем препятствия, строим секции и поддерживаем территорию в хорошем состоянии.
              </p>
              <p>
                Если вам нравится кататься на нашей площадке и вы хотите помочь её развитию, вы можете поддержать проект ENDURIX.
              </p>
              <p>
                Все средства идут на обслуживание трассы, инструмент, расходные материалы и создание новых интересных маршрутов.
              </p>
            </div>
          </div>
          <div className="border border-track/35 bg-bone/[0.04] p-6 text-bone shadow-redline sm:p-8">
            <p className="font-display text-3xl uppercase leading-none sm:text-5xl">Поддержать трассу</p>
            <div className="mt-6 grid gap-3">
              <ButtonLink href={supportLinks.sber}>СБЕР</ButtonLink>
              <ButtonLink href={supportLinks.tbank} variant="ghost">Т-БАНК</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="scroll-mt-24 page-shell pb-16">
        <div className="border border-track/45 bg-track p-6 text-bone sm:p-8">
          <p className="font-display text-3xl uppercase leading-none sm:text-5xl">Запишись на тренировку ENDURIX</p>
          <p className="mt-4 max-w-2xl text-bone/80">Напиши в Telegram или позвони, чтобы подобрать формат тренировки под твой уровень.</p>
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
      </section>

      <section id="location" className="scroll-mt-24 section-pad">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Локация"
            title="Осеченки, Московская область"
            text="Тренировки проходят на стадионе, построенном Игорем Семенюком. Ниже карта с точкой, чтобы сразу было понятно, куда ехать."
          />
          <div className="min-h-[24rem] overflow-hidden border border-bone/10 bg-black">
            <iframe
              src={mapWidgetSrc}
              title="Карта локации ENDURIX"
              className="h-[24rem] w-full sm:h-[30rem]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </>
  );
}
