import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const WA_NUMBER = '5541984681605';
const WA_MSG = encodeURIComponent('Olá, vim pelo site KASA SISSI e quero mais informações!');

const categories = [
  {
    title: 'Cozinha Infantil em MDF',
    description: 'Cozinha de brincar montessoriana. Bonita o suficiente para ficar na sala.',
    href: '/cozinha-infantil-mdf',
    emoji: '🍳',
    keywords: 'cozinha infantil madeira, cozinha montessori',
  },
  {
    title: 'Mesa e Cadeira Infantil',
    description: 'Mesa infantil de madeira para refeições, atividades e leitura.',
    href: '/mesa-infantil-mdf',
    emoji: '🪑',
    keywords: 'mesa infantil madeira, mesa montessori',
  },
  {
    title: 'Bancada de Marcenaria Infantil',
    description: 'Bancada com gavetas e pegboard. Criatividade e organização desde cedo.',
    href: '/bancada-infantil-mdf',
    emoji: '🔨',
    keywords: 'bancada infantil, bancada de atividades',
  },
  {
    title: 'Móveis para Gatos',
    description: 'Nichos, camas e gatificação estética. Sem cara de petshop.',
    href: '/moveis-para-gatos-mdf',
    emoji: '🐱',
    keywords: 'nicho para gato, gatificação, móveis para gatos parede',
  },
  {
    title: 'Caminha Elevada para Gato',
    description: 'Design cônico moderno. Conforto para o gato, estilo para a casa.',
    href: '/caminha-para-gato-mdf',
    emoji: '😺',
    keywords: 'cama para gato, caminha para gato parede',
  },
  {
    title: 'Prateleiras em MDF',
    description: 'Prateleiras de parede decorativas e funcionais para toda a casa.',
    href: '/prateleiras-mdf',
    emoji: '📚',
    keywords: 'prateleira MDF, prateleira de parede decorativa',
  },
  {
    title: 'Quarto Infantil',
    description: 'Móveis montessorianos para o quarto da criança. Bonito e funcional.',
    href: '/quarto-infantil-mdf',
    emoji: '🛏️',
    keywords: 'quarto infantil, móveis quarto infantil, quarto montessori',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section com imagem real */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <img
            src="/hero-familia.jpg"
            alt="Família com pets e crianças em sala decorada com móveis KASA SISSI - casa de revista com vida de verdade"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="container relative z-10 max-w-3xl">
            <div className="mb-4">
              <span className="text-white/80 font-semibold text-sm tracking-widest uppercase">Móveis em MDF para Pets, Crianças e Casa</span>
            </div>
            <h1 className="text-white mb-6 leading-tight text-4xl md:text-6xl font-display drop-shadow-lg">
              A casa de revista com vida de verdade
            </h1>
            <p className="text-white/90 text-xl mb-8 leading-relaxed max-w-2xl drop-shadow">
              Aquela casa linda de revista, mas com pets, crianças e momentos reais. Tudo no lugar, tudo bonito. Sem virar petshop. Sem virar brinquedoteca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/galeria">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground w-full sm:w-auto">
                  Ver Coleção Completa
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                  💬 Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Blocos de Categoria */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4">Móveis Infantis e Pet em MDF</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escolha a categoria e descubra as peças certas para a sua casa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <Link key={cat.href} href={cat.href}>
                  <div className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                    <div className="text-4xl mb-4">{cat.emoji}</div>
                    <h3 className="font-display text-lg mb-2 group-hover:text-accent transition-colors">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{cat.description}</p>
                    <div className="mt-4 flex items-center text-accent text-sm font-semibold">
                      Ver produtos <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Imagem hero gerada + Filosofia */}
        <section className="py-20 bg-secondary/10">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/hero-kasa-sissi.jpg"
                  alt="Sala de estar com nicho para gato, caminha para cachorro e cozinha infantil de madeira - KASA SISSI"
                  className="rounded-2xl w-full object-cover shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display mb-6">A casa de revista é linda. Mas é fria.</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Parece que ninguém mora lá. A KASA SISSI existe para <strong className="text-foreground">devolver a vida a ela</strong>.
                  </p>
                  <p>
                    O cão que descansa no nicho elegante. O gato que sobe pelas prateleiras que decoram. A criança que cozinha de mentira na cozinha de brincar que combina com a sua.
                  </p>
                  <p>
                    Vida, alegria e movimento. <strong className="text-foreground">Sem virar petshop. Sem virar brinquedoteca.</strong> Sem culpa de "estragar" a decoração.
                  </p>
                  <p className="font-medium text-foreground">
                    Uma casa que respira. Isso é KASA SISSI.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/sobre">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      Conheça a marca
                    </Button>
                  </Link>
                  <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      💬 Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quatro Pilares */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display mb-4">Por que escolher KASA SISSI?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada móvel é pensado para integrar os universos que convivem em uma casa real.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🐕</span>
                </div>
                <h3 className="text-xl font-display mb-3">Dog Living</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Camas elevadas, nichos e móveis para cães que decoram enquanto funcionam. Seu companheiro merece um espaço pensado para ele.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🐱</span>
                </div>
                <h3 className="text-xl font-display mb-3">Gatificação Estética</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Nichos, prateleiras e camas de parede para gatos. Gatificação que integra o felino à decoração — sem cara de petshop.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">👧</span>
                </div>
                <h3 className="text-xl font-display mb-3">Infância Integrada</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Cozinhas, bancadas e mesas infantis em MDF. Design montessoriano que estimula a autonomia e combina com a casa.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-display mb-3">Casa Funcional</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Prateleiras, nichos e soluções para toda a casa. Organização inteligente com acabamento impecável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-primary-foreground mb-6 text-3xl font-display">Pronto para transformar a sua casa?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore nossa coleção completa de móveis em MDF para pets, crianças e toda a casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/galeria">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Ver Coleção Completa
                </Button>
              </Link>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-accent hover:bg-white/90">
                  💬 Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
