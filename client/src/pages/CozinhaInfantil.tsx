import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import productsData from '@/data/products.json';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site e quero mais informações sobre cozinha infantil em MDF');

const faqs = [
  {
    q: 'A cozinha infantil em MDF é resistente?',
    a: 'Sim. Usamos MDF de alta densidade com acabamento em laca ou natural, resistente ao uso diário das crianças. As peças são lixadas e tratadas para evitar farpas e garantir segurança.',
  },
  {
    q: 'A partir de qual idade a criança pode usar?',
    a: 'Nossas cozinhas infantis são indicadas para crianças a partir de 18 meses. O design montessoriano incentiva a autonomia e o brincar livre desde cedo.',
  },
  {
    q: 'Qual é o tamanho padrão da cozinha infantil?',
    a: 'As medidas variam por modelo. Entre em contato pelo WhatsApp para receber as fichas técnicas completas com dimensões e opções de acabamento.',
  },
  {
    q: 'Posso escolher a cor?',
    a: 'Sim! Trabalhamos com acabamentos em branco, natural madeira e outras opções. Consulte disponibilidade pelo WhatsApp.',
  },
  {
    q: 'Vocês entregam em todo o Brasil?',
    a: 'Sim, entregamos para todo o território nacional. Consulte prazo e frete pelo WhatsApp.',
  },
];

export default function CozinhaInfantil() {
  const products = productsData.products.filter(p => p.category === 'cozinha');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <title>Cozinha Infantil em MDF | KASA SISSI</title>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/20">
          <div className="container max-w-4xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Cozinha Infantil</span>
            <h1 className="text-4xl md:text-5xl font-display mt-3 mb-4">Cozinha Infantil em MDF</h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Mais do que um móvel — uma forma de integrar infância, casa e convivência real.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Cozinha infantil de madeira MDF com design montessoriano. Incentiva a autonomia, o brincar livre e o desenvolvimento da criança — e ainda combina com a decoração da sua casa. Sem cara de brinquedoteca. Só estilo e funcionalidade.
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
            <h2 className="text-3xl font-display mb-10">Cozinhas Infantis de Madeira</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <img
                    src={p.image}
                    alt={`${p.name} - cozinha infantil MDF KASA SISSI`}
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
            <h2 className="text-2xl font-display mb-6">Por que escolher uma cozinha infantil em MDF?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong>cozinha infantil em MDF</strong> é uma das peças mais completas para o desenvolvimento da criança. Ao imitar o ambiente da cozinha real, ela estimula a imaginação, a linguagem, a coordenação motora e a convivência social — tudo isso de forma lúdica e natural.
              </p>
              <p>
                Na KASA SISSI, cada <strong>cozinha infantil de madeira</strong> é pensada para ser bonita o suficiente para ficar na sala, no quarto ou em qualquer ambiente da casa. Sem cores berrantes, sem plástico barato. Só madeira MDF de qualidade, acabamento impecável e design que conversa com a decoração da sua casa.
              </p>
              <p>
                Seguindo os princípios da <strong>cozinha montessori</strong>, nossas peças têm altura adequada para a criança, superfícies seguras e espaços que incentivam a autonomia. A criança aprende fazendo — e faz com alegria.
              </p>
              <p>
                A casa de revista com vida de verdade começa aqui: onde a cozinha de brincar da sua filha combina com a sua, e a infância acontece sem conflito estético.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-display mb-8">Perguntas frequentes sobre cozinha infantil em MDF</h2>
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
