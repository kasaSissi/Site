import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
            <h1 className="text-foreground mb-6 leading-tight text-4xl md:text-6xl">
              Móveis Premium para Integrar Crianças e Pets
            </h1>
            <h2 className="text-2xl md:text-3xl font-display text-foreground/90 mb-4">A casa de revista na vida real</h2>
            <p className="text-muted-foreground text-xl mb-8 leading-relaxed max-w-2xl">
              Aquela casa linda que você vê em revista, mas que REALMENTE funciona. Móveis de marcenaria funcional para gatificação, dog living e desenvolvimento infantil. Tudo no lugar, tudo bonito. Sem conflitos, sem bagunça, sem culpa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/galeria">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground w-full sm:w-auto">
                  Explorar Coleção
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button
                onClick={() => window.open('https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20design%20de%20convivência.', '_blank')}
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto"
              >
                Conversar
              </Button>
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
                  <Link href="/galeria" className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                    Ver coleção <ArrowRight size={16} />
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
                  <Link href="/galeria" className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                    Ver coleção <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/galeria">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground">
                  Ver Coleção Completa
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="mb-8 text-3xl font-display">Design de Convivência: O Fim do Conflito Estético</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A KASA SISSI não faz apenas móveis "para pet" ou "para criança". Nós criamos soluções de marcenaria premium para famílias que não abrem mão da elegância.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Imagine uma sala onde seu cão descansa em um nicho que parece uma obra de arte. Onde a <strong>gatificação</strong> acontece através de prateleiras que complementam a sua decoração. Onde a <strong>bancada de marcenaria infantil</strong> ou a cozinha de brincar da sua filha se integram à paleta de cores da casa.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Você pode trabalhar em paz, enquanto as crianças brincam e os pets relaxam. Sem a casa parecer um petshop ou uma brinquedoteca. Sem culpa de "estragar" a decoração.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium text-foreground">
                  Uma casa que flui naturalmente. Isso é Design de Convivência. Isso é KASA SISSI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-primary-foreground mb-6 text-3xl font-display">Pronto para repensar sua convivência?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore nossa coleção de marcenaria premium e descubra as melhores peças para integrar sua família com elegância.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/galeria">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Ver Coleção
                </Button>
              </Link>
              <Button
                onClick={() => window.open('https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20o%20design%20de%20convivência.', '_blank')}
                size="lg"
                className="bg-primary-foreground text-accent hover:bg-primary-foreground/90"
              >
                Conversar
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
