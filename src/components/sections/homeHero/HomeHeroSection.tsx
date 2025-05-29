import { cn } from '@/libs/functions';
import type { SanityImage } from '@/sanity/types';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import HeroContentLine from '@/components/utility/HeroContentLine';

type HomeHeroSectionProps = {
  backgroundImage: SanityImage;
  heroContentModern: string;
  heroContentMexican: string;
  heroContentSteakhouse: string;
};

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
          <HeroContentLine position="start">{heroContentModern}</HeroContentLine>
          <HeroContentLine position="middle">{heroContentMexican}</HeroContentLine>
          <HeroContentLine position="end">{heroContentSteakhouse}</HeroContentLine>
        </div>
      </div>
    </section>
  );
}
