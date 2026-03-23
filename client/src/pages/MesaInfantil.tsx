import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site e quero mais informações sobre mesa e cadeira infantil em MDF');

const faqs = [
  {
    q: 'A mesa infantil em MDF é segura para crianças pequenas?',
    a: 'Sim. Nossas mesas são produzidas com MDF de alta densidade, cantos arredondados e acabamento lixado. Sem farpas, sem quinas vivas. Segurança em primeiro lugar.',
  },
  {
    q: 'Qual a altura ideal da mesa infantil?',
    a: 'Trabalhamos com alturas adequadas para crianças de 2 a 6 anos, seguindo os princípios montessorianos de ergonomia e autonomia. Consulte as fichas técnicas pelo WhatsApp.',
  },
  {
    q: 'Posso usar a mesa infantil para refeições e atividades?',
    a: 'Sim! Nossas mesas são versáteis: servem para refeições, desenho, leitura e atividades em geral. A superfície é fácil de limpar.',
  },
  {
    q: 'As cadeiras são vendidas separadas?',
    a: 'Dependendo do modelo, vendemos o conjunto completo ou separado. Consulte disponibilidade pelo WhatsApp.',
  },
  {
    q: 'Qual é o prazo de entrega?',
    a: 'O prazo varia conforme a região. Entre em contato pelo WhatsApp para informações de entrega e frete.',
  },
];

export default function MesaInfantil() {
  const products = productsData.products.filter(p => p.category === 'mesas-infantis');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>Mesa e Cadeira Infantil em MDF | KASA SISSI</title>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-4xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Mesa Infantil</span>
            <h1 className="text-4xl md:text-5xl font-display mt-3 mb-4">Mesa e Cadeira Infantil em MDF</h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Mais do que um móvel — uma forma de integrar infância, casa e convivência real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Mesa infantil de madeira MDF com design montessoriano. Ideal para refeições, atividades, desenho e leitura. Bonita o suficiente para ficar em qualquer ambiente da casa — sem parecer brinquedoteca.
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
            <h2 className="text-3xl font-display mb-10">Mesas e Cadeiras Infantis de Madeira</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <img
                    src={p.image}
                    alt={`${p.name} - mesa infantil MDF KASA SISSI`}
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
            <h2 className="text-2xl font-display mb-6">Mesa infantil de madeira: funcional e bonita</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong>mesa infantil de madeira</strong> é muito mais do que um móvel para criança. É o espaço onde ela come, cria, aprende e se desenvolve. Por isso, cada detalhe importa: altura certa, material seguro, design que respeita o ambiente da casa.
              </p>
              <p>
                Na KASA SISSI, a <strong>mesa e cadeira infantil</strong> é pensada para durar e para combinar. Usamos MDF de qualidade com acabamento lixado e tratado, sem farpas e sem quinas perigosas. O design segue os princípios da <strong>mesa montessori</strong>: altura adequada, autonomia incentivada, criança no centro.
              </p>
              <p>
                E o melhor: nossas mesas infantis ficam bonitas em qualquer cômodo. Na sala, no quarto, na varanda. Sem conflito com a decoração. Sem parecer brinquedoteca. Só uma casa com vida e alegria.
              </p>
              <p>
                Escolha o modelo ideal para a sua família e fale com a gente pelo WhatsApp. Entregamos para todo o Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-8">Perguntas frequentes sobre mesa infantil em MDF</h2>
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
              Tire suas dúvidas, veja mais fotos e escolha o modelo ideal para a sua família.
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
