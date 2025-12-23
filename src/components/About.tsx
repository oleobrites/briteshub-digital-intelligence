import { Target, Zap, LineChart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Estratégia",
      description: "Planejamento orientado por dados e objetivos claros de negócio."
    },
    {
      icon: Zap,
      title: "Execução",
      description: "Implementação técnica precisa com foco em performance e escalabilidade."
    },
    {
      icon: LineChart,
      title: "Resultados",
      description: "Métricas reais, otimização contínua e crescimento mensurável."
    }
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Sobre
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Soluções digitais que{" "}
              <span className="text-gradient">geram resultados</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Briteshub é um estúdio freelance especializado em performance digital. 
              Combinamos estratégia, tecnologia e execução para criar sistemas que 
              realmente funcionam.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              De sites de alta conversão a automações inteligentes com IA, cada projeto 
              é desenvolvido com foco em resolver problemas reais e escalar negócios 
              de forma sustentável.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
