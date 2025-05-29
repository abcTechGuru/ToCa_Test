import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityImage = SanityImageObject & {
  alt?: string;
};

export type Navigation = {
  mainNav: SanityLink[];
  secondaryNav: SanityLink[];
};

export type HeaderNav = Navigation & {
  backgroundImage: SanityImage;
};

export type SanityLink = {
  title: string;
  isExternal: boolean;
  isNewWindow: boolean;
  external?: string;
  internal?: Route;
};

export type Route = {
  slug: {
    current: string;
  };
} & (
    | {
      isRedirect: true;
      redirectRoute: Route;
      page?: never;
    }
    | {
      isRedirect: false;
      page: Page;
      redirectRoute?: never;
    }
  );

export type Page = {
  title: string;
  sections: Section[];
};

type BaseSection = {
  _type: string;
  _key: string;
};

type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection';
  backgroundImage: SanityImage;
  heroContentModern: string;
  heroContentMexican: string;
  heroContentSteakhouse: string;
};

export type Section = HomeHeroSection;

export type IntroSection = BaseSection & {
  _type: 'introSection';
  heroCard: Card | null;
  storyCard: Card | null;
  menuCard: Card | null;
  experienceCards: Card[];
};

export type Card = {
  image: SanityImage;
  heading: string;
  subtext?: string;
  buttonText: string;
};
