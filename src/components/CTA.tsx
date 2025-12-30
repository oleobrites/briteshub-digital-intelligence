import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Vamos conversar?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pare de deixar {" "}
            <span className="text-gradient">dinheiro</span>
            {" "}na mesa.
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Seu negócio tem potencial para vender muito mais. Agende uma conversa rápida e descubra exatamente onde estão os gargalos que impedem seu crescimento hoje.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="/formulario" target="_blank" rel="noopener noreferrer">
                Iniciar Projeto
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="mailto:contato@briteshub.com.br">
                Enviar E-mail
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Atendimento imediato.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
