
import { Stars, Moon, Sparkles } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center mystical-bg overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Stars className="absolute top-20 left-10 text-gold-400 opacity-30 float-animation" size={24} />
        <Moon className="absolute top-32 right-16 text-mystical-400 opacity-20 float-animation" size={32} style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-40 left-20 text-gold-300 opacity-25 float-animation" size={20} style={{animationDelay: '4s'}} />
        <Stars className="absolute bottom-20 right-10 text-mystical-300 opacity-30 float-animation" size={28} style={{animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main headline - The promise that solves the problem */}
          <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Chega de dúvidas!</span>
            <br />
            <span className="text-mystical-100">
              Desvende seu futuro e tome decisões com 
              <span className="gradient-text"> clareza absoluta</span>
            </span>
          </h1>

          {/* Supporting subtitle */}
          <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-mystical-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            A sabedoria milenar do tarot, agora ao seu alcance 
            <span className="text-gold-400 font-semibold">24h por dia</span>, 
            direto no seu WhatsApp.
          </p>

          {/* CTA Button - Clear and urgent action */}
          <div className="mb-16">
            <WhatsAppButton 
              text="DESVENDE MEU FUTURO AGORA!"
              size="xl"
              className="font-cinzel tracking-wide"
            />
          </div>

          {/* Social proof elements */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-mystical-300">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Stars key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="font-cormorant text-lg">+1000 leituras realizadas</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-mystical-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-cormorant text-lg">Disponível agora</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mystical-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
