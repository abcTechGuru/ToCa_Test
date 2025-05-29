'use client';

import { cn } from '@/libs/functions';

type DecorativeSeparatorProps = {
  lineWidth?: number; // optional max width
  className?: string;
};

export default function DecorativeSeparator({ lineWidth, className }: DecorativeSeparatorProps) {
  return (
    <div className={cn('flex items-center justify-center my-2 flex-grow gap-0', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="7"
        fill="none"
        className="hidden sm:inline-flex"
      >
        <path
          d="M6.271 6.683 8.72 3.825a.375.375 0 0 0 0-.65L6.271.317a.375.375 0 0 0-.632.105L.74 3.068a.375.375 0 0 0 0 .864l4.899 2.858a.375.375 0 0 0 .632-.107z"
          fill="#C5A288"
        />
      </svg>

      <div
        className="flex-grow border-t border-[#C5A288] opacity-50"
        style={{ maxWidth: lineWidth ? `${lineWidth - 20}px` : undefined }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="7"
        fill="none"
        className="hidden sm:inline-flex"
      >
        <path
          d="M2.729.317.279 3.175a.375.375 0 0 0 0 .65l2.45 2.858a.375.375 0 0 0 .632-.107l4.9-2.858a.375.375 0 0 0 0-.864L3.36.21a.375.375 0 0 0-.632.106z"
          fill="#C5A288"
        />
      </svg>
    </div>
  );
}
