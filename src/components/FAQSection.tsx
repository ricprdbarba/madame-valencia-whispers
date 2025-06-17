
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "A Madame Valência é uma pessoa real?",
      answer: "Madame Valência é uma inteligência artificial avançada, projetada para se comunicar como uma conselheira experiente, com acolhimento e firmeza. Ela não é uma pessoa física, mas sua interação é pensada para ser tão intuitiva e útil quanto a de um profissional humano."
    },
    {
      question: "Como funciona o sistema de créditos?",
      answer: "Cada leitura completa que você solicita à Madame Valência consome um crédito. Você pode adquirir pacotes de créditos no WhatsApp, garantindo acesso contínuo às orientações."
    },
    {
      question: "Quais tipos de leitura a Madame Valência oferece?",
      answer: "A Madame Valência oferece três tipos de leitura para se adequar à sua necessidade: Leitura Geral (para uma visão ampla e sem tema específico), Leitura Temática (para focar em áreas como amor, carreira, saúde ou propósito), e Leitura Específica (para perguntas objetivas e diretas)."
    },
    {
      question: "Minhas conversas são privadas?",
      answer: "Sim, a privacidade é uma prioridade. Todas as suas conversas com a Madame Valência são confidenciais e tratadas com o mais alto nível de sigilo. Seus dados são protegidos e não são compartilhados."
    },
    {
      question: "Posso fazer qualquer tipo de pergunta?",
      answer: "Você pode fazer perguntas sobre diversos aspectos da sua vida, como amor, carreira, finanças, propósito e autoconhecimento. Madame Valência está pronta para acolher suas questões e oferecer uma perspectiva através do tarot."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim, todas as transações para aquisição de créditos são processadas por plataformas de pagamento seguras e reconhecidas no mercado, garantindo a proteção dos seus dados financeiros. Sua segurança é nossa prioridade."
    },
    {
      question: "Como faço para começar?",
      answer: "É simples! Basta clicar no botão \"DESVENDE MEU FUTURO AGORA!\" nesta página. Você irá direto para o WhatsApp da Madame Valência, onde poderá adquirir seus créditos e iniciar sua primeira leitura."
    }
  ];

  return (
    <section className="py-20 bg-mystical-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-100 mb-6">
              Tire as suas <span className="gradient-text">dúvidas</span>
            </h2>
            <p className="font-cormorant text-xl text-mystical-200">
              Respostas para as perguntas mais frequentes sobre Madame Valência
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-mystical-700/50 backdrop-blur-sm border border-mystical-600 rounded-2xl overflow-hidden hover:border-gold-400/30 transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-mystical-600/20 transition-colors duration-200"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="font-cinzel text-lg md:text-xl font-semibold text-mystical-100 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="h-6 w-6 text-gold-400" />
                    ) : (
                      <Plus className="h-6 w-6 text-gold-400" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-mystical-600/50">
                    <p className="font-cormorant text-lg text-mystical-200 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gold-400/10 to-purple-600/10 border border-gold-400/30 rounded-2xl p-8">
              <h3 className="font-cinzel text-2xl font-bold text-mystical-100 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="font-cormorant text-lg text-mystical-200 mb-6">
                Fale diretamente com Madame Valência no WhatsApp e tire todas as suas questões!
              </p>
              <div className="inline-block">
                <div className="bg-mystical-800 rounded-full px-6 py-3 border border-gold-400/50">
                  <span className="font-cormorant text-gold-400 font-semibold">
                    💬 Suporte personalizado disponível
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

export default FAQSection;
