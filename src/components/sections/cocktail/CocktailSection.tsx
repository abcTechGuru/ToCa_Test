'use client';

import { useRef, useState } from 'react';
import type { SanityImage } from '@/sanity/types';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import CocktailCard from './CocktailCard';
import SectionHeader from './SectionHeader';

type Cocktail = {
  title: string;
  image: SanityImage;
};

type CocktailSectionProps = {
  title: string;
  mainText: string;
  buttonText: string;
  backgroundImage: SanityImage;
  cocktails: Cocktail[];
};

export default function CocktailSection({
  title,
  mainText,
  buttonText,
  backgroundImage,
  cocktails,
}: CocktailSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative  py-[85px] md:py-[30px] text-white overflow-hidden">
      <SanityImageBlock
        image={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay bg-[linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.5)_50%)]"
        fill
        priority
      />
      <div className="absolute top-0 left-0 w-[100%] h-[150px] bg-gradient-to-b from-[#161616] to-transparent  " />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(22,22,22,0)] via-[rgba(22,22,22,0.3)] to-[rgba(22,22,22,0.5)] mix-blend-overlay" />

      <div className="relative z-10 text-center">
        <SectionHeader title={title} text={mainText} buttonText={buttonText} />

        <div
          ref={scrollRef}
          {...(typeof window !== 'undefined' && window.innerWidth < 768
            ? {
              onMouseDown: handleMouseDown,
              onMouseLeave: handleMouseLeave,
              onMouseUp: handleMouseUp,
              onMouseMove: handleMouseMove,
            }
            : {})}
          className="mt-16 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none hide-scrollbar md:cursor-default"
        >

          <div className="flex gap-3 md:gap-4 px-4 md:px-0 w-max">
            {cocktails.map((item, idx) => (
              <CocktailCard key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
