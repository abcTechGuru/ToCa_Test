import { defineType } from 'sanity';

// Shared card structure used in multiple fields below
const cardFields = [
  {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: { hotspot: true },
    validation: (rule: { required: () => any }) => rule.required(),
    fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
  },
  {
    name: 'heading',
    title: 'Heading',
    type: 'string',
    validation: (rule: { required: () => any }) => rule.required(),
  },
  {
    name: 'subtext',
    title: 'Subtext',
    type: 'string',
    description: 'Optional subtext',
  },
  {
    name: 'buttonText',
    title: 'Button Text',
    type: 'string',
    initialValue: 'Learn More', // Pre-fill button text to keep editing faster
  },
];

export default defineType({
  name: 'introSection',
  title: 'Intro Section',
  type: 'object',
  fields: [
    {
      name: 'heroCard',
      title: 'Hero Card',
      type: 'object',
      fields: cardFields,
      validation: (rule) => rule.required(), // Required to make the section meaningful
    },
    {
      name: 'storyCard',
      title: 'Story Card',
      type: 'object',
      fields: cardFields,
      validation: (rule) => rule.required(),
    },
    {
      name: 'menuCard',
      title: 'Menu Card',
      type: 'object',
      fields: cardFields,
      validation: (rule) => rule.required(),
    },
    {
      name: 'experienceCards',
      title: 'Experience Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: cardFields,
        },
      ],
      // Enforces exactly 3 cards for consistent layout/design usage
      validation: (rule) => rule.min(3).max(3).error('Exactly 3 experience cards required'),
    },
  ],
});
