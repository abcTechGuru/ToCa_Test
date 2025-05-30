'use client';

import { ReactNode } from 'react';
import DecorativeSeparator from './DecorativeSeparator';

type HeroContentLineProps = {
  children: ReactNode;
  position: 'start' | 'middle' | 'end';
};

export default function HeroContentLine({ children, position }: HeroContentLineProps) {
  const content = (
    <span className="whitespace-nowrap">{children}</span>
  );

  return (
    <div className="flex items-center gap-2 w-full">
      {position === 'end' && content}
      {position === 'middle' && <DecorativeSeparator />}
      {position === 'middle' && content}
      {position === 'start' && content}
      {position === 'start' && <DecorativeSeparator className="mr-[15px]" />}
    </div>
  );
}
