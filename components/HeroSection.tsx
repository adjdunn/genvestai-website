import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground font-display animate-fade-in">
            AI Expertise for Investment Professionals
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground animate-fade-in-delay-1">
            Learn how to leverage generative AI to boost efficiency and decision-making in the investment industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
            <Link href="#videos">
              <Button size="lg" className="w-full sm:w-auto group bg-primary text-primary-foreground hover:bg-primary/90">
                Watch Demo
                <PlayCircle className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
    </section>
  );
};

export default HeroSection;