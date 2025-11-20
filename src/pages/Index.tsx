import { WeddingHero } from "@/components/WeddingHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { CertificateGenerator } from "@/components/CertificateGenerator";

const Index = () => {
  const bride = "Emma";
  const groom = "James";
  const weddingDate = "June 15, 2025";

  return (
    <div className="min-h-screen">
      <WeddingHero 
        bride={bride}
        groom={groom}
        date={weddingDate}
      />
      
      <RegistrationForm />
      
      <CertificateGenerator 
        defaultBride={bride}
        defaultGroom={groom}
        defaultDate={weddingDate}
      />
      
      <footer className="bg-gradient-hero text-primary-foreground py-8 text-center">
        <p className="text-lg font-light">
          With love, {bride} & {groom} 💕
        </p>
      </footer>
    </div>
  );
};

export default Index;
