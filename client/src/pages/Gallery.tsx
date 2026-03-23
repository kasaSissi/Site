import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle, Loader2, Trash2, Plus, Settings } from 'lucide-react';
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
  isCover?: boolean;
  isBanco?: boolean;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [bancoProducts, setBancoProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBanco, setShowBanco] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'cozinha',
    description: '',
    image: '',
    isBanco: false
  });

  // Load products from JSON file
  useEffect(() => {
    setLoading(true);
    try {
      setProducts(productsData.products || []);
      setBancoProducts(productsData.bancoProducts || []);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setProducts([]);
      setBancoProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const addProduct = () => {
    if (!formData.image.trim()) {
      alert('Por favor, adicione um link de imagem');
      return;
    }

    const newProduct: Product = {
      id: `product-${Date.now()}`,
      name: formData.name || `Produto ${products.length + 1}`,
      category: formData.category,
      description: formData.description || 'Móvel funcional e elegante para sua casa.',
      image: formData.image,
      isBanco: formData.isBanco
    };

    if (formData.isBanco) {
      setBancoProducts([...bancoProducts, newProduct]);
    } else {
      setProducts([...products, newProduct]);
    }

    // Reset form
    setFormData({
      name: '',
      category: 'cozinha',
      description: '',
      image: '',
      isBanco: false
    });
    setShowAddForm(false);
  };

  const deleteProduct = (id: string, isBanco: boolean) => {
    if (confirm('Tem certeza que quer deletar?')) {
      if (isBanco) {
        setBancoProducts(bancoProducts.filter(p => p.id !== id));
      } else {
        setProducts(products.filter(p => p.id !== id));
      }
    }
  };

  const setCover = (id: string) => {
    setProducts(products.map(p => ({
      ...p,
      isCover: p.id === id
    })));
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const renderProductGrid = (items: Product[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(product => (
        <div key={product.id} className="group">
          <div className="relative overflow-hidden rounded-lg mb-4 bg-muted h-64 flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <p className="text-muted-foreground">Imagem não carregada</p>
            )}
            {product.isCover && (
              <div className="absolute top-2 right-2 bg-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Capa
              </div>
            )}
          </div>
          <h3 className="text-lg font-display mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedProduct(product)}
              className="flex-1 text-accent hover:text-accent/80 font-semibold text-sm"
            >
              Ver detalhes
            </button>
            {!product.isBanco && (
              <button
                onClick={() => setCover(product.id)}
                className={`text-xs px-2 py-1 rounded ${
                  product.isCover 
                    ? 'bg-accent text-primary-foreground' 
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {product.isCover ? '✓ Capa' : 'Marcar Capa'}
              </button>
            )}
            <button
              onClick={() => deleteProduct(product.id, product.isBanco || false)}
              className="text-destructive hover:text-destructive/80"
            >
              <Trash2 size={18} />
            </button>
          </div>
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
            <div className="flex justify-between items-start">
              <div>
                <h1 className="mb-4">Galeria de Móveis</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Explore nossa coleção de móveis funcionais e elegantes, pensados para integrar sua família e seus pets.
                </p>
              </div>
              <Button
                onClick={() => setShowAdminPanel(true)}
                variant="outline"
                size="sm"
              >
                <Settings size={18} className="mr-2" />
                Admin
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container">
            {/* Add Product Button */}
            <div className="mb-12">
              <Button
                onClick={() => setShowAddForm(true)}
                className="bg-accent hover:bg-accent/90 text-primary-foreground"
              >
                <Plus size={20} className="mr-2" />
                Adicionar Produto
              </Button>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setShowBanco(false);
                      setSelectedCategory(category.id);
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
                    Galeria de Fotos
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="animate-spin mr-2" size={24} />
                <p className="text-muted-foreground">Carregando produtos...</p>
              </div>
            ) : showBanco ? (
              bancoProducts.length > 0 ? (
                <>
                  <h2 className="text-2xl font-display mb-8">Galeria de Fotos</h2>
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

      {/* Add Product Form Dialog */}
      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Adicionar Novo Produto</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome do Produto</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Cozinha Infantil Premium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Categoria</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg"
              >
                {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Descrição</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descreva o móvel..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Link da Imagem (Cloudinary)</label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://res.cloudinary.com/..."
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isBanco"
                checked={formData.isBanco}
                onChange={(e) => setFormData({ ...formData, isBanco: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="isBanco" className="text-sm font-medium">
                Adicionar à Galeria de Fotos (pool geral)
              </label>
            </div>
            <div className="flex gap-2 pt-4">
              <Button
                onClick={addProduct}
                className="flex-1 bg-accent hover:bg-accent/90 text-primary-foreground"
              >
                Adicionar
              </Button>
              <Button
                onClick={() => setShowAddForm(false)}
                variant="outline"
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Admin Panel Dialog */}
      <Dialog open={showAdminPanel} onOpenChange={setShowAdminPanel}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Painel Admin - Gerenciar Produtos</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Produtos por Categoria */}
            {CATEGORIES.filter(c => c.id !== 'all').map(category => {
              const categoryProducts = products.filter(p => p.category === category.id);
              return (
                <div key={category.id} className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4">{category.label} ({categoryProducts.length})</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {categoryProducts.map(product => (
                      <div key={product.id} className="relative group">
                        <div className="relative overflow-hidden rounded-lg bg-muted h-40">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.isCover && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white font-bold">CAPA</span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs mt-2 truncate font-medium">{product.name}</p>
                        <div className="flex gap-1 mt-2">
                          <button
                            onClick={() => setCover(product.id)}
                            className={`flex-1 text-xs px-2 py-1 rounded ${
                              product.isCover 
                                ? 'bg-accent text-primary-foreground' 
                                : 'bg-muted hover:bg-muted/80'
                            }`}
                          >
                            {product.isCover ? '✓' : 'Capa'}
                          </button>
                          <button
                            onClick={() => deleteProduct(product.id, false)}
                            className="text-xs px-2 py-1 rounded bg-destructive/10 text-destructive hover:bg-destructive/20"
                          >
                            Del
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Galeria de Fotos */}
            {bancoProducts.length > 0 && (
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-4">Galeria de Fotos ({bancoProducts.length})</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {bancoProducts.map(product => (
                    <div key={product.id} className="relative group">
                      <div className="relative overflow-hidden rounded-lg bg-muted h-40">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs mt-2 truncate font-medium">{product.name}</p>
                      <button
                        onClick={() => deleteProduct(product.id, true)}
                        className="w-full text-xs px-2 py-1 rounded bg-destructive/10 text-destructive hover:bg-destructive/20 mt-2"
                      >
                        Deletar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onClick={() => setShowAdminPanel(false)}
              className="flex-1 bg-accent hover:bg-accent/90 text-primary-foreground"
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
                  <h3 className="font-semibold mb-2">Descrição</h3>
                  <p className="text-muted-foreground">{selectedProduct.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Categoria</p>
                    <p className="font-semibold">{CATEGORIES.find(c => c.id === selectedProduct.category)?.label}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ID</p>
                    <p className="font-semibold text-xs">{selectedProduct.id}</p>
                  </div>
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
