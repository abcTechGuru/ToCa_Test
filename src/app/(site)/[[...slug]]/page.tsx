import { SectionRenderer } from '@/components/utility/SectionRenderer';
import { normalizeSlug, splitSlug } from '@/libs/functions';
import { sanityFetch } from '@/sanity/lib/client';
import { ROUTE_QUERY, ROUTES_QUERY, ROUTEALL_QUERY } from '@/sanity/lib/queries';
import type { Route } from '@/sanity/types';
import { notFound, redirect } from 'next/navigation';

export async function generateStaticParams() {
  const routes: Route[] = await sanityFetch({
    query: ROUTES_QUERY,
    tags: ['route'],
  });

  return routes.map((route) => ({
    slug: splitSlug(route.slug.current),
  }));
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  if (normalizedSlug === '/') {
    // fetch all routes with their pages & sections at once
    const routes: Route[] = await sanityFetch({
      query: ROUTEALL_QUERY,
      tags: ['route'],
    });

    // Combine all sections from all routes
    const allSections = routes.flatMap((route) => route.page?.sections || []);

    if (allSections.length === 0) {
      return notFound();
    }

    return (
      <main>
        {allSections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
      </main>
    );
  }

  // Non-root slug: fetch one route by slug
  const route: Route | null = await sanityFetch({
    query: ROUTE_QUERY,
    params: { slug: normalizedSlug },
    tags: ['route'],
  });

  if (!route) {
    return notFound();
  }

  if (route.isRedirect) {
    return redirect(route.redirectRoute.slug.current);
  }

  return (
    <main>
      {route.page.sections?.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </main>
  );
}
