
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  text: string;
  size?: "default" | "lg" | "xl";
  className?: string;
}

const WhatsAppButton = ({ text, size = "default", className = "" }: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5511999999999"; // Replace with actual number
    const message = encodeURIComponent("Olá Madame Valência! Gostaria de fazer uma leitura de tarot.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const sizeClasses = {
    default: "px-8 py-4 text-lg",
    lg: "px-12 py-6 text-xl",
    xl: "px-16 py-8 text-2xl"
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`
        bg-gradient-to-r from-green-600 to-green-500 
        hover:from-green-700 hover:to-green-600 
        text-white font-bold rounded-full
        transform hover:scale-105 transition-all duration-300
        shadow-lg hover:shadow-2xl
        animate-mystical-glow
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <MessageCircle className="mr-3 h-6 w-6" />
      {text}
    </Button>
  );
};

export default WhatsAppButton;
