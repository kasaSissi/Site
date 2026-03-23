import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle, Loader2 } from 'lucide-react';
import productsData from '@/data/products.json';

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'cozinha', label: 'Cozinhas Infantis' },
  { id: 'bancadas', label: 'Bancadas' },
  { id: 'pet', label: 'Móveis Pet' },
  { id: 'mesas-infantis', label: 'Mesas Infantis' },
  { id: 'prateleiras', label: 'Prateleiras' },
  { id: 'cabeceira', label: 'Cabeceiras' },
  { id: 'outros', label: 'Outros' }
];

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      // Combina produtos e bancoProducts em uma lista única
      const all = [
        ...(productsData.products || []),
        ...(productsData.bancoProducts || []),
      ];
      setProducts(all);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const renderProductGrid = (items: Product[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(product => (
        <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
          <div className="relative overflow-hidden rounded-lg mb-4 bg-muted h-64">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Imagem indisponível</p>
              </div>
            )}
          </div>
          <h3 className="text-lg font-display mb-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
          <span className="text-accent hover:text-accent/80 font-semibold text-sm">
            Ver detalhes →
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container">
            <h1 className="mb-4">Galeria de Móveis</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore nossa coleção de móveis funcionais e elegantes, pensados para integrar sua família e seus pets.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container">

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-accent text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="animate-spin mr-2" size={24} />
                <p className="text-muted-foreground">Carregando produtos...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              renderProductGrid(filteredProducts)
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Nenhum produto disponível nesta categoria ainda.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-primary-foreground mb-6">Gostou de algum móvel?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Fale conosco pelo WhatsApp e conheça mais detalhes, preços e possibilidades de customização.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20móveis.', '_blank')}
              size="lg"
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90"
            >
              <MessageCircle className="mr-2" size={20} />
              Conversar no WhatsApp
            </Button>
          </div>
        </section>
      </main>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div>
                  <p className="text-muted-foreground">{selectedProduct.description}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Categoria</p>
                  <p className="font-semibold">{CATEGORIES.find(c => c.id === selectedProduct.category)?.label ?? 'Outros'}</p>
                </div>
                <Button
                  onClick={() => window.open('https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre%20' + encodeURIComponent(selectedProduct.name), '_blank')}
                  className="w-full bg-accent hover:bg-accent/90 text-primary-foreground"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Conversar no WhatsApp
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
