import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sofa, Leaf, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="container relative z-10 max-w-3xl">
            <div className="mb-6">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">Design de Convivência</span>
            </div>
            <h1 className="text-foreground mb-6 leading-tight">
              Convivência Pensada
            </h1>
            <p className="text-muted-foreground text-xl mb-8 leading-relaxed max-w-2xl">
              Não é só móvel. É a casa no modo vida real. Onde cães descansam, gatos exploram, crianças brincam e a família inteira convive em harmonia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/galeria">
                <a>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground w-full sm:w-auto">
                    Explorar Coleção
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
              </Link>
              <a
                href="https://wa.me/5541846815605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20design%20de%20convivência."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">
                  Conversar
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Four Pillars */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="mb-4">Os Quatro Pilares</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada móvel KASA SISSI é pensado para integrar os universos que convivem em uma casa real.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pillar 1 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🐕</span>
                </div>
                <h3 className="text-2xl font-display mb-4">Dog Living</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Móveis que acolhem seus companheiros. Camas integradas, nichos estratégicos, espaços que decoram enquanto funcionam. Seu cão merece um lugar pensado para ele.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🐱</span>
                </div>
                <h3 className="text-2xl font-display mb-4">Gatificação Estética</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prateleiras que viram playground. Nichos que viram refúgio. Móveis que entendem o universo felino sem abrir mão da beleza. Gatos e design em perfeita harmonia.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">👧</span>
                </div>
                <h3 className="text-2xl font-display mb-4">Infância Integrada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cozinhas onde crianças aprendem brincando. Bancadas que educam. Móveis que crescem com elas. Espaços que entendem que infância é movimento, criatividade e descoberta.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-display mb-4">Móveis Funcionais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada centímetro serve um propósito. Armazenamento inteligente, acabamento impecável, design que melhora a vida. Beleza que funciona.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Gallery */}
        <section className="py-20 bg-secondary/20">
          <div className="container">
            <h2 className="mb-16">Coleção</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Product 1 Placeholder */}
              <div className="group overflow-hidden rounded-lg">
                <div className="w-full h-80 bg-muted flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">Imagem do Produto</p>
                    <p className="text-sm">Adicione via Cloudinary</p>
                  </div>
                </div>
                <div className="bg-card p-6">
                  <h3 className="text-xl font-display mb-2">Infância Integrada</h3>
                  <p className="text-muted-foreground mb-4">
                    Cozinhas, bancadas e móveis que transformam aprendizado em brincadeira.
                  </p>
                  <Link href="/galeria">
                    <a className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                      Ver coleção <ArrowRight size={16} />
                    </a>
                  </Link>
                </div>
              </div>

              {/* Product 2 Placeholder */}
              <div className="group overflow-hidden rounded-lg">
                <div className="w-full h-80 bg-muted flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">Imagem do Produto</p>
                    <p className="text-sm">Adicione via Cloudinary</p>
                  </div>
                </div>
                <div className="bg-card p-6">
                  <h3 className="text-xl font-display mb-2">Dog Living + Gatificação</h3>
                  <p className="text-muted-foreground mb-4">
                    Móveis que entendem cães e gatos. Funcionalidade que decora.
                  </p>
                  <Link href="/galeria">
                    <a className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                      Ver coleção <ArrowRight size={16} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/galeria">
                <a>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground">
                    Ver Coleção Completa
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="mb-8">Casa no Modo Vida Real</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A KASA SISSI não acredita em casas de revista onde ninguém vive. Acredita em espaços onde a vida acontece de verdade.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Onde cães descansam nos móveis, gatos exploram prateleiras, crianças brincam no chão, e a família inteira convive sem culpa de "sujar" o espaço.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Cada peça é pensada para ser bonita E funcional. Para decorar E servir. Para ser revista E ser vivida.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Isso é Design de Convivência. Isso é KASA SISSI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-primary-foreground mb-6">Pronto para repensar sua convivência?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore nossa coleção ou fale conosco para conhecer as possibilidades de design para sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/galeria">
                <a>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Ver Coleção
                  </Button>
                </a>
              </Link>
              <a
                href="https://wa.me/5541846815605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20o%20design%20de%20convivência."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary-foreground text-accent hover:bg-primary-foreground/90">
                  Conversar
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
