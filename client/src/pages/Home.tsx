import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sofa, Leaf, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663464703620/LYJWvfzjFHVYE4ctjw5Kqb/hero-living-room-PuGLwm3fzMVun7zkiQJLV5.webp';
const CHILDREN_KITCHEN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663464703620/LYJWvfzjFHVYE4ctjw5Kqb/children-kitchen-cGTfJHgNvfGNAhXkpudWhc.webp';
const PET_FURNITURE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663464703620/LYJWvfzjFHVYE4ctjw5Kqb/pet-furniture-6oxNy5fvDwwXaBRA6dKgUU.webp';
const FAMILY_MOMENT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663464703620/LYJWvfzjFHVYE4ctjw5Kqb/family-moment-3gXVujr6LY4MBdrLMUMeeq.webp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Sala de estar com móveis KASA SISSI"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="container relative z-10 max-w-2xl">
            <h1 className="text-white mb-6 leading-tight">
              Móveis que integram sua casa, seus filhos e seus pets
            </h1>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Qualidade premium em marcenaria. Funcionalidade e estética em perfeita harmonia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/galeria">
                <a>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground w-full sm:w-auto">
                    Explorar Galeria
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
              </Link>
              <a
                href="https://wa.me/5541988681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-center mb-16">Por que escolher KASA SISSI?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sofa className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-display mb-3">Funcionalidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada móvel é projetado para integrar-se perfeitamente ao seu espaço, maximizando funcionalidade sem comprometer a estética.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-display mb-3">Qualidade Premium</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Madeira natural, acabamento impecável e atenção aos detalhes. Móveis que duram gerações.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-display mb-3">Integração Total</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Móveis para humanos, crianças e pets. Sua família inteira merece um espaço pensado para todos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-secondary/20">
          <div className="container">
            <h2 className="mb-16">Destaques do Catálogo</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Product 1 */}
              <div className="group overflow-hidden rounded-lg">
                <img
                  src={CHILDREN_KITCHEN}
                  alt="Cozinha Infantil"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="bg-card p-6">
                  <h3 className="text-xl font-display mb-2">Cozinhas Infantis</h3>
                  <p className="text-muted-foreground mb-4">
                    Educação através da brincadeira. Cozinhas de marcenaria para crianças de 4 a 10 anos.
                  </p>
                  <Link href="/galeria">
                    <a className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                      Ver mais <ArrowRight size={16} />
                    </a>
                  </Link>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group overflow-hidden rounded-lg">
                <img
                  src={PET_FURNITURE}
                  alt="Móvel Pet"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="bg-card p-6">
                  <h3 className="text-xl font-display mb-2">Móveis Pet</h3>
                  <p className="text-muted-foreground mb-4">
                    Conforto e estilo para seus companheiros. Móveis que decoram e funcionam perfeitamente.
                  </p>
                  <Link href="/galeria">
                    <a className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                      Ver mais <ArrowRight size={16} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/galeria">
                <a>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground">
                    Ver Galeria Completa
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Casa de Revista em Modo Vida Real</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A KASA SISSI acredita que um lar bonito não precisa ser perfeito. É sobre criar espaços funcionais, estéticos e aconchegantes onde a vida realmente acontece.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nossos móveis são projetados para famílias reais: com crianças brincando, pets descansando e momentos preciosos sendo vividos.
                </p>
                <a
                  href="https://wa.me/5541988681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-accent hover:bg-accent/90 text-primary-foreground">
                    Conversar com a gente
                  </Button>
                </a>
              </div>
              <img
                src={FAMILY_MOMENT}
                alt="Família aproveitando móveis KASA SISSI"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-primary-foreground mb-6">Pronto para transformar seu espaço?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore nossa galeria completa ou fale conosco para conhecer as possibilidades de customização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/galeria">
                <a>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Ver Galeria
                  </Button>
                </a>
              </Link>
              <a
                href="https://wa.me/5541988681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90">
                  WhatsApp
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
