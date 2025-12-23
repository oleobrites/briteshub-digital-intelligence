import { Shield, Award, Clock, CheckCircle2 } from "lucide-react";

const Credibility = () => {
  const points = [
    {
      icon: Shield,
      title: "Método Estruturado",
      description: "Processos claros e documentados para cada etapa do projeto."
    },
    {
      icon: Award,
      title: "Especialização Técnica",
      description: "Domínio profundo das ferramentas e tecnologias utilizadas."
    },
    {
      icon: Clock,
      title: "Compromisso com Prazos",
      description: "Entregas no tempo combinado, sem surpresas ou atrasos."
    },
    {
      icon: CheckCircle2,
      title: "Foco em Resultados",
      description: "Cada decisão é baseada em dados e orientada para performance."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Por que a Briteshub
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Clareza, método e{" "}
              <span className="text-gradient">resultados</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Não fazemos promessas vazias. Trabalhamos com transparência, 
              comunicação clara e foco total no que realmente importa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
