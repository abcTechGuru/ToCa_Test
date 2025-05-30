'use client';

import { cn } from '@/libs/functions';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  widthClassName?: string; // optional
};

export default function HoverIconButton({
  children,
  onClick,
  className,
  widthClassName = 'w-[141px] md:w-[148px]', // default width
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className={cn(
        `relative inline-flex items-center justify-center
         ${widthClassName} h-[40px]
         rounded-[60px] border border-white/50 
         font-sans text-[13px] font-normal tracking-[1.3px] uppercase text-white
         overflow-hidden transition-all duration-300
         before:content-[''] before:absolute before:inset-[3px] before:rounded-[57px]
         before:bg-transparent before:transition-all before:duration-300 before:z-0
         hover:before:bg-[#444]
         group`,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center gap-1">
        {children}
        {isHovered && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="7"
            fill="none"
            className="transition-opacity duration-300 opacity-100"
          >
            <path
              d="M2.729.317.279 3.175a.375.375 0 0 0 0 .65l2.45 2.858a.375.375 0 0 0 .632-.107l4.9-2.858a.375.375 0 0 0 0-.864L3.36.21a.375.375 0 0 0-.632.106z"
              fill="#C5A288"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
