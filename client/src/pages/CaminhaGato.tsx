import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site e quero mais informações sobre caminha elevada para gato em MDF');

const faqs = [
  {
    q: 'A caminha elevada para gato é fácil de instalar?',
    a: 'Sim! Os modelos são projetados para fácil instalação e vêm com instruções completas. Consulte as opções pelo WhatsApp.',
  },
  {
    q: 'Qual é o peso suportado pela caminha?',
    a: 'Nossas caminhas suportam gatos de até 8kg com segurança. Para raças maiores, consulte os modelos reforçados pelo WhatsApp.',
  },
  {
    q: 'A caminha vem com almofada?',
    a: 'Dependendo do modelo, a almofada é inclusa ou vendida separadamente. Consulte as opções pelo WhatsApp.',
  },
  {
    q: 'O design cônico é exclusivo da KASA SISSI?',
    a: 'O formato cônico moderno é uma das nossas assinaturas de design. Combina elegância com funcionalidade e fica lindo em qualquer ambiente.',
  },
  {
    q: 'Vocês entregam em todo o Brasil?',
    a: 'Sim. Consulte prazo e frete pelo WhatsApp.',
  },
];

export default function CaminhaGato() {
  // Filtra produtos pet que são camas/caminhas
  const products = productsData.products.filter(p =>
    p.category === 'pet' && (
      p.name.toLowerCase().includes('cama') ||
      p.name.toLowerCase().includes('caminha')
    )
  );

  // Se não houver produtos específicos, mostra todos os pet
  const displayProducts = products.length > 0
    ? products
    : productsData.products.filter(p => p.category === 'pet').slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>Caminha Elevada para Gato em MDF | KASA SISSI</title>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-4xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Caminha para Gato</span>
            <h1 className="text-4xl md:text-5xl font-display mt-3 mb-4">Caminha Elevada para Gato em MDF</h1>
            <p className="text-xl text-accent font-medium mb-2">Design moderno em formato cônico</p>
            <p className="text-xl text-muted-foreground italic mb-6">
              Mais do que um móvel — uma forma de integrar infância, casa e convivência real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Cama para gato em MDF com design elegante e moderno. Conforto para o seu felino, estilo para a sua casa. Sem cara de petshop — só decoração de verdade.
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
            <h2 className="text-3xl font-display mb-10">Camas e Caminhas para Gatos de Madeira</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProducts.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <img
                    src={p.image}
                    alt={`${p.name} - caminha para gato MDF KASA SISSI`}
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
            <h2 className="text-2xl font-display mb-6">Cama para gato: conforto e design na mesma peça</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong>cama para gato</strong> da KASA SISSI é diferente de tudo que você já viu. Esqueça as caminhas de pelúcia colorida que parecem brinquedo. Aqui, cada peça é projetada como um móvel de verdade — com MDF de qualidade, acabamento impecável e design que valoriza o ambiente.
              </p>
              <p>
                A <strong>caminha para gato</strong> elevada é uma das peças mais pedidas. Além de confortável, ela estimula o instinto natural do gato de observar de cima e vira um elemento decorativo lindíssimo no ambiente.
              </p>
              <p>
                O <strong>nicho para gato</strong> com design cônico moderno é uma das assinaturas da KASA SISSI. Elegante, resistente e com almofada macia — o seu gato vai adorar, e a sua casa vai ficar ainda mais bonita.
              </p>
              <p>
                Isso é a <strong>cama para gato</strong> que você estava procurando: funcional, estética e integrada à vida real da sua casa.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-8">Perguntas frequentes sobre caminha elevada para gato</h2>
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
              Tire suas dúvidas, veja mais fotos e escolha a caminha ideal para o seu gato.
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
