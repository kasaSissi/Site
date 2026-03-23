import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 bg-secondary/20">
          <div className="container">
            <h1 className="mb-4">Fale Conosco</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Temos prazer em responder suas dúvidas e ajudar você a encontrar o móvel perfeito.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-display mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">
                    Atendimento rápido e personalizado
                  </p>
                  <p className="text-accent font-semibold">+55 41 98468-1605</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kasa.sissi?igsh=MTlqeTFmcHhkcnk0YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Instagram className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-display mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-4">
                    Acompanhe nossas novidades e inspirações
                  </p>
                  <p className="text-accent font-semibold">@kasasissi</p>
                </div>
              </a>

              {/* Direct Instagram */}
              <a
                href="https://www.instagram.com/kasa.sissi?igsh=MTlqeTFmcHhkcnk0YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Instagram className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-display mb-2">Direct Instagram</h3>
                  <p className="text-muted-foreground mb-4">
                    Mande uma mensagem direto pelo Instagram
                  </p>
                  <p className="text-accent font-semibold">@kasa.sissi</p>
                </div>
              </a>
            </div>

            {/* Mercado Livre */}
            <div className="bg-secondary/20 rounded-lg p-12 text-center">
              <h2 className="mb-4">Também estamos no Mercado Livre</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Você pode conferir nossos produtos e fazer suas compras com toda segurança na plataforma do Mercado Livre.
              </p>
              <a
                href="https://www.mercadolivre.com.br/pagina/kasa_sissi?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-accent hover:bg-accent/90 text-primary-foreground">
                  Visitar Mercado Livre
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-center mb-16">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'Vocês fazem customizações?',
                  a: 'Sim! Podemos customizar cores, tamanhos e acabamentos. Fale conosco para conhecer as possibilidades.'
                },
                {
                  q: 'Qual é o prazo de entrega?',
                  a: 'Os prazos variam conforme o produto. Entre em contato conosco para informações específicas.'
                },
                {
                  q: 'Vocês entregam em todo o Brasil?',
                  a: 'Sim, entregamos em todo o Brasil. Os custos de frete variam conforme a localização.'
                },
                {
                  q: 'Como é o processo de compra?',
                  a: 'Você pode comprar via WhatsApp, Mercado Livre ou Instagram. Nós cuidamos de tudo!'
                },
                {
                  q: 'Qual é a garantia dos móveis?',
                  a: 'Todos os nossos móveis têm garantia de qualidade. Fale conosco para detalhes.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg mb-3">{item.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-primary-foreground mb-6 text-3xl font-display">Vamos transformar o seu espaço?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a escolher as melhores peças para integrar sua família com elegância.
            </p>
            <a
              href="https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Tenho%20uma%20dúvida."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90">
                <MessageCircle className="mr-2" size={20} />
                Fale Conosco
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
