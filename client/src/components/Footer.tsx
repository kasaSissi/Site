import { Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-foreground font-display text-xl mb-4">KASA SISSI</h3>
            <p className="text-sm leading-relaxed">
              A casa de revista com vida de verdade. Móveis de marcenaria premium para quem não abre mão do estilo.
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
                <a href="https://wa.me/5541984681605" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  +55 41 98468-1605
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="https://www.instagram.com/kasa.sissi?igsh=MTlqeTFmcHhkcnk0YQ==" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  @kasa.sissi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Parceria */}
        <div className="border-t border-border pt-8 pb-8">
          <div className="flex items-center gap-4 mb-3">
            <img
              src="https://res.cloudinary.com/dp9rcls07/image/upload/f_auto,q_auto/chiko_kiare_parceria.jpg"
              alt="Chiko i Kiare"
              className="h-8 w-auto"
            />
            <p className="text-xs text-muted-foreground">
              Parceria com <a href="https://www.instagram.com/chikoikiare?igsh=MWV0d2hleWZleTZoeQ==" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-semibold">Chiko i Kiare</a> - Fábrica de Móveis Premium
            </p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 KASA SISSI. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/kasa.sissi?igsh=MTlqeTFmcHhkcnk0YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.mercadolivre.com.br/pagina/kasa_sissi?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mercado Livre
            </a>
            <a
              href="https://wa.me/5541984681605"
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
