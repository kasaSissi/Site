import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site e quero mais informações sobre prateleiras em MDF');

const faqs = [
  {
    q: 'As prateleiras em MDF suportam muito peso?',
    a: 'Sim. Nossas prateleiras são produzidas com MDF de alta densidade e fixação robusta. A capacidade de carga varia por modelo — consulte as fichas técnicas pelo WhatsApp.',
  },
  {
    q: 'Posso usar a prateleira na entrada da casa?',
    a: 'Com certeza! Temos modelos específicos para hall de entrada, com ganchos e nichos para organizar chaves, bolsas e itens do dia a dia com estilo.',
  },
  {
    q: 'As prateleiras vêm com suporte de parede?',
    a: 'Sim, todos os modelos incluem os suportes e instruções de instalação. Para dúvidas sobre instalação, fale com a gente pelo WhatsApp.',
  },
  {
    q: 'Posso usar a prateleira para gatificação?',
    a: 'Sim! Muitos clientes combinam nossas prateleiras decorativas com os nichos para gatos, criando uma gatificação elegante e integrada à decoração.',
  },
  {
    q: 'Qual o prazo de entrega?',
    a: 'Entregamos para todo o Brasil. Consulte prazo e frete pelo WhatsApp.',
  },
];

export default function PrateleirasMDF() {
  const products = productsData.products.filter(p => p.category === 'prateleiras');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>Prateleiras em MDF | KASA SISSI</title>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-4xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Prateleiras</span>
            <h1 className="text-4xl md:text-5xl font-display mt-3 mb-4">Prateleiras em MDF</h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Mais do que um móvel — uma forma de integrar infância, casa e convivência real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Prateleiras de parede em MDF com design decorativo e funcional. Organizam, decoram e transformam qualquer ambiente — da entrada ao quarto. Sem cara de depósito. Só estilo e praticidade.
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
            <h2 className="text-3xl font-display mb-10">Prateleiras Decorativas de Parede</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <img
                    src={p.image}
                    alt={`${p.name} - prateleira MDF KASA SISSI`}
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
            <h2 className="text-2xl font-display mb-6">Prateleira de parede: organização com estilo</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong>prateleira MDF</strong> é uma das soluções mais versáteis para a casa. Serve para organizar livros, plantas, objetos decorativos, chaves e muito mais — tudo com elegância e sem ocupar espaço no chão.
              </p>
              <p>
                Na KASA SISSI, cada <strong>prateleira de parede</strong> é pensada para ser bonita e funcional ao mesmo tempo. O MDF de alta densidade garante resistência, e o acabamento impecável garante que a prateleira se torne parte da decoração — não apenas um suporte.
              </p>
              <p>
                Nossas <strong>prateleiras decorativas</strong> também são muito usadas em projetos de gatificação, criando percursos elegantes para os gatos sem comprometer a estética da casa. Uma solução que une funcionalidade, beleza e amor pelos pets.
              </p>
              <p>
                Escolha o modelo ideal para o seu espaço e fale com a gente pelo WhatsApp. Entregamos para todo o Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-8">Perguntas frequentes sobre prateleiras em MDF</h2>
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
              Tire suas dúvidas, veja mais fotos e escolha o modelo ideal para a sua casa.
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
