'use client';

import type { SanityImage } from '@/sanity/types';
import { useEffect, useState } from 'react';
import SanityImageSkeleton from '@/components/utility/SanityImageSkeleton';
import { cn } from '@/libs/functions';
import CardContent from './SanityCardContent';
import CardButton from './SanityCardButton';

type SanityCardProps = {
  image?: SanityImage;
  mobileImage?: SanityImage;
  heading?: string;
  subtext?: string;
  buttonText?: string;
  className?: string;
  variant?: 'menu' | 'default';
};

export default function SanityCard({
  image,
  mobileImage,
  heading,
  subtext,
  buttonText,
  className = '',
  variant = 'default',
}: SanityCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const selectedImage = isMobile && mobileImage ? image : mobileImage;

  return selectedImage ? (
    <div className={cn('relative rounded-lg overflow-hidden opacity-80 shadow-lg', className)}>
      <SanityImageSkeleton
        image={selectedImage}
        className="w-full h-full object-cover brightness-75"
      />
      <CardContent heading={heading} subtext={subtext}>
        {buttonText && <CardButton variant={variant}>{buttonText}</CardButton>}
      </CardContent>
    </div>
  ) : null;
}
