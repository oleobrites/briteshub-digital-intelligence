import ContactForm from "@/components/ContactForm";
import BackgroundElements from "@/components/BackgroundElements";

// Mudei de 'Index' para 'Formulario' aqui
const Formulario = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundElements />
      
      <main className="relative z-10 flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div>
            </div>
            
          </div>

          {/* Form */}
          <ContactForm />

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} BriteHub. Todos os direitos reservados.
          </p>
        </div>
      </main>
    </div>
  );
};

// E mudei a exportação aqui também
export default Formulario;