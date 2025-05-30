import React from 'react';

export default function CardContent({
  heading,
  subtext,
  children,
}: {
  heading?: string;
  subtext?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center pt-[50px] md:pt-[80px] text-center px-6">
      {heading && (
        <h2 className="text-center font-sans text-[13px] sm:text-[15px] font-normal leading-[1] tracking-[1.95px] sm:tracking-[2.25px] text-rose-gold uppercase">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="mt-[29px] max-w-[300px] md:max-w-[500px] text-center font-serif text-[32px] sm:text-[40px] font-normal leading-[110%] tracking-[-0.48px] sm:tracking-[-0.6px] text-white">
          {subtext}
        </p>
      )}
      {children}
    </div>
  );
}
