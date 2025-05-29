import { cn } from '@/libs/functions';
import type { SanityImage } from '@/sanity/types';
import SanityImageBlock from '@/components/utility/SanityImageBlock';

type HomeHeroSectionProps = {
  backgroundImage: SanityImage;
  heroContentModern: string;
  heroContentMexican: string;
  heroContentSteakhouse: string;
  subtitle?: string;
};

type DecorativeSeparatorProps = {
  lineWidth?: number; // optional max width
};

export function DecorativeSeparator({ lineWidth }: DecorativeSeparatorProps) {
  return (
    <div className="flex items-center justify-center my-2 flex-grow gap-0">
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

export default function HomeHeroSection({
  backgroundImage,
  heroContentModern,
  heroContentMexican,
  heroContentSteakhouse,
}: HomeHeroSectionProps) {
  return (
    <section className="relative h-screen w-full">
      <SanityImageBlock image={backgroundImage} className="object-cover w-full h-full" priority />
      <div className="absolute inset-0 pointer-events-none sm:bg-[linear-gradient(180deg,rgba(22,22,22,0)_0%,var(--dark-gray)_100%)]" />

      <div
        className={cn(
          'absolute bottom-[112px] left-1/2 -translate-x-1/2 translate-y-0',
          'sm:bottom-0 sm:translate-y-1/2',
          'flex flex-col items-center text-center',
          'px-4 sm:px-6 md:px-10 lg:px-0 w-full max-w-[1020px]',
          'text-white font-serif uppercase leading-[100%]',
          'tracking-[0.1em]',
          '[font-variation-settings:"wght"400]',
          '[letter-spacing:clamp(4.885px,0.8vw,14px)]',
          '[font-size:clamp(48.853px,8vw,140px)]'
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 w-full">
            <span className="whitespace-nowrap">{heroContentModern}</span>
            <DecorativeSeparator />
          </div>
          <div className="flex items-center gap-2 w-full">
            <DecorativeSeparator />
            <span className="whitespace-nowrap">{heroContentMexican}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap">{heroContentSteakhouse}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
