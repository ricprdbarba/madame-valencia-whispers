
import { MousePointer, CreditCard, MessageSquare, Sparkles } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MousePointer,
      number: "1",
      title: "Clique no Botão",
      description: "Toque no botão nesta página para abrir uma conversa com a Madame Valência no WhatsApp.",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: CreditCard,
      number: "2", 
      title: "Carregue Seus Créditos",
      description: "Uma vez no WhatsApp, você poderá carregar os créditos necessários para suas leituras. Cada crédito equivale a uma leitura completa e profunda.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: MessageSquare,
      number: "3",
      title: "Faça Sua Pergunta",
      description: "Com seus créditos garantidos, apresente sua dúvida ou o tema sobre o qual busca orientação. Madame Valência está pronta para acolher suas questões.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Sparkles,
      number: "4",
      title: "Receba Sua Leitura",
      description: "Em instantes, você receberá uma leitura de tarot personalizada, cheia de insights e a sabedoria necessária para iluminar seu caminho e tomar decisões com confiança.",
      color: "from-gold-500 to-gold-600"
    }
  ];

  return (
    <section className="py-20 mystical-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-100 mb-6">
              Como <span className="gradient-text">funciona</span>
            </h2>
            <p className="font-cormorant text-xl text-mystical-200 max-w-3xl mx-auto leading-relaxed">
              Obter clareza e orientação com Madame Valência é mais fácil do que você imagina. 
              Em apenas alguns toques, você estará no caminho para desvendar seu futuro:
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gold-400/50 to-transparent z-0"></div>
                )}
                
                <div className="relative bg-mystical-800/50 backdrop-blur-sm border border-mystical-600 rounded-2xl p-6 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-105 z-10">
                  {/* Step number */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <span className="font-cinzel text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <step.icon className="h-8 w-8 text-gold-400" />
                  </div>

                  {/* Content */}
                  <h3 className="font-cinzel text-xl font-bold text-mystical-100 mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="font-cormorant text-base text-mystical-200 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-mystical-800/80 to-mystical-700/80 backdrop-blur-sm border border-gold-400/30 rounded-3xl p-8 md:p-12">
              <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-mystical-100 mb-6">
                Está pronto para começar sua jornada?
              </h3>
              <p className="font-cormorant text-xl text-mystical-200 mb-8 max-w-2xl mx-auto">
                Não deixe que as dúvidas continuem te paralisando. 
                <span className="text-gold-400 font-semibold"> O primeiro passo para a clareza 
                está a um clique de distância.</span>
              </p>
              <WhatsAppButton 
                text="QUERO MINHA LEITURA COM MADAME VALÊNCIA AGORA!"
                size="xl"
                className="font-cinzel tracking-wide"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
