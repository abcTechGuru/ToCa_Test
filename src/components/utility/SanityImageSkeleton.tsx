'use client';

import { useState } from 'react';
import { cn } from '@/libs/functions';
import decodeSanityImage from '@/sanity/lib/decodeSanityImage';
import type { SanityImage } from '@/sanity/types';
import Image from 'next/image';

export default function SanityImageSkeleton({
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
        <div className="absolute inset-0 z-0 animate-pulse rounded bg-[var(--dark-gray)] before:content-[''] before:absolute before:inset-0 before:rounded before:bg-gradient-to-r before:from-[rgba(255,255,255,0.05)] before:via-[rgba(255,255,255,0.15)] before:to-[rgba(255,255,255,0.05)] before:animate-[shimmer_1.2s_infinite] before:bg-[length:200%_100%]" />
      )}
      <Image
        src={sourceImage.url}
        alt={image.alt || ''}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out',
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
