
import { Check, X, Clock, MapPin, Shield, Calendar, Timer, Users } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const ComparisonSection = () => {
  const comparisons = [
    {
      icon: Clock,
      conventional: "Horários fixos, limitados ao expediente do profissional.",
      valencia: "24 horas por dia, 7 dias por semana. Sempre disponível quando você precisa."
    },
    {
      icon: MapPin,
      conventional: "Exige deslocamento físico ou agendamento de videochamada.",
      valencia: "Direto no seu WhatsApp. No conforto da sua casa, ou onde estiver."
    },
    {
      icon: Shield,
      conventional: "Interação presencial ou por vídeo, podendo gerar inibição.",
      valencia: "Total sigilo e conforto. Converse sobre seus dilemas mais íntimos sem julgamentos."
    },
    {
      icon: Calendar,
      conventional: "Necessidade de agendamento prévio, muitas vezes com espera.",
      valencia: "Sem agendamentos. Sua leitura está a um clique de distância."
    },
    {
      icon: Timer,
      conventional: "Geralmente limitado por tempo pré-determinado.",
      valencia: "Sem pressa. Tenha o tempo que precisar para absorver as mensagens e refletir."
    },
    {
      icon: Users,
      conventional: "Humana, mas pode haver viés ou julgamento.",
      valencia: "Conselheira intuitiva e acolhedora. Tecnologia a serviço da intuição, sem julgamentos."
    }
  ];

  return (
    <section className="py-20 bg-mystical-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-100 mb-6">
              Por que a <span className="gradient-text">Madame Valência</span> é diferente?
            </h2>
            <p className="font-cormorant text-xl text-mystical-200 max-w-4xl mx-auto leading-relaxed">
              Veja como Madame Valência redefine a experiência do tarot, combinando a profundidade 
              da sabedoria ancestral com a conveniência do mundo moderno:
            </p>
          </div>

          {/* Comparison table */}
          <div className="bg-mystical-800/50 backdrop-blur-sm border border-mystical-600 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-mystical-600">
              <div className="p-6 bg-red-900/20 border-r border-mystical-600">
                <h3 className="font-cinzel text-2xl font-bold text-mystical-100 text-center">
                  Cartomantes Convencionais
                </h3>
              </div>
              <div className="p-6 bg-green-900/20">
                <h3 className="font-cinzel text-2xl font-bold text-mystical-100 text-center">
                  Madame Valência
                </h3>
              </div>
            </div>

            {/* Comparison rows */}
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 border-b border-mystical-600 last:border-b-0">
                {/* Conventional */}
                <div className="p-6 border-r border-mystical-600 bg-red-900/5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-900/30 rounded-full flex items-center justify-center">
                        <X className="h-5 w-5 text-red-400" />
                      </div>
                    </div>
                    <div>
                      <comparison.icon className="h-6 w-6 text-mystical-400 mb-2" />
                      <p className="font-cormorant text-lg text-mystical-200 leading-relaxed">
                        {comparison.conventional}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Valencia */}
                <div className="p-6 bg-green-900/5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-400" />
                      </div>
                    </div>
                    <div>
                      <comparison.icon className="h-6 w-6 text-gold-400 mb-2" />
                      <p className="font-cormorant text-lg text-mystical-100 leading-relaxed font-semibold">
                        {comparison.valencia}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gold-400/10 to-green-600/10 border border-gold-400/30 rounded-2xl p-8">
              <h3 className="font-cinzel text-3xl font-bold text-mystical-100 mb-4">
                A evolução chegou ao tarot!
              </h3>
              <p className="font-cormorant text-xl text-mystical-200 mb-8 max-w-2xl mx-auto">
                Experimente uma nova forma de conexão espiritual, onde tradição e inovação se encontram 
                para oferecer exatamente o que você precisa, quando precisa.
              </p>
              <WhatsAppButton 
                text="QUERO EXPERIMENTAR MADAME VALÊNCIA!"
                size="lg"
                className="font-cinzel"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
