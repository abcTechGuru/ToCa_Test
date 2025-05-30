import RoundedHoverButton from '@/components/RoundedHoverButton';

export default function SectionHeader({
  title,
  text,
  buttonText,
}: {
  title: string;
  text: string;
  buttonText: string;
}) {
  return (
    <>
      <h2 className="text-[13px] md:text-[15px] leading-[100%] tracking-[1.95px] md:tracking-[2.25px] uppercase text-rose-gold font-sans font-[420]">
        {title}
      </h2>
      <p className="mx-auto max-w-[330px] md:max-w-[720px] mt-[16px] md:mt-[33px] mb-[27px] md:mb-[45px] font-serif text-[32px] md:text-[40px] leading-[110%] tracking-[-0.48px] md:tracking-[-0.6px] text-white">
        {text}
      </p>
      <RoundedHoverButton className="mb-[66px] md:mb-[79px] inline-flex items-center justify-center  border border-white/50 rounded-full uppercase text-sm tracking-wider hover:bg-white/10 transition-all">
        {buttonText}
      </RoundedHoverButton>
    </>
  );
}
