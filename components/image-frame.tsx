import Image from "next/image";

export function ImageFrame({
  src,
  alt,
  label,
  priority = false,
  className = "",
  imageClassName = ""
}: {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`asset-fallback noise relative min-h-72 overflow-hidden border border-bone/10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover opacity-95 ${imageClassName}`}
      />
      {label ? (
        <div className="absolute bottom-0 left-0 bg-track px-4 py-2 font-display text-sm uppercase text-bone">
          {label}
        </div>
      ) : null}
    </div>
  );
}
