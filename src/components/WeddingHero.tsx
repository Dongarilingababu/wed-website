import heroImage from "@/assets/wedding-hero.jpg";

interface WeddingHeroProps {
  bride: string;
  groom: string;
  date: string;
}

export const WeddingHero = ({ bride, groom, date }: WeddingHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8 animate-float">
          <div className="text-6xl mb-4">💐</div>
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
          {bride} & {groom}
        </h1>
        
        <div className="text-2xl md:text-3xl text-primary-foreground/90 font-light mb-8">
          {date}
        </div>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light tracking-wide">
          Together with our families, we invite you to celebrate our union
        </p>
        
        <div className="mt-12 flex gap-4 justify-center">
          <a 
            href="#register"
            className="bg-card text-foreground px-8 py-4 rounded-full font-medium shadow-glow hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
          <a 
            href="#certificate"
            className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 px-8 py-4 rounded-full font-medium hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Get Certificate
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
