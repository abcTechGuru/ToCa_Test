import { cn } from '@/libs/functions';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  fluid?: boolean; // if true, container is full width without padding
};

export default function Container({ className = '', children, fluid = false }: ContainerProps) {
  return (
    <div
      className={cn(
        fluid
          ? 'w-full' // full width, no max width or padding
          : 'mx-auto px-[0.62rem] md:px-6 lg:px-10', // default constrained container
        className
      )}
    >
      {children}
    </div>
  );
}
