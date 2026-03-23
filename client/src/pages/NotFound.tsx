import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-lg mx-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse" />
            <AlertCircle className="relative h-16 w-16 text-accent" />
          </div>
        </div>

        <h1 className="text-6xl font-display font-bold text-foreground mb-2">404</h1>

        <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
          Página não encontrada
        </h2>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          Desculpe, a página que você está procurando não existe.
          <br />
          Ela pode ter sido movida ou deletada.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="bg-accent hover:bg-accent/90 text-primary-foreground px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
