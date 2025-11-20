import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificateGeneratorProps {
  defaultBride: string;
  defaultGroom: string;
  defaultDate: string;
}

interface CertificateProps {
  bride: string;
  groom: string;
  date: string;
}

const Certificate = ({ bride, groom, date }: CertificateProps) => {
  return (
    <div className="bg-gradient-to-br from-background to-secondary p-12 rounded-lg border-8 border-double border-accent shadow-glow max-w-3xl mx-auto">
      <div className="text-center space-y-8">
        <div className="text-6xl animate-float">💕</div>
        
        <h2 className="font-playfair text-5xl font-bold text-primary">
          Wedding Certificate
        </h2>
        
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground">This certifies that</p>
          
          <p className="font-playfair text-4xl font-semibold text-foreground">
            {bride} & {groom}
          </p>
          
          <p className="text-xl text-muted-foreground">
            were united in marriage on
          </p>
          
          <p className="font-playfair text-3xl font-semibold text-accent">
            {date}
          </p>
        </div>
        
        <div className="pt-8 space-y-2">
          <div className="w-64 mx-auto border-t-2 border-foreground/20 pt-2">
            <p className="text-sm text-muted-foreground">Officiant Signature</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-8 text-4xl">
          <span>🌹</span>
          <span>💐</span>
          <span>🌹</span>
        </div>
      </div>
    </div>
  );
};

export const CertificateGenerator = ({ defaultBride, defaultGroom, defaultDate }: CertificateGeneratorProps) => {
  const [bride, setBride] = useState(defaultBride);
  const [groom, setGroom] = useState(defaultGroom);
  const [date, setDate] = useState(defaultDate);
  const [showCertificate, setShowCertificate] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (certificateRef.current) {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: "#fff",
      });
      
      const link = document.createElement("a");
      link.download = `wedding-certificate-${bride}-${groom}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <section id="certificate" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl font-bold text-primary mb-4">
            Generate Your Certificate
          </h2>
          <p className="text-xl text-muted-foreground">
            Create a beautiful commemorative certificate
          </p>
        </div>

        <Card className="shadow-soft border-2 border-primary/10">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl">Certificate Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bride">Bride's Name</Label>
                <Input
                  id="bride"
                  value={bride}
                  onChange={(e) => setBride(e.target.value)}
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="groom">Groom's Name</Label>
                <Input
                  id="groom"
                  value={groom}
                  onChange={(e) => setGroom(e.target.value)}
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Wedding Date</Label>
              <Input
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-12 border-2 focus:border-primary transition-colors"
              />
            </div>

            <Button 
              onClick={() => setShowCertificate(true)}
              className="w-full h-12 bg-primary hover:bg-primary/90 shadow-soft hover:shadow-glow transition-all"
            >
              Generate Certificate
            </Button>
          </CardContent>
        </Card>

        {showCertificate && (
          <div className="space-y-6 animate-fade-in">
            <div ref={certificateRef}>
              <Certificate bride={bride} groom={groom} date={date} />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleDownload}
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft"
              >
                Download Certificate
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowCertificate(false)}
              >
                Edit Details
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
