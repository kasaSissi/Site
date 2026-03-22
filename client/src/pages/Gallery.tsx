import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

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
  image?: string;
}

// Sample products - will be replaced with user uploads
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cozinha Infantil Rosa',
    category: 'cozinhas',
    description: 'Cozinha de marcenaria com acabamento em rosa e bege. Inclui fogão, forno, pia e espaço de armazenamento.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663464703620/LYJWvfzjFHVYE4ctjw5Kqb/children-kitchen-cGTfJHgNvfGNAhXkpudWhc.webp'
  },
  {
    id: '2',
    name: 'Móvel Pet Integrado',
    category: 'pet',
    description: 'Cama para pet integrada a prateleiras e nichos. Madeira natural com almofada cinza.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663464703620/LYJWvfzjFHVYE4ctjw5Kqb/pet-furniture-6oxNy5fvDwwXaBRA6dKgUU.webp'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showUploadInfo, setShowUploadInfo] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? SAMPLE_PRODUCTS
    : SAMPLE_PRODUCTS.filter(p => p.category === selectedCategory);

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
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="overflow-hidden rounded-lg mb-4 bg-muted">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-64 flex items-center justify-center text-muted-foreground">
                          Sem imagem
                        </div>
                      )}
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
        <section className="py-16 bg-secondary/20">
          <div className="container text-center">
            <h2 className="mb-6">Sua galeria está vazia?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Você pode fazer upload de suas fotos de produtos diretamente neste site. Clique no botão abaixo para começar.
            </p>
            <Button
              onClick={() => setShowUploadInfo(true)}
              className="bg-accent hover:bg-accent/90 text-primary-foreground"
            >
              Como Fazer Upload de Produtos
            </Button>
          </div>
        </section>
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
              Para adicionar suas fotos de produtos, você pode:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Criar uma conta gratuita no <strong>Cloudinary</strong> (cloudinary.com)</li>
              <li>Fazer upload de suas fotos lá</li>
              <li>Copiar o link da imagem</li>
              <li>Entrar em contato conosco via WhatsApp para adicionar ao site</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-6">
              Ou, se preferir, envie suas fotos via WhatsApp que nós adicionamos para você!
            </p>
            <a
              href="https://wa.me/5541984681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20adicionar%20fotos%20de%20produtos%20ao%20site."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary-foreground">
                <MessageCircle className="mr-2" size={20} />
                Fale Conosco
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
