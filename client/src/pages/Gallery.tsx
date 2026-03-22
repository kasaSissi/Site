import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle, Loader2 } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'cozinhas', label: 'Cozinhas Infantis' },
  { id: 'bancadas', label: 'Bancadas' },
  { id: 'pet', label: 'Móveis Pet' },
  { id: 'mesas', label: 'Mesas' },
  { id: 'prateleiras', label: 'Prateleiras' },
  { id: 'outros', label: 'Outros' }
];

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  isBanco?: boolean;
}

const CLOUDINARY_CLOUD_NAME = 'dipruvqks';
const CLOUDINARY_PRESET = 'Sitekasasissi';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showUploadInfo, setShowUploadInfo] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [bancoProducts, setBancoProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBanco, setShowBanco] = useState(false);

  // Fetch images from Cloudinary
  useEffect(() => {
    const fetchCloudinaryImages = async () => {
      try {
        setLoading(true);
        // Fetch resources from Cloudinary using their API
        const response = await fetch(
          `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/list/${CLOUDINARY_PRESET}.json`
        );
        
        if (response.ok) {
          const data = await response.json();
          
          // Separate products into two groups: specific categories and banco (general pool)
          const specificProducts: Product[] = [];
          const bancoImages: Product[] = [];

          data.resources.forEach((resource: any, index: number) => {
            const tags = resource.tags || [];
            const isBanco = tags.includes('banco');

            const product: Product = {
              id: resource.public_id,
              name: resource.display_name || `Produto ${index + 1}`,
              category: 'outros',
              description: resource.description || 'Móvel funcional e elegante para sua casa.',
              image: resource.secure_url,
              isBanco: isBanco
            };

            if (isBanco) {
              bancoImages.push(product);
            } else {
              // Extract category from tags
              let category = 'outros';
              CATEGORIES.forEach(cat => {
                if (cat.id !== 'all' && tags.includes(cat.id)) {
                  category = cat.id;
                }
              });
              product.category = category;
              specificProducts.push(product);
            }
          });

          setProducts(specificProducts);
          setBancoProducts(bancoImages);
        } else {
          setProducts([]);
          setBancoProducts([]);
        }
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
        setProducts([]);
        setBancoProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCloudinaryImages();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const renderProductGrid = (productList: Product[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productList.map(product => (
        <div
          key={product.id}
          className="group cursor-pointer"
          onClick={() => setSelectedProduct(product)}
        >
          <div className="overflow-hidden rounded-lg mb-4 bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg font-display mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-12 bg-secondary/20">
          <div className="container">
            <h1 className="mb-4">Galeria de Produtos</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore nossa coleção completa de móveis funcionais e estéticos. Cada peça é cuidadosamente projetada para integrar-se perfeitamente ao seu espaço.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowBanco(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id && !showBanco
                      ? 'bg-accent text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
              {bancoProducts.length > 0 && (
                <button
                  onClick={() => {
                    setShowBanco(true);
                    setSelectedCategory('all');
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    showBanco
                      ? 'bg-accent text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  Mais Inspirações
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="animate-spin mr-2" size={24} />
                <p className="text-muted-foreground">Carregando produtos...</p>
              </div>
            ) : showBanco ? (
              bancoProducts.length > 0 ? (
                <>
                  <h2 className="text-2xl font-display mb-8">Mais Inspirações</h2>
                  {renderProductGrid(bancoProducts)}
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    Nenhuma imagem de inspiração disponível ainda.
                  </p>
                </div>
              )
            ) : filteredProducts.length > 0 ? (
              renderProductGrid(filteredProducts)
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-6">
                  Nenhum produto nesta categoria ainda.
                </p>
                <Button
                  onClick={() => setShowUploadInfo(true)}
                  className="bg-accent hover:bg-accent/90 text-primary-foreground"
                >
                  Adicionar Produtos
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Upload Info Section */}
        {products.length === 0 && bancoProducts.length === 0 && !loading && (
          <section className="py-16 bg-secondary/20">
            <div className="container text-center">
              <h2 className="mb-6">Sua galeria está vazia?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Faça upload de suas fotos no Cloudinary e elas aparecerão automaticamente aqui!
              </p>
              <Button
                onClick={() => setShowUploadInfo(true)}
                className="bg-accent hover:bg-accent/90 text-primary-foreground"
              >
                Como Fazer Upload de Produtos
              </Button>
            </div>
          </section>
        )}
      </main>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedProduct?.image && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            )}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProduct?.description}
                </p>
              </div>
              <a
                href="https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Tenho%20interesse%20neste%20produto."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary-foreground">
                  <MessageCircle className="mr-2" size={20} />
                  Fale Conosco no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Info Modal */}
      <Dialog open={showUploadInfo} onOpenChange={setShowUploadInfo}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Como Adicionar Produtos</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Para adicionar suas fotos de produtos automaticamente:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Acesse sua conta no <strong>Cloudinary</strong> (cloudinary.com)</li>
              <li>Faça upload de suas fotos de produtos</li>
              <li>Adicione tags para categorizar:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li><code className="bg-muted px-2 py-1 rounded">cozinhas</code> - Cozinhas infantis</li>
                  <li><code className="bg-muted px-2 py-1 rounded">bancadas</code> - Bancadas</li>
                  <li><code className="bg-muted px-2 py-1 rounded">pet</code> - Móveis pet</li>
                  <li><code className="bg-muted px-2 py-1 rounded">mesas</code> - Mesas</li>
                  <li><code className="bg-muted px-2 py-1 rounded">prateleiras</code> - Prateleiras</li>
                  <li><code className="bg-muted px-2 py-1 rounded">outros</code> - Outros móveis</li>
                  <li><code className="bg-muted px-2 py-1 rounded">banco</code> - Pool geral (Mais Inspirações)</li>
                </ul>
              </li>
              <li>As imagens aparecerão automaticamente aqui!</li>
            </ol>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
