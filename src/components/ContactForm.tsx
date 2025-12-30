import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  project: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
  });

  // Substitua a função handleChange antiga por esta:
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    // Lógica nova para o telefone
    if (name === "phone") {
      value = value.replace(/\D/g, ""); // Remove letras
      value = value.slice(0, 11);       // Limita a 11 números
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Põe parênteses
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");    // Põe hífen
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ... resto dos imports e estados continuam iguais ...

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 👇 COLOQUE A URL DO SEU WEBHOOK AQUI (n8n, Typebot, etc)
    const WEBHOOK_URL = "https://nwn.briteshub.com.br/webhook/form"; 

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(), // Adicionei a data do envio
          origin: "Site Briteshub - Formulário", // Para você saber de onde veio
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na comunicação com o servidor");
      }

      // Sucesso
      setIsSuccess(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      // Limpar formulário após 3 segundos
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", phone: "", company: "", project: "" });
      }, 3000);

    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        variant: "destructive", // Fica vermelho para avisar do erro
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente ou chame no WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... resto do código (if isSuccess, return form, etc) continua igual ...
  if (isSuccess) {
    return (
      <div className="glass-card p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px] animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-[0_0_40px_hsl(199_89%_48%/0.4)]">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Mensagem enviada!
        </h3>
        <p className="text-muted-foreground text-center">
          Nossa equipe entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-8 md:p-12 space-y-6"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Telefone
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(00) 00000-0000"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-foreground">
          Empresa
        </label>
        <Input
          id="company"
          name="company"
          placeholder="Nome da sua empresa"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="project" className="text-sm font-medium text-foreground">
          Nos conte sobre seu projeto/desafio
        </label>
        <Textarea
          id="project"
          name="project"
          placeholder="Descreva seu projeto ou desafio..."
          value={formData.project}
          onChange={handleChange}
          className="min-h-[140px]"
          required
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send />
            Enviar
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
