import { defineType, Rule } from 'sanity';

// Shared card structure used in multiple fields
const cardFields = [
  {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: { hotspot: true },
    validation: (rule: Rule) => rule.required(),
    fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
  },
  {
    name: 'mobileImage',
    title: 'Mobile Image',
    type: 'image',
    options: { hotspot: true },
    validation: (rule: Rule) => rule.required(),
    fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
  },
  {
    name: 'heading',
    title: 'Heading',
    type: 'string',
    validation: (rule: Rule) => rule.required(),
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
    initialValue: 'Learn More',
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
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'storyCard',
      title: 'Story Card',
      type: 'object',
      fields: cardFields,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'menuCard',
      title: 'Menu Card',
      type: 'object',
      fields: cardFields,
      validation: (rule: Rule) => rule.required(),
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
      validation: (rule: Rule) =>
        rule.min(3).max(3).error('Exactly 3 experience cards required'),
    },
  ],
});
