'use client';

import { useRef, useState } from 'react';
import CocktailCard from './CocktailCard';
import type { SanityImage } from '@/sanity/types';

type Cocktail = {
  title: string;
  image: SanityImage;
};

export default function CocktailScrollList({ cocktails }: { cocktails: Cocktail[] }) {
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

  const scrollProps =
    typeof window !== 'undefined' && window.innerWidth < 768
      ? {
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
      }
      : {};

  return (
    <div
      ref={scrollRef}
      {...scrollProps}
      className="overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none hide-scrollbar md:cursor-default"
    >
      <div className="flex gap-3 md:gap-4 px-4 md:px-0 w-max">
        {cocktails.map((item, idx) => (
          <CocktailCard key={idx} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}
