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
    { href: '/contato', label: 'Contato' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-display text-2xl font-bold text-accent hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary-foreground">
              K
            </div>
            <span className="hidden sm:inline">KASA SISSI</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <a className="text-foreground hover:text-accent transition-colors font-medium">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/5541846815605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
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
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a
              href="https://wa.me/5541846815605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
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
