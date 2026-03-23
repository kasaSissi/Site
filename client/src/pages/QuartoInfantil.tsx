import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site e quero mais informações sobre móveis para quarto infantil em MDF');

const faqs = [
  {
    q: 'Os móveis para quarto infantil em MDF são seguros?',
    a: 'Sim. Usamos MDF de alta densidade com acabamento lixado e tratado, cantos arredondados e sem farpas. Todos os móveis seguem padrões de segurança para uso infantil.',
  },
  {
    q: 'O que é um quarto montessori?',
    a: 'O quarto montessori é um ambiente pensado para a autonomia da criança: móveis na altura dela, espaços acessíveis, organização visual. Na KASA SISSI, aplicamos esses princípios sem abrir mão do estilo.',
  },
  {
    q: 'Vocês fazem cabeceira infantil?',
    a: 'Sim! Temos modelos de cabeceira infantil em MDF com design moderno e acabamento impecável. Consulte as opções pelo WhatsApp.',
  },
  {
    q: 'Os móveis combinam com outros estilos de decoração?',
    a: 'Sim. Nosso design minimalista e nórdico combina com apartamentos modernos, casas contemporâneas e projetos de arquitetura de alto padrão.',
  },
  {
    q: 'Vocês entregam em todo o Brasil?',
    a: 'Sim. Consulte prazo e frete pelo WhatsApp.',
  },
];

export default function QuartoInfantil() {
  // Usa bancadas + mesas como produtos do quarto infantil
  const products = [
    ...productsData.products.filter(p => p.category === 'bancadas'),
    ...productsData.products.filter(p => p.category === 'mesas-infantis'),
  ].slice(0, 9);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>Móveis para Quarto Infantil em MDF | KASA SISSI</title>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-4xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Quarto Infantil</span>
            <h1 className="text-4xl md:text-5xl font-display mt-3 mb-4">Móveis para Quarto Infantil em MDF</h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Mais do que um móvel — uma forma de integrar infância, casa e convivência real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Móveis infantis em MDF para quarto: cabeceira, bancada, mesa e muito mais. Design montessoriano que incentiva a autonomia e combina com a decoração da casa. Sem cara de brinquedoteca.
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
            <h2 className="text-3xl font-display mb-10">Móveis Infantis de Madeira para o Quarto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <img
                    src={p.image}
                    alt={`${p.name} - móvel quarto infantil MDF KASA SISSI`}
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
            <h2 className="text-2xl font-display mb-6">Quarto infantil bonito e funcional: é possível</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Móveis para quarto infantil</strong> não precisam ser coloridos, plásticos ou cheios de personagens. Na KASA SISSI, acreditamos que o quarto da criança pode ser tão bonito quanto qualquer outro ambiente da casa — e ainda mais funcional.
              </p>
              <p>
                Nossa linha de <strong>móveis quarto infantil</strong> inclui bancadas de atividades, mesas, cadeiras e peças de organização, todos em MDF de alta qualidade com acabamento impecável. O design segue os princípios do <strong>quarto montessori</strong>: altura adequada, autonomia incentivada, organização visual.
              </p>
              <p>
                A <strong>cabeceira infantil</strong> em MDF é uma das peças mais pedidas. Com design minimalista e nórdico, ela transforma o quarto da criança sem conflitar com a decoração do resto da casa.
              </p>
              <p>
                Um quarto infantil KASA SISSI é um quarto com vida, alegria e estilo. Exatamente como a casa de revista que você sempre quis — mas com criança de verdade morando lá.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-8">Perguntas frequentes sobre móveis para quarto infantil</h2>
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

        {/* CTA Final */}
        <section className="py-16 bg-accent/10">
          <div className="container text-center max-w-2xl">
            <h2 className="text-3xl font-display mb-4">Gostou? Fale com a gente</h2>
            <p className="text-muted-foreground mb-8">
              Tire suas dúvidas, veja mais fotos e monte o quarto ideal para a sua criança.
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
