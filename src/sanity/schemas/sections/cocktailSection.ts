// sanity/schemas/sections/cocktailSection.ts
import { defineType } from 'sanity';

const cocktailSection = defineType({
  name: 'cocktailSection',
  title: 'Cocktail Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'mainText',
      type: 'text',
      title: 'Main Text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'cocktails',
      type: 'array',
      title: 'Cocktail Cards',
      validation: (rule) => rule.min(4).max(6),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Cocktail Title',
              validation: (rule) => rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Cocktail Image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                },
              ],
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Cocktail Section',
      };
    },
  },
});

export default cocktailSection;
