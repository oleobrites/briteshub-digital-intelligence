import { 
  Globe, 
  Target, 
  Workflow, 
  Bot, 
  BarChart3, 
  Users,
  ArrowUpRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Criação de Sites e Landing Pages",
      description: "Sites e landing pages focados em conversão e performance. Rápidos, responsivos e otimizados para SEO.",
      features: ["Alta conversão", "Performance otimizada", "SEO técnico"]
    },
    {
      icon: Target,
      title: "Gestão de Tráfego Pago",
      description: "Campanhas estratégicas em Meta Ads e Google Ads com foco em ROI e resultados mensuráveis.",
      features: ["Meta Ads", "Google Ads", "Orientado a dados"]
    },
    {
      icon: Workflow,
      title: "Automações e Integrações",
      description: "Automatização de processos repetitivos e integrações via APIs para otimização operacional.",
      features: ["Automação de processos", "Integrações API", "Eficiência operacional"]
    },
    {
      icon: Bot,
      title: "Agentes de Inteligência Artificial",
      description: "Assistentes inteligentes personalizados para vendas, suporte ao cliente e marketing automatizado.",
      features: ["Chatbots IA", "Atendimento 24/7", "Vendas automatizadas"]
    },
    {
      icon: BarChart3,
      title: "Tracking Avançado e Analytics",
      description: "Implementação completa de GA4, GTM, Meta Pixel e Google Ads com eventos e atribuição correta.",
      features: ["GA4 & GTM", "Eventos personalizados", "Atribuição correta"]
    },
    {
      icon: Users,
      title: "Estruturação e Otimização de CRM",
      description: "Funis de vendas otimizados, gestão de leads eficiente e integrações automatizadas com seu CRM.",
      features: ["Funis de vendas", "Gestão de leads", "Automações CRM"]
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary/30 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tudo que seu negócio precisa para{" "}
            <span className="text-gradient">escalar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções completas e integradas para performance digital, 
            do planejamento estratégico à execução técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fIndex) => (
                  <span 
                    key={fIndex}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
