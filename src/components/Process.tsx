import { Search, Hammer, TrendingUp, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "O Plano de Ação",
      description: "Definimos quem é seu cliente ideal e qual oferta vamos usar para atraí-lo. Sem reuniões intermináveis, foco no objetivo."
    },
    {
      icon: Hammer,
      number: "02",
      title: "O Setup da Máquina",
      description: "Configuramos toda a tecnologia necessária (Site, Pixels, CRM e Automação) para receber os leads e processar as vendas."
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Melhoria Contínua",
      description: "Ficamos de olho nas métricas todos os dias. Cortamos o que gasta dinheiro à toa e focamos no que traz retorno."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Escala",
      description: "Com a casa arrumada e vendendo, expandimos para novos canais e públicos, garantindo que sua empresa continue crescendo mês a mês."
    }
  ];

  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-gradient-to-r from-primary/5 to-transparent -translate-y-1/2 pointer-events-none" />
      
      <div className="container px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            PASSO A PASSO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma metodologia clara e eficiente para transformar ideias em resultados concretos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="relative">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
