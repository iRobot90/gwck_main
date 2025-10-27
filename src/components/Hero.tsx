import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  overlay?: boolean;
}

const Hero = ({
  image,
  title,
  subtitle,
  children,
  className,
  overlay = true,
}: HeroProps) => {
  return (
    <section
      className={cn(
        "relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {overlay && (
        <div className="absolute inset-0 gradient-hero" />
      )}
      
      <div className="relative z-10 text-center container mx-auto container-padding animate-fade-in-up">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Hero;
