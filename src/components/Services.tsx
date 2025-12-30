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
      title: "Sites e Páginas de Vendas",
      description: "Criamos sites rápidos e profissionais focados em uma única coisa: transformar visitantes em clientes reais. Nada de enrolação, apenas o design certo para vender.",
      features: ["Alta conversão", "Rápido no Celular", "Design Moderno"]
    },
    {
      icon: Target,
      title: "Anúncios no Google e Redes Sociais",
      description: "Colocamos sua empresa na frente de quem já está procurando pelo seu produto. Gerenciamos seus anúncios no Instagram, Facebook e Google para atrair compradores, não apenas curiosos.",
      features: ["Instagram Ads", "Google Ads", "Mais clientes"]
    },
    {
      icon: Workflow,
      title: "Automação de Tarefas",
      description: "Chega de fazer trabalho repetitivo manual. Conectamos suas ferramentas para que planilhas, notas fiscais e cadastros aconteçam sozinhos, poupando horas da sua semana.",
      features: ["Automação de processos", "Ganhe Tempo", "Eficiência operacional"]
    },
    {
      icon: Bot,
      title: "Atendimento com Inteligência Artificial",
      description: "Assistentes inteligentes personalizados para vendas, suporte ao cliente e marketing automatizaInstale um funcionário digital que responde seus clientes no WhatsApp instantaneamente, 24 horas por dia. Ele tira dúvidas e agenda reuniões enquanto você dorme.",
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
      title: "Organização do Comercial (CRM)",
      description: "Organizamos seus contatos e processos de venda. Sua equipe nunca mais vai esquecer de responder um cliente ou perder uma venda por falta de organização.",
      features: ["Gestão de Vendas", "Organização", "Funil de Vendas"]
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary/30 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            ECOSSISTEMA INTEGRADO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Chega de estratégias {" "}
            <span className="text-gradient">fragmentadas.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Unificamos aquisição, dados e automação em uma única esteira de performance. Cada serviço abaixo é uma engrenagem conectada,
             projetada para reduzir seu custo operacional e maximizar o lucro.
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
