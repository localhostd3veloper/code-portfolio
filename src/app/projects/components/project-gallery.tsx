'use client';

import { useState } from 'react';
import { DURATION, EASE } from '@/constants/motion';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

export default function ProjectGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const go = (delta: number) =>
    setIndex((current) => (current + delta + images.length) % images.length);

  return (
    <div className="border-border group bg-sidebar relative aspect-video overflow-hidden border-b">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: DURATION.fast, ease: EASE.out },
          }}
          exit={{ opacity: 0, transition: { duration: DURATION.instant, ease: EASE.in } }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${name} screenshot ${index + 1}`}
            fill
            quality={100}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={`Previous screenshot of ${name}`}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          >
            <VscChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={`Next screenshot of ${name}`}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          >
            <VscChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1} of ${name}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
