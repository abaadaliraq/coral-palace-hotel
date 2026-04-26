"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: readonly string[];
  alt: string;
};

export default function RoomGallery({ images, alt }: Props) {
  const safeImages = images.length ? images : ["/room1.jpg"];
  const [activeImage, setActiveImage] = useState(safeImages[0]);

  return (
    <div className="space-y-5">
      <div className="relative h-[320px] overflow-hidden rounded-[36px] bg-black md:h-[560px]">
        <Image
          src={activeImage}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
       {safeImages.map((image, index) => (
  <button
    key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`relative h-20 overflow-hidden rounded-[20px] border transition md:h-28 ${
              activeImage === image
                ? "border-[#caa46a] opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={image} alt={alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}