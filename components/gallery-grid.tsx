import { galleryItems } from "@/data/site";
import { ImageFrame } from "@/components/image-frame";

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="grid auto-rows-[18rem] gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={
            index === 0
              ? "sm:col-span-2 lg:col-span-3 lg:row-span-2"
              : index === 1
                ? "lg:col-span-3"
                : "lg:col-span-2"
          }
        >
          <ImageFrame
            src={item.src}
            alt={item.title}
            label={item.category}
            className="h-full min-h-full"
            imageClassName={index === 0 ? "object-[50%_45%]" : "object-center"}
          />
        </div>
      ))}
    </div>
  );
}
