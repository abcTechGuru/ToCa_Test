import type { Page } from '@/sanity/types';
import HomeHeroSection from '../sections/homeHero/HomeHeroSection';
import IntroSection from '../sections/intro/introSection';
import CocktailSection from '../sections/cocktail/CocktailSection';

const sections = {
  homeHeroSection: HomeHeroSection,
  introSection: IntroSection,
  cocktailSection: CocktailSection,
};

export function SectionRenderer({ section }: { section: Page['sections'][number] }) {
  console.log('Rendering section:', section);

  const { _type } = section;

  const SectionComponent = sections[_type];

  if (!SectionComponent) {
    console.warn(`No component found for section type: ${_type}`);
    return null;
  }

  return <SectionComponent {...section} />;
}
