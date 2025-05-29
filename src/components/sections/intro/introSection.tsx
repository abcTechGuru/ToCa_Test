'use client';

import type { SanityImage } from '@/sanity/types';
import SanityCard from './sanityCard';
import Container from '@/components/sections/Container';
import React from 'react';

type Card = {
  image: SanityImage;
  heading: string;
  subtext?: string;
  buttonText: string;
};

type IntroSectionProps = {
  heroCard: Card | null;
  storyCard: Card | null;
  menuCard: Card | null;
  experienceCards: Card[]; // expect array but can be empty
};

export default function IntroSection({
  heroCard,
  storyCard,
  menuCard,
  experienceCards,
}: IntroSectionProps) {

  return (
    <section className="text-white -mt-[75px] sm:mt-0 pt-0 md:pt-[240px] pb-[0px] md:pb-[118px]">
      <Container className="">
        <div className="grid grid-cols-1 gap-4">
          {/* HeroCard - full width on first line */}
          <SanityCard
            image={heroCard?.image}
            heading={heroCard?.heading}
            subtext={heroCard?.subtext}
            buttonText={heroCard?.buttonText}
            className=" w-full h-[672px] flex-shrink-0 mx-auto"
          />

          {/* StoryCard and MenuCard side by side on second line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            <SanityCard
              image={storyCard?.image}
              heading={storyCard?.heading}
              subtext={storyCard?.subtext}
              buttonText={storyCard?.buttonText}
              className=" w-full h-[640px] sm:h-[672px] flex-shrink-0 mx-auto"
            />

            <SanityCard
              image={menuCard?.image}
              heading={menuCard?.heading}
              subtext={menuCard?.subtext}
              buttonText={menuCard?.buttonText}
              className=" w-full h-[640px] sm:h-[672px] flex-shrink-0 mx-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
            {experienceCards?.map((card, index) => (
              <SanityCard
                key={index}
                image={card?.image}
                heading={card?.heading}
                subtext={card?.subtext}
                buttonText={card?.buttonText}
                className="w-full h-[320px] sm:h-[680px] flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </Container>
    </section >
  );
}
