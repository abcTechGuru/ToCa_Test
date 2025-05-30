import RoundedHoverButton from '@/components/utility/RoundedHoverButton';
import { cn } from '@/libs/functions';

export default function CardButton({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'menu' | 'default';
}) {
  return (
    <RoundedHoverButton
      className={cn(
        'absolute bottom-[50px] sm:bottom-[80px] left-1/2 -translate-x-1/2 inline-flex justify-center items-center gap-2 rounded-full border border-white/50 bg-black/5 backdrop-blur-[10px] uppercase tracking-widest text-sm',
        variant === 'menu' && 'w-[180px] md:w-[200px]'
      )}
    >
      {children}
    </RoundedHoverButton>
  );
}
