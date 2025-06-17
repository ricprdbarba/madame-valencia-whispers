
import { Clock, Zap, Users } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const FinalCTASection = () => {
  return (
    <section className="py-20 mystical-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-600/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-mystical-100 mb-6 leading-tight">
            <span className="gradient-text">Sua jornada</span> para a clareza 
            <br />
            <span className="text-mystical-100">começa agora.</span>
          </h2>

          <p className="font-playfair text-2xl md:text-3xl text-gold-300 mb-8 leading-relaxed">
            Não deixe para depois!
          </p>

          <p className="font-cormorant text-xl md:text-2xl text-mystical-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Não permita que a dúvida continue a te paralisar. 
            <span className="text-gold-400 font-semibold"> Dê o primeiro passo em direção 
            a um futuro mais claro e empoderado.</span>
          </p>

          {/* Urgency elements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-mystical-800/50 backdrop-blur-sm border border-mystical-600 rounded-xl p-6">
              <Clock className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-cinzel text-lg font-bold text-mystical-100 mb-2">Disponível Agora</h3>
              <p className="font-cormorant text-mystical-200">24 horas por dia, 7 dias por semana</p>
            </div>
            <div className="bg-mystical-800/50 backdrop-blur-sm border border-mystical-600 rounded-xl p-6">
              <Zap className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-cinzel text-lg font-bold text-mystical-100 mb-2">Resposta Imediata</h3>
              <p className="font-cormorant text-mystical-200">Sem espera, sem agendamentos</p>
            </div>
            <div className="bg-mystical-800/50 backdrop-blur-sm border border-mystical-600 rounded-xl p-6">
              <Users className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-cinzel text-lg font-bold text-mystical-100 mb-2">+1000 Leituras</h3>
              <p className="font-cormorant text-mystical-200">Milhares de pessoas já transformaram suas vidas</p>
            </div>
          </div>

          {/* Giant CTA Button */}
          <div className="mb-12">
            <WhatsAppButton 
              text="QUERO MINHA LEITURA COM MADAME VALÊNCIA AGORA!"
              size="xl"
              className="font-cinzel tracking-wide text-2xl md:text-3xl px-20 py-10 animate-mystical-glow"
            />
          </div>

          {/* Social proof and guarantee */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gold-400 rounded-full mr-1"></div>
                ))}
              </div>
              <p className="font-cormorant text-mystical-200">Avaliação média dos usuários</p>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-2 animate-pulse"></div>
              <p className="font-cormorant text-mystical-200">Madame Valência online agora</p>
            </div>
          </div>

          {/* Final urgency message */}
          <div className="mt-12 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-orange-500/30 rounded-2xl p-6">
            <p className="font-cinzel text-lg text-orange-300 font-semibold">
              ⚡ Não deixe as dúvidas controlarem sua vida por mais um dia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
