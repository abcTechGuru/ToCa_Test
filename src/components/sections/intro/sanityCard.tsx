import SanityImageSkeleton from '@/components/utility/SanityImageSkeleton';
import { SanityImage } from '@/sanity/types';
import RoundedHoverButton from '@/components/RoundedHoverButton';
import { useEffect, useState } from 'react';

type SanityCardProps = {
  image?: SanityImage;
  mobileImage?: SanityImage;
  heading?: string;
  subtext?: string;
  buttonText?: string;
  className?: string;
};

export default function SanityCard({
  image,
  mobileImage,
  heading,
  subtext,
  buttonText,
  className = '',
}: SanityCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const selectedImage = isMobile && mobileImage ? mobileImage : image;

  return (
    selectedImage && (
      <div className={`relative rounded-lg overflow-hidden opacity-80 shadow-lg ${className}`}>
        <SanityImageSkeleton
          image={selectedImage}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center pt-[50px] sm:pt-[80px] text-center px-6">
          <h2 className="text-center font-sans text-[13px] sm:text-[15px] font-normal leading-[1] tracking-[1.95px] sm:tracking-[2.25px] text-rose-gold uppercase">
            {heading}
          </h2>

          {subtext && (
            <p className="mt-[29px] max-w-xl text-center font-serif text-[32px] sm:text-[40px] font-normal leading-[110%] tracking-[-0.48px] sm:tracking-[-0.6px] text-white">
              {subtext}
            </p>
          )}

          {buttonText && (
            <RoundedHoverButton className="absolute bottom-[50px] sm:bottom-[80px] left-1/2 -translate-x-1/2 inline-flex justify-center items-center gap-2 rounded-full border border-white/50 bg-black/5 backdrop-blur-[10px] uppercase tracking-widest text-sm">
              {buttonText}
            </RoundedHoverButton>
          )}
        </div>
      </div>
    )
  );
}
