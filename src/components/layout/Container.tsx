import { cn } from '@/libs/functions';

export default function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('w-full  mx-auto px-[28px] md:px-[40px] ', className)}>{children}</div>;
}
