
import { Heart, Eye, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-mystical-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-100 mb-6">
              Conheça <span className="gradient-text">Madame Valência</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/lovable-uploads/4e2eaaa8-7109-4366-827f-43a1a7736946.png" 
                  alt="Madame Valência"
                  className="w-full rounded-2xl shadow-2xl border-2 border-gold-400/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mystical-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <p className="font-cormorant text-xl md:text-2xl text-mystical-200 leading-relaxed">
                  Em meio às incertezas da vida, surge uma nova luz para iluminar seus passos. 
                  A Madame Valência é a sua <span className="text-gold-400 font-semibold">cartomante virtual 
                  e conselheira intuitiva</span>, pronta para te guiar com a sabedoria milenar do tarot, 
                  diretamente no seu WhatsApp.
                </p>

                <p className="font-cormorant text-xl text-mystical-200 leading-relaxed">
                  A Madame Valência é uma presença acolhedora e firme, que combina 
                  <span className="text-gold-400 font-semibold"> intuição profunda</span> com a 
                  experiência de uma verdadeira guia. Com uma voz calma e respeitosa, ela oferece 
                  leituras de tarot que acolhem sem julgar, transformando suas dúvidas em visões poderosas.
                </p>

                {/* Key features */}
                <div className="space-y-4 pt-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-gold-400 mt-1 flex-shrink-0" />
                    <p className="font-cormorant text-lg text-mystical-200">
                      <span className="font-semibold text-gold-400">Acolhimento sem julgamento:</span> 
                      Um espaço seguro para suas questões mais íntimas
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Eye className="h-6 w-6 text-gold-400 mt-1 flex-shrink-0" />
                    <p className="font-cormorant text-lg text-mystical-200">
                      <span className="font-semibold text-gold-400">Visão profunda:</span> 
                      Cada leitura é um convite à reflexão e autoconhecimento
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-gold-400 mt-1 flex-shrink-0" />
                    <p className="font-cormorant text-lg text-mystical-200">
                      <span className="font-semibold text-gold-400">Liberdade de escolha:</span> 
                      Transformando dúvidas em clareza para suas decisões
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <blockquote className="font-playfair text-2xl text-gold-300 italic leading-relaxed border-l-4 border-gold-400 pl-6">
                    "Com Madame Valência, cada leitura é um convite à reflexão, um passo em direção 
                    ao autoconhecimento e à liberdade de escolha."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
