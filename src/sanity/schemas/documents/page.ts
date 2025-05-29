import { StickyNote } from 'lucide-react';
import { defineType } from 'sanity';
import { sections } from '../sections/index';

const page = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: StickyNote,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    },
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: sections.map((section) => ({
        type: section.name,
      })),
    },
  ],
});

export default page;
