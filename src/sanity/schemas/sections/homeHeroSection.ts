import { defineType } from 'sanity';

const homeHeroSection = defineType({
  name: 'homeHeroSection',
  title: 'Hero Section (Home)',
  type: 'object',
  fields: [
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      validation: (rule) => rule.required(), // Image is required to render the hero section properly
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string', // For accessibility and SEO
        },
      ],
    },
    {
      name: 'heroContentModern',
      type: 'string',
      title: 'Hero Content - Modern',
      validation: (rule) => rule.required(), // Text must be filled to show content on page
    },
    {
      name: 'heroContentMexican',
      type: 'string',
      title: 'Hero Content - Mexican',
      validation: (rule) => rule.required(),
    },
    {
      name: 'heroContentSteakhouse',
      type: 'string',
      title: 'Hero Content - Steakhouse',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Section (Home)', // How it shows in the Studio preview list
      };
    },
  },
});

export default homeHeroSection;
