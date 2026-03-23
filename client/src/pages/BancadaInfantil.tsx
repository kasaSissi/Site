import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site e quero mais informações sobre bancada de marcenaria infantil em MDF');

const faqs = [
  {
    q: 'A bancada infantil é segura para crianças pequenas?',
    a: 'Sim. Produzida com MDF de alta densidade, cantos arredondados e acabamento lixado. Sem farpas, sem quinas perigosas. Ideal para crianças a partir de 2 anos.',
  },
  {
    q: 'O que é uma bancada de marcenaria infantil?',
    a: 'É uma bancada de trabalho em tamanho infantil, inspirada nas bancadas de marceneiro adulto. Tem gavetas, superfície de trabalho e, em alguns modelos, pegboard para organizar ferramentas de brinquedo. Estimula a criatividade e a coordenação motora.',
  },
  {
    q: 'A bancada tem gavetas funcionais?',
    a: 'Sim! As gavetas são funcionais e servem para guardar ferramentas de brinquedo, lápis, tintas e outros materiais. Organização desde cedo.',
  },
  {
    q: 'Qual é o tamanho da bancada?',
    a: 'As medidas variam por modelo. Consulte as fichas técnicas completas pelo WhatsApp.',
  },
  {
    q: 'Vocês entregam em todo o Brasil?',
    a: 'Sim. Consulte prazo e frete pelo WhatsApp.',
  },
];

export default function BancadaInfantil() {
  const products = productsData.products.filter(p => p.category === 'bancadas');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>Bancada de Marcenaria Infantil em MDF | KASA SISSI</title>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-4xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Bancada Infantil</span>
            <h1 className="text-4xl md:text-5xl font-display mt-3 mb-4">Bancada de Marcenaria Infantil em MDF</h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Mais do que um móvel — uma forma de integrar infância, casa e convivência real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Bancada de trabalho infantil em MDF com gavetas, pegboard e superfície de atividades. Estimula a criatividade, a coordenação motora e a autonomia — e ainda fica linda na decoração da casa.
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
            <h2 className="text-3xl font-display mb-10">Bancadas Infantis de Madeira</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <img
                    src={p.image}
                    alt={`${p.name} - bancada infantil MDF KASA SISSI`}
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
            <h2 className="text-2xl font-display mb-6">Por que a bancada infantil estimula o desenvolvimento?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong>bancada de marcenaria infantil</strong> é uma das peças mais completas para o desenvolvimento da criança. Ao imitar o trabalho do adulto, ela estimula a criatividade, a concentração, a coordenação motora fina e o senso de realização.
              </p>
              <p>
                Na KASA SISSI, cada bancada infantil é produzida em MDF de alta qualidade com gavetas funcionais, pegboard para organizar ferramentas e superfície de trabalho na altura certa para a criança. Tudo pensado para o brincar livre e o aprendizado natural.
              </p>
              <p>
                E o melhor: nossa bancada infantil é bonita o suficiente para ficar em qualquer ambiente da casa. Sem parecer brinquedoteca. Sem conflito com a decoração. Só uma casa com vida e alegria — que é exatamente o que a KASA SISSI propõe.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-8">Perguntas frequentes sobre bancada de marcenaria infantil</h2>
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
              Tire suas dúvidas, veja mais fotos e escolha a bancada ideal para a sua criança.
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
