
import { Globe, Target, Zap } from "lucide-react";

const ReadingTypesSection = () => {
  const readingTypes = [
    {
      icon: Globe,
      title: "Leitura Geral",
      description: "Para quando você busca uma visão ampla sobre sua vida, sem um tema específico em mente.",
      details: "É ideal para \"o que as cartas têm para mim hoje?\" ou \"quero saber da minha vida em geral\". Uma visão panorâmica para iluminar seu caminho.",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Target,
      title: "Leitura Temática",
      description: "Se você precisa de foco em uma área específica, como amor, carreira, saúde ou propósito de vida.",
      details: "Perfeito para \"quero saber sobre meu relacionamento\" ou \"e minha vida profissional?\". Mergulhe fundo em um aspecto da sua jornada.",
      color: "from-gold-500 to-gold-600"
    },
    {
      icon: Zap,
      title: "Leitura Específica",
      description: "Para aquelas perguntas diretas e objetivas que exigem um \"sim\" ou \"não\" ou uma orientação pontual.",
      details: "Ideal para \"devo aceitar a proposta?\" ou \"ele ainda me ama?\". Respostas claras para decisões importantes.",
      color: "from-green-600 to-green-700"
    }
  ];

  return (
    <section className="py-20 mystical-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-100 mb-6">
              Encontre a resposta certa para <span className="gradient-text">sua pergunta</span>
            </h2>
            <p className="font-cormorant text-xl text-mystical-200 max-w-3xl mx-auto leading-relaxed">
              A Madame Valência entende que cada dúvida é única. Por isso, ela oferece diferentes tipos 
              de leitura para se adaptar perfeitamente à sua necessidade e ao nível de clareza que você busca:
            </p>
          </div>

          {/* Reading types grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {readingTypes.map((type, index) => (
              <div 
                key={index}
                className="group bg-mystical-800/50 backdrop-blur-sm border border-mystical-600 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-cinzel text-2xl font-bold text-mystical-100 mb-4">
                  {type.title}
                </h3>

                <p className="font-cormorant text-lg text-mystical-200 mb-4 leading-relaxed">
                  {type.description}
                </p>

                <p className="font-cormorant text-base text-mystical-300 leading-relaxed">
                  {type.details}
                </p>

                {/* Decorative element */}
                <div className="mt-6 pt-6 border-t border-mystical-700">
                  <div className="flex justify-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="font-cormorant text-xl text-mystical-200 mb-8">
              Não importa qual seja sua dúvida, Madame Valência tem a leitura perfeita para você.
            </p>
            <div className="inline-block">
              <div className="bg-gradient-to-r from-gold-400/20 to-purple-600/20 p-1 rounded-full">
                <div className="bg-mystical-800 rounded-full px-8 py-4">
                  <span className="font-cinzel text-lg text-gold-400 font-semibold">
                    Escolha sua leitura e comece agora!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingTypesSection;
