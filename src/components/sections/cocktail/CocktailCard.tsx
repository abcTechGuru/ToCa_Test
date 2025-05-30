import type { SanityImage } from '@/sanity/types';
import SanityImageSkeleton from '@/components/utility/SanityImageSkeleton';

export default function CocktailCard({
  title,
  image,
}: {
  title: string;
  image: SanityImage;
}) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      <div className="relative w-[300px] sm:w-[360px] bg-cover bg-center overflow-visible mb-[50px]">
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px] sm:h-[488px] relative">
          <SanityImageSkeleton image={image} className="w-full h-full object-cover" fill />
        </div>

        <div className="absolute bottom-[-40px] left-1/2 translate-x-[-50%] font-karl text-center text-[64px] sm:text-[80px] font-normal leading-[100%] text-rose-gold w-[232px] z-10">
          {title}
        </div>
      </div>
    </div>


  );
}
