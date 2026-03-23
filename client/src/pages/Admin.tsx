import { useState, useEffect } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trash2, Plus, Edit2, Save, Loader2, Download } from 'lucide-react';
import { useLocation } from 'wouter';
import { getLoginUrl } from '@/const';

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

interface ProductsData {
  products: Product[];
  bancoProducts: Product[];
}

export default function Admin() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
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
  const [saveStatus, setSaveStatus] = useState('');

  // Redirecionar se não autenticado
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setLocation('/');
    }
  }, [loading, isAuthenticated, setLocation]);

  // Carregar produtos
  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  const loadProducts = async () => {
    try {
      const response = await fetch('/data/products.json');
      const data: ProductsData = await response.json();
      setProducts(data.products || []);
      setBancoProducts(data.bancoProducts || []);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  const saveToFile = async () => {
    setSaveStatus('Salvando...');
    try {
      const data: ProductsData = {
        products,
        bancoProducts
      };

      // Salvar no localStorage como backup
      localStorage.setItem('kasasissi_products', JSON.stringify(data));
      
      // Log para você copiar e colar no arquivo
      console.log('Dados para salvar:', JSON.stringify(data, null, 2));
      
      setSaveStatus('✅ Salvo! (Copie os dados do console se precisar)');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setSaveStatus('❌ Erro ao salvar');
    }
  };

  const handleAddProduct = () => {
    if (!formData.image.trim()) {
      alert('Por favor, adicione um link de imagem');
      return;
    }

    if (editingProduct) {
      // Editar
      if (editingProduct.isBanco) {
        setBancoProducts(bancoProducts.map(p =>
          p.id === editingProduct.id
            ? { ...p, ...formData }
            : p
        ));
      } else {
        setProducts(products.map(p =>
          p.id === editingProduct.id
            ? { ...p, ...formData }
            : p
        ));
      }
      setEditingProduct(null);
    } else {
      // Adicionar novo
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

  const setCover = (id: string) => {
    setProducts(products.map(p => ({
      ...p,
      isCover: p.id === id ? true : false
    })));
  };

  const downloadJSON = () => {
    const data: ProductsData = {
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-display mb-4">Painel Admin</h1>
          <p className="text-muted-foreground mb-8">Você precisa fazer login para acessar o painel administrativo</p>
          <Button
            onClick={() => window.location.href = getLoginUrl()}
            className="bg-accent hover:bg-accent/90 text-primary-foreground"
          >
            Fazer Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display mb-2">Painel Admin</h1>
            <p className="text-muted-foreground">Bem-vindo, {user?.name}! Total: {products.length + bancoProducts.length} itens</p>
          </div>
          <div className="flex gap-2">
            {saveStatus && <p className="text-sm">{saveStatus}</p>}
            <Button
              onClick={downloadJSON}
              variant="outline"
            >
              <Download size={20} className="mr-2" />
              Baixar JSON
            </Button>
            <Button
              onClick={saveToFile}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Save size={20} className="mr-2" />
              Salvar
            </Button>
          </div>
        </div>

        {/* Botão Adicionar */}
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

        {/* Produtos por categoria */}
        <div className="space-y-12">
          {CATEGORIES.map(category => {
            const categoryProducts = products.filter(p => p.category === category.id);
            return (
              <div key={category.id}>
                <h2 className="text-2xl font-display mb-6">{category.label} ({categoryProducts.length})</h2>
                {categoryProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProducts.map(product => (
                      <div key={product.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative overflow-hidden bg-muted h-48">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                              Sem imagem
                            </div>
                          )}
                          {product.isCover && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white font-bold">CAPA</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                          <div className="flex gap-2 flex-wrap">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="flex-1 text-xs px-3 py-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 flex items-center justify-center gap-1"
                            >
                              <Edit2 size={14} />
                              Editar
                            </button>
                            {!product.isCover && (
                              <button
                                onClick={() => setCover(product.id)}
                                className="flex-1 text-xs px-3 py-2 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                              >
                                Marcar Capa
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteProduct(product.id, false)}
                              className="text-xs px-3 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Nenhum produto nesta categoria</p>
                )}
              </div>
            );
          })}

          {/* Galeria de Fotos */}
          {bancoProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-display mb-6">Galeria de Fotos ({bancoProducts.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bancoProducts.map(product => (
                  <div key={product.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden bg-muted h-48">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                          Sem imagem
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="flex-1 text-xs px-3 py-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 flex items-center justify-center gap-1"
                        >
                          <Edit2 size={14} />
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id, true)}
                          className="text-xs px-3 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Form Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}</DialogTitle>
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
  );
}
