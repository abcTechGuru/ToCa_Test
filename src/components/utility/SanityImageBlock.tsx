'use client';

import { useState } from 'react';
import { cn } from '@/libs/functions';
import decodeSanityImage from '@/sanity/lib/decodeSanityImage';
import type { SanityImage } from '@/sanity/types';
import Image from 'next/image';

export default function SanityImageBlock({
  image,
  className,
  ...props
}: {
  image: SanityImage;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const sourceImage = decodeSanityImage(image);
  const { fill, width, height } = props;

  return (
    <div className={cn(className, 'relative', fill && 'w-full h-full')}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-[var(--dark-gray)]" />
      )}
      <Image
        src={sourceImage.url}
        alt={image.alt || ''}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out',
          className,
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        width={!fill ? width || sourceImage.dimensions.width : undefined}
        height={!fill ? height || sourceImage.dimensions.height : undefined}
        fill={fill}
        {...props}
      />

    </div>
  );
}
