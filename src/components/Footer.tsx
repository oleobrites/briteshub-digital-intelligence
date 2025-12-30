import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const services = [
    "Serviços e páginas de vendas",
    "Anúncios no Google e Redes Sociais",
    "Automação de Tarefas",
    "Atendimento com Inteligência Artificial",
    "Tracking Avançado e Analytics",
    "Organização do Comercial (CRM)"
  ];

  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Brites<span className="text-primary">hub</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Soluções digitais focadas em performance, automação e crescimento escalável.
            </p>
            <a 
              href="https://briteshub.com.br" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              briteshub.com.br
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#servicos" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contato@briteshub.com.br"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
              >
                contato@briteshub.com.br
              </a>
              <a 
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Briteshub. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            São Paulo, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
