'use client';

import SectionHeader from './SectionHeader';
import CocktailScrollList from './CocktailScrollList';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import type { SanityImage } from '@/sanity/types';

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
  return (
    <section className="relative py-[85px] md:py-[0px] text-white overflow-hidden">
      <SanityImageBlock
        image={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay bg-[linear-gradient(0deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.5)_50%)]"
        fill
        priority
      />
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#161616] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(22,22,22,0)] via-[rgba(22,22,22,0.3)] to-[rgba(22,22,22,0.5)] mix-blend-overlay" />

      <div className="relative z-10 text-center">
        <SectionHeader title={title} text={mainText} buttonText={buttonText} />
        <CocktailScrollList cocktails={cocktails} />
      </div>
    </section>
  );
}
