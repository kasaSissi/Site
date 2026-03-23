import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site e quero mais informações sobre móveis para gatos em MDF');

const faqs = [
  {
    q: 'Os móveis para gatos em MDF são seguros?',
    a: 'Sim. Usamos MDF de alta densidade com acabamento lixado e tratado, sem farpas ou quinas perigosas. Todos os nichos e camas são testados para suportar o peso e o movimento dos gatos.',
  },
  {
    q: 'O que é gatificação e como funciona?',
    a: 'Gatificação é a adaptação do ambiente para atender às necessidades naturais do gato: escalar, observar de cima, descansar em locais elevados. Na KASA SISSI, fazemos isso com estética — sem transformar a casa num playground de plástico.',
  },
  {
    q: 'Os móveis para gatos são fixados ou ficam no chão?',
    a: 'Temos modelos para as duas situações. Consulte as opções disponíveis pelo WhatsApp e veja qual se encaixa melhor na sua casa.',
  },
  {
    q: 'Vocês fazem projetos personalizados de gatificação?',
    a: 'Sim! Criamos projetos personalizados de gatificação para a sua casa. Combinamos nichos, prateleiras e camas para criar um ambiente elegante e funcional para o seu gato. Fale com a gente pelo WhatsApp para saber mais.',
  },
  {
    q: 'Vocês entregam em todo o Brasil?',
    a: 'Sim. Consulte prazo e frete pelo WhatsApp.',
  },
];

export default function MoveisGatos() {
  const products = productsData.products.filter(p => p.category === 'pet');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>Móveis para Gatos em MDF | Gatificação | KASA SISSI</title>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-4xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Móveis para Gatos</span>
            <h1 className="text-4xl md:text-5xl font-display mt-3 mb-4">Móveis para Gatos em MDF</h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Mais do que um móvel — uma forma de integrar infância, casa e convivência real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Nichos, camas e móveis para gatos em MDF. Gatificação estética que transforma a casa sem virar petshop. Seu gato feliz, sua casa linda. Sem conflito.
            </p>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                💬 Falar no WhatsApp
              </Button>
            </a>
          </div>
        </section>

        {/* Produtos */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-display mb-10">Nichos e Camas para Gatos de Madeira</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <img
                    src={p.image}
                    alt={`${p.name} - móvel para gato MDF KASA SISSI`}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-lg mb-1">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
                    <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                        💬 Tenho interesse
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Texto SEO */}
        <section className="py-12 bg-secondary/10">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-6">Gatificação estética: seu gato feliz, sua casa linda</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Móveis para gatos</strong> são a solução perfeita para quem quer oferecer conforto e estimulação para o felino sem comprometer a decoração da casa. Na KASA SISSI, cada nicho, cama e prateleira para gato é pensada como uma peça de design — não como um acessório de petshop.
              </p>
              <p>
                A <strong>cama de gato</strong> integra o felino ao ambiente e vira um ponto focal bonito na decoração. O <strong>nicho para gato em MDF</strong> com almofada é confortável, resistente e elegante — combina com qualquer estilo de casa.
              </p>
              <p>
                Para quem quer ir além, temos <strong>projetos personalizados de gatificação</strong>: combinamos nichos, prateleiras e camas para criar um ambiente completo e elegante para o seu gato — sem parecer que você mora num petshop.
              </p>
              <p>
                Isso é gatificação KASA SISSI: estética, funcional e integrada à vida real da sua casa.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-8">Perguntas frequentes sobre móveis para gatos em MDF</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos Personalizados de Gatificação */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-3xl text-center">
            <div className="text-4xl mb-4">🐱</div>
            <h2 className="text-3xl font-display mb-4">Projetos Personalizados de Gatificação</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Quer criar um ambiente completo para o seu gato? Combinamos nichos, prateleiras e camas para montar a gatificação ideal para a sua casa — com o estilo KASA SISSI que você já conhece.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá, vim pelo site e quero saber mais sobre projetos personalizados de gatificação!')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                💬 Saiba mais no WhatsApp
              </Button>
            </a>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-accent/10">
          <div className="container text-center max-w-2xl">
            <h2 className="text-3xl font-display mb-4">Gostou? Fale com a gente</h2>
            <p className="text-muted-foreground mb-8">
              Tire suas dúvidas, veja mais fotos e monte a gatificação perfeita para a sua casa.
            </p>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                💬 Falar no WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
