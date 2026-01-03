import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Obrigado = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-24 animate-fade-in">
        <div className="glass-card p-8 md:p-16 flex flex-col items-center justify-center max-w-2xl w-full text-center shadow-2xl border-primary/10">
          
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-8 shadow-[0_0_40px_hsl(199_89%_48%/0.4)] animate-scale-in">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recebemos seus dados!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Obrigado pelo interesse. Nossa equipe comercial analisará suas informações e entrará em contato pelo WhatsApp em breve.
          </p>

          <Button asChild variant="hero" size="lg" className="group">
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o início
            </Link>
          </Button>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Obrigado;