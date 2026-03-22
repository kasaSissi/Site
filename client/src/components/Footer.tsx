import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-foreground font-display text-xl mb-4">KASA SISSI</h3>
            <p className="text-sm leading-relaxed">
              Móveis funcionais e estéticos que integram sua casa, seus filhos e seus pets. Qualidade premium em marcenaria.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-foreground transition-colors">Início</a></li>
              <li><a href="/galeria" className="hover:text-foreground transition-colors">Galeria</a></li>
              <li><a href="/sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="/contato" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="https://wa.me/5541988681605" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  +55 41 98868-1605
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@kasasissi.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2024 KASA SISSI. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5541988681605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
