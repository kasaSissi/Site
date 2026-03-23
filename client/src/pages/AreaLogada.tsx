import { useState, useEffect } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trash2, Plus, Edit2, Loader2, Download } from 'lucide-react';
import { getLoginUrl } from '@/const';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import productsData from '@/data/products.json';

const CATEGORIES = [
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

export default function AreaLogada() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [bancoProducts, setBancoProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'cozinha',
    description: '',
    image: '',
    isBanco: false
  });

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.products || []);
      setBancoProducts(productsData.bancoProducts || []);
    }
  }, []);

  const handleAddProduct = () => {
    if (!formData.image.trim()) {
      alert('Por favor, adicione um link de imagem');
      return;
    }

    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData }
          : p
      ));
      setEditingProduct(null);
    } else {
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
    }

    setFormData({
      name: '',
      category: 'cozinha',
      description: '',
      image: '',
      isBanco: false
    });
    setShowForm(false);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      image: product.image,
      isBanco: product.isBanco || false
    });
    setShowForm(true);
  };

  const handleDeleteProduct = (id: string, isBanco: boolean) => {
    if (confirm('Tem certeza que quer deletar?')) {
      if (isBanco) {
        setBancoProducts(bancoProducts.filter(p => p.id !== id));
      } else {
        setProducts(products.filter(p => p.id !== id));
      }
    }
  };

  const downloadJSON = () => {
    const data = {
      products,
      bancoProducts
    };
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2)));
    element.setAttribute('download', 'products.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin mr-2" size={24} />
        <p>Carregando...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-display mb-4">Área Logada</h1>
            <p className="text-muted-foreground mb-8">
              Faça login para acessar o painel administrativo e gerenciar seus produtos.
            </p>
            <Button
              onClick={() => window.location.href = getLoginUrl()}
              className="bg-accent hover:bg-accent/90 text-primary-foreground px-8 py-3"
              size="lg"
            >
              Fazer Login
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-display">Painel Admin</h1>
            <div className="flex gap-4">
              <Button
                onClick={downloadJSON}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Download size={18} />
                Baixar JSON
              </Button>
              <Button
                onClick={() => logout()}
                variant="outline"
              >
                Sair
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <Button
              onClick={() => {
                setEditingProduct(null);
                setFormData({
                  name: '',
                  category: 'cozinha',
                  description: '',
                  image: '',
                  isBanco: false
                });
                setShowForm(true);
              }}
              className="bg-accent hover:bg-accent/90 text-primary-foreground"
            >
              <Plus size={20} className="mr-2" />
              Adicionar Produto
            </Button>
          </div>

          {/* Products by Category */}
          {CATEGORIES.map(category => {
            const categoryProducts = products.filter(p => p.category === category.id);
            if (categoryProducts.length === 0) return null;

            return (
              <div key={category.id} className="mb-12">
                <h2 className="text-2xl font-display mb-6">{category.label}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map(product => (
                    <div key={product.id} className="border border-border rounded-lg p-4">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded mb-4"
                        />
                      )}
                      <h3 className="font-display text-lg mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleEditProduct(product)}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Edit2 size={16} className="mr-1" />
                          Editar
                        </Button>
                        <Button
                          onClick={() => handleDeleteProduct(product.id, false)}
                          variant="outline"
                          size="sm"
                          className="text-destructive"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Banco Products */}
          {bancoProducts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-display mb-6">Galeria de Fotos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bancoProducts.map(product => (
                  <div key={product.id} className="border border-border rounded-lg p-4">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                    )}
                    <h3 className="font-display text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleEditProduct(product)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Edit2 size={16} className="mr-1" />
                        Editar
                      </Button>
                      <Button
                        onClick={() => handleDeleteProduct(product.id, true)}
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add/Edit Product Dialog */}
          <Dialog open={showForm} onOpenChange={setShowForm}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}
                </DialogTitle>
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
                    {CATEGORIES.map(cat => (
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
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Link da Imagem (URL completa)</label>
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
                    Adicionar à Galeria de Fotos
                  </label>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={handleAddProduct}
                    className="flex-1 bg-accent hover:bg-accent/90 text-primary-foreground"
                  >
                    {editingProduct ? 'Atualizar' : 'Adicionar'}
                  </Button>
                  <Button
                    onClick={() => setShowForm(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
}
