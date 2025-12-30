import { Target, Zap, LineChart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Diagnóstico Data-Driven",
      description: "Decisões baseadas no comportamento do usuário e análise de dados, zero achismo."
    },
    {
      icon: Zap,
      title: "Execução",
      description: "Implementação técnica precisa com foco em performance e escalabilidade."
    },
    {
      icon: LineChart,
      title: "Escala Previsível",
      description: "Otimização contínua baseada em dados reais, não em intuição. O foco é sempre o lucro líquido."
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
              Menos "agência",{" "}
              <span className="text-gradient">mais engenharia de vendas.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Briteshub nasceu para preencher a lacuna entre o marketing tradicional e a tecnologia avançada.
               Enquanto o mercado foca em métricas de vaidade, nós focamos na infraestrutura do seu faturamento.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Não entregamos apenas "campanhas" ou "sites". Entregamos ecossistemas comerciais que usam
               Inteligência Artificial para eliminar trabalho manual e Tráfego Estratégico para garantir previsibilidade.
                Somos o braço direito de tecnologia para negócios que querem escalar.
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
