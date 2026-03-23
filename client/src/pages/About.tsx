import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const WORKSPACE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663464703620/LYJWvfzjFHVYE4ctjw5Kqb/workspace-detail-PPXMXqioMvGypSWn4nvaHP.webp';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 bg-secondary/20">
          <div className="container">
            <h1 className="mb-4">Sobre a KASA SISSI</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Móveis que integram sua casa, seus filhos e seus pets em espaços funcionais e esteticamente agradáveis.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-display">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  A KASA SISSI nasceu da crença de que um lar não precisa perder a elegância para ser funcional. Criamos espaços onde o <strong>design de convivência</strong> permite que a vida real aconteça sem conflitos estéticos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Nossos móveis de marcenaria premium são projetados para famílias contemporâneas. Através de soluções inteligentes de <strong>gatificação estética</strong>, <strong>dog living</strong>, <strong>móveis infantis montessorianos</strong> e <strong>móveis funcionais para toda a casa</strong>, garantimos que cada ambiente seja belo e prático ao mesmo tempo.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                  Em parceria com a fábrica <em>Chiko i Kiare</em>, entregamos qualidade premium, acabamento impecável e MDF de alta qualidade. Isso é KASA SISSI.
                </p>
              </div>
              <img
                src={WORKSPACE_IMAGE}
                alt="Detalhe de craftsmanship"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/20">
          <div className="container">
            <h2 className="text-center mb-16">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Funcionalidade',
                  description: 'Cada móvel é projetado para servir um propósito real e melhorar sua vida diária.'
                },
                {
                  title: 'Qualidade',
                  description: 'Madeira natural, acabamento impecável e atenção aos detalhes em cada peça.'
                },
                {
                  title: 'Estética',
                  description: 'Design elegante e minimalista que se integra perfeitamente a qualquer ambiente.'
                },
                {
                  title: 'Integração',
                  description: 'Móveis para humanos, crianças e pets. Sua família inteira merece um espaço pensado.'
                }
              ].map((value, idx) => (
                <div key={idx} className="bg-background p-8 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="text-accent" size={24} />
                    <h3 className="text-xl font-display">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-center mb-16">Por que escolher KASA SISSI?</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                'Marcenaria de alto padrão com qualidade premium e acabamento impecável',
                'Design de convivência: integra humanos, crianças e pets sem perder a elegância',
                'Gatificação estética e soluções inteligentes de dog living',
                'Móveis infantis que acompanham o desenvolvimento e decoram o ambiente',
                'Prateleiras, nichos e móveis funcionais para toda a casa',
                'Estética minimalista e nórdica que se adapta a projetos arquitetônicos contemporâneos',
                'Produção em parceria com a excelência fabril da Chiko i Kiare'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-primary-foreground mb-6 text-3xl font-display">Pronto para transformar sua convivência?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore nossa coleção e descubra as melhores peças para integrar sua família com design e funcionalidade.
            </p>
            <a
              href="https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90">
                Conversar no WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
