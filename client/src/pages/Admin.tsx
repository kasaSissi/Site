import { useState, useEffect } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trash2, Plus, Save, Loader2, CheckCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';

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

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  tags?: string[];
  display_name?: string;
}

export default function Admin() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [bancoProducts, setBancoProducts] = useState<Product[]>([]);
  const [cloudinaryImages, setCloudinaryImages] = useState<CloudinaryImage[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('cozinha');
  const [selectedBanco, setSelectedBanco] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());

  const saveProductsMutation = trpc.products.save.useMutation();

  // Redirecionar se não autenticado
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setLocation('/');
    }
  }, [loading, isAuthenticated, setLocation]);

  // Carregar imagens do Cloudinary
  useEffect(() => {
    if (isAuthenticated) {
      loadCloudinaryImages();
    }
  }, [isAuthenticated]);

  const loadCloudinaryImages = async () => {
    setLoadingImages(true);
    try {
      const response = await fetch('https://res.cloudinary.com/dipruvqks/image/list/Sitekasasissi.json');
      const data = await response.json();
      setCloudinaryImages(data.resources || []);
    } catch (error) {
      console.error('Erro ao carregar imagens:', error);
      alert('Erro ao carregar imagens do Cloudinary');
    } finally {
      setLoadingImages(false);
    }
  };

  const addProductFromImage = () => {
    if (!selectedImage) return;

    const newProduct: Product = {
      id: `product-${Date.now()}`,
      name: selectedImage.display_name || selectedImage.public_id,
      category: selectedCategory,
      description: 'Móvel funcional e elegante para sua casa.',
      image: selectedImage.secure_url,
      isBanco: selectedBanco
    };

    if (selectedBanco) {
      setBancoProducts([...bancoProducts, newProduct]);
    } else {
      setProducts([...products, newProduct]);
    }

    setShowForm(false);
    setSelectedImage(null);
    setSelectedCategory('cozinha');
    setSelectedBanco(false);
  };

  const deleteProduct = (id: string, isBanco: boolean) => {
    if (confirm('Deletar este produto?')) {
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

  const saveToDatabase = async () => {
    setSaveStatus('Salvando...');
    try {
      await saveProductsMutation.mutateAsync({
        products,
        bancoProducts
      });
      setSaveStatus('✅ Salvo com sucesso!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setSaveStatus('❌ Erro ao salvar');
    }
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
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display mb-2">Painel Admin</h1>
            <p className="text-muted-foreground">Gerencie seus produtos - {products.length + bancoProducts.length} itens</p>
          </div>
          <div className="flex gap-2">
            {saveStatus && <p className="text-sm">{saveStatus}</p>}
            <Button
              onClick={saveToDatabase}
              disabled={saveProductsMutation.isPending}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Save size={20} className="mr-2" />
              {saveProductsMutation.isPending ? 'Salvando...' : 'Salvar no Banco'}
            </Button>
          </div>
        </div>

        {/* Botão Adicionar */}
        <div className="mb-8">
          <Button
            onClick={() => {
              setShowForm(true);
              setSelectedImage(null);
            }}
            className="bg-accent hover:bg-accent/90 text-primary-foreground"
          >
            <Plus size={20} className="mr-2" />
            Adicionar Produto do Cloudinary
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
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.isCover && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <CheckCircle className="text-white" size={32} />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2 truncate">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                          <div className="flex gap-2 flex-wrap">
                            {!product.isCover && (
                              <button
                                onClick={() => setCover(product.id)}
                                className="flex-1 text-xs px-3 py-2 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                              >
                                Marcar Capa
                              </button>
                            )}
                            <button
                              onClick={() => deleteProduct(product.id, false)}
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
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 truncate">{product.name}</h3>
                      <button
                        onClick={() => deleteProduct(product.id, true)}
                        className="w-full text-xs px-3 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200"
                      >
                        <Trash2 size={14} className="inline mr-2" />
                        Deletar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dialog para selecionar imagem */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Adicionar Produto do Cloudinary</DialogTitle>
          </DialogHeader>

          {loadingImages ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="animate-spin mr-2" size={24} />
              <p>Carregando imagens...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Seleção de categoria */}
              <div>
                <label className="block text-sm font-medium mb-2">Categoria</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Checkbox Galeria */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isBanco"
                  checked={selectedBanco}
                  onChange={(e) => setSelectedBanco(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="isBanco" className="text-sm font-medium">
                  Adicionar à Galeria de Fotos
                </label>
              </div>

              {/* Grid de imagens */}
              <div>
                <label className="block text-sm font-medium mb-2">Selecione uma imagem:</label>
                <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-auto">
                  {cloudinaryImages.map(img => (
                    <div
                      key={img.public_id}
                      onClick={() => setSelectedImage(img)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage?.public_id === img.public_id
                          ? 'border-accent'
                          : 'border-transparent hover:border-muted'
                      }`}
                    >
                      <img
                        src={img.secure_url}
                        alt={img.display_name}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-2 pt-4">
                <Button
                  onClick={addProductFromImage}
                  disabled={!selectedImage}
                  className="flex-1 bg-accent hover:bg-accent/90 text-primary-foreground disabled:opacity-50"
                >
                  Adicionar
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
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
