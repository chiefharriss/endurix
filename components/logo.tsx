import Image from "next/image";
import { assetSlots } from "@/data/site";

export function Logo({ large = false }: { large?: boolean }) {
  return (
    <div className={`${large ? "h-28 w-[min(82vw,34rem)] sm:h-32" : "h-16 w-56 sm:w-64"} relative`}>
      <Image
        src={assetSlots.logo}
        alt="ENDURIX"
        fill
        sizes={large ? "(max-width: 640px) 82vw, 544px" : "256px"}
        className="object-contain object-left"
        priority={large}
      />
    </div>
  );
}
