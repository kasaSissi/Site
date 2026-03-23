import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
    { href: 'https://www.mercadolivre.com.br/pagina/kasa_sissi?utm_source=ig&utm_medium=social&utm_content=link_in_bio', label: 'Mercado Livre', external: true }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://res.cloudinary.com/dipruvqks/image/upload/f_auto,q_auto/IMG-20251214-WA0000_nv3uib"
            alt="KASA SISSI"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-accent transition-colors font-medium">
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block"
        >
          <Button className="bg-accent hover:bg-accent/90 text-primary-foreground">
            WhatsApp
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map(link => {
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.href} href={link.href} className="text-foreground hover:text-accent transition-colors font-medium" onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary-foreground">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
