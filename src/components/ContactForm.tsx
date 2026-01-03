import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Importação necessária para redirecionar

interface FormData {
  companyName: string;
  website: string;
  businessType: string;
  monthlyRevenue: string;
  marketTime: string;
  adBudget: string;
  name: string;
  phone: string;
  source: string;
  notes: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate(); // Hook de navegação
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    website: "",
    businessType: "",
    monthlyRevenue: "",
    marketTime: "",
    adBudget: "",
    name: "",
    phone: "",
    source: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "");
      value = value.slice(0, 11);
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    }

    if (name === "monthlyRevenue") {
      let rawValue = value.replace(/\D/g, "");
      if (rawValue) {
        rawValue = (parseInt(rawValue) / 100).toFixed(2) + "";
        rawValue = rawValue.replace(".", ",");
        rawValue = rawValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        value = `R$ ${rawValue}`;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const WEBHOOK_URL = "https://nwn.briteshub.com.br/webhook/form";

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
          origin: "Site Briteshub - Formulário Completo",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na comunicação com o servidor");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Redirecionando...",
      });

      // Redireciona para a página de obrigado
      navigate("/obrigado");

    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description:
          "Houve um problema. Tente novamente ou chame no WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 space-y-6">
      
      {/* Nome Empresa */}
      <div className="space-y-2">
        <label htmlFor="companyName" className="text-sm font-medium text-foreground">
          Nome Empresa<span className="text-destructive">*</span>
        </label>
        <Input
          id="companyName"
          name="companyName"
          placeholder="Escreva aqui"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Site / Instagram */}
      <div className="space-y-2">
        <label htmlFor="website" className="text-sm font-medium text-foreground">
          Site (caso não tenha, coloque o @ do seu instagram)<span className="text-destructive">*</span>
        </label>
        <Input
          id="website"
          name="website"
          placeholder="Inserir texto"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>

      {/* Tipo Negócio */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Tipo negócio<span className="text-destructive">*</span>
        </label>
        <Select
          onValueChange={(val) => handleSelectChange("businessType", val)}
          value={formData.businessType}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecionar opção..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-" className="text-center font-medium my-1">-</SelectItem>
            <SelectItem value="Ecommerce" className="bg-blue-400 text-white focus:bg-blue-500 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Ecommerce</SelectItem>
            <SelectItem value="Negócio Local" className="bg-green-500 text-white focus:bg-green-600 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Negócio Local</SelectItem>
            <SelectItem value="Infoproduto" className="bg-pink-400 text-white focus:bg-pink-500 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Infoproduto</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Faturamento */}
      <div className="space-y-2">
        <label htmlFor="monthlyRevenue" className="text-sm font-medium text-foreground">
          Faturamento médio mensal<span className="text-destructive">*</span>
        </label>
        <Input
          id="monthlyRevenue"
          name="monthlyRevenue"
          placeholder="Inserir moeda"
          value={formData.monthlyRevenue}
          onChange={handleChange}
          required
        />
      </div>

      {/* Tempo de mercado */}
      <div className="space-y-2">
        <label htmlFor="marketTime" className="text-sm font-medium text-foreground">
          Tempo de mercado<span className="text-destructive">*</span>
        </label>
        <Input
          id="marketTime"
          name="marketTime"
          placeholder="Inserir texto"
          value={formData.marketTime}
          onChange={handleChange}
          required
        />
      </div>

      {/* Investimento em Ads */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Quanto investe em anúncios<span className="text-destructive">*</span>
        </label>
        <Select
          onValueChange={(val) => handleSelectChange("adBudget", val)}
          value={formData.adBudget}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Digite para pesquisar..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-" className="text-center font-medium my-1">-</SelectItem>
            <SelectItem value="Não invisto" className="bg-red-600 text-white focus:bg-red-700 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Não invisto</SelectItem>
            <SelectItem value="Até R$1.500" className="bg-orange-500 text-white focus:bg-orange-600 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Até R$1.500</SelectItem>
            <SelectItem value="De R$1.500 a R$3.000" className="bg-yellow-400 text-black focus:bg-yellow-500 focus:text-black text-center font-medium rounded-md my-1 cursor-pointer justify-center">De R$1.500 a R$3.000</SelectItem>
            <SelectItem value="De R$3.000 a R$10.000" className="bg-blue-500 text-white focus:bg-blue-600 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">De R$3.000 a R$10.000</SelectItem>
            <SelectItem value="Acima de R$10.000" className="bg-purple-500 text-white focus:bg-purple-600 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Acima de R$10.000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Seu Nome */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Seu nome<span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Inserir texto"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* WhatsApp */}
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          WhatsApp<span className="text-destructive">*</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Inserir texto"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Como me achou */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Como me achou?<span className="text-destructive">*</span>
        </label>
        <Select
          onValueChange={(val) => handleSelectChange("source", val)}
          value={formData.source}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecionar opção..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-" className="text-center font-medium my-1">-</SelectItem>
            <SelectItem value="Instagram" className="bg-purple-500 text-white focus:bg-purple-600 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Instagram</SelectItem>
            <SelectItem value="Anúncio" className="bg-blue-400 text-white focus:bg-blue-500 focus:text-white text-center font-medium rounded-md my-1 cursor-pointer justify-center">Anúncio</SelectItem>
            <SelectItem value="Indicação" className="bg-yellow-400 text-black focus:bg-yellow-500 focus:text-black text-center font-medium rounded-md my-1 cursor-pointer justify-center">Indicação</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Observações */}
      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium text-foreground">
          Observações<span className="text-destructive">*</span>
        </label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Inserir texto"
          value={formData.notes}
          onChange={handleChange}
          className="min-h-[100px]"
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
            <Loader2 className="animate-spin mr-2" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2" />
            Enviar
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;