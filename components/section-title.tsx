export function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 max-w-4xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl uppercase leading-none sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 max-w-3xl text-bone/70">{text}</p> : null}
    </div>
  );
}
