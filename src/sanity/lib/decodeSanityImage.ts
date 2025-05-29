import type { SanityImage } from '../types';
import urlFor from './urlFor';

// const pattern = /^image-([a-f0-9]+)(?:-(\d+x\d+))?-(\w+)$/i; // case-insensitive, dims optional
const pattern = /^image-([a-f0-9]+)(?:-(\d+x\d+))?(?:-\w+)?$/i;

export default function processImage(source: SanityImage) {
  if (!source?.asset?._ref) {
    throw new Error('Image asset _ref is missing');
  }

  const id = source.asset._ref as string;
  const match = pattern.exec(id);

  if (!match) {
    console.warn(`Asset id did not match expected pattern: ${id}`);
    // fallback: build url, default dims and format
    return {
      url: urlFor(source).url(),
      alt: source.alt,
      assetId: id,
      dimensions: { width: 800, height: 600 },
      format: 'jpg',
    };
  }

  const [, assetId, dimensions, format] = match;
  const [width, height] = dimensions
    ? dimensions.split('x').map((v) => parseInt(v, 10))
    : [800, 600]; // fallback dims

  return {
    url: urlFor(source).url(),
    alt: source.alt,
    assetId,
    dimensions: { width, height },
    format,
  };
}
