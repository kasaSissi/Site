# 📝 Guia de Edição do Site KASA SISSI

Você pode editar o site facilmente! Este guia mostra como fazer as mudanças mais comuns.

---

## 🖼️ Como Adicionar/Trocar Imagens

### Opção 1: Usar o Visual Editor do Manus (Mais Fácil)
1. Abra o site no painel do Manus
2. Clique em "Preview"
3. Selecione qualquer imagem no site
4. Clique em "Edit" e escolha uma nova imagem
5. Salve as mudanças

### Opção 2: Editar o Código (Para Quem Prefere)

As imagens estão em dois lugares principais:

**1. Homepage (Home.tsx)**
```
client/src/pages/Home.tsx
```

Procure por linhas como:
```
const HERO_IMAGE = 'https://...'
const CHILDREN_KITCHEN = 'https://...'
const PET_FURNITURE = 'https://...'
const FAMILY_MOMENT = 'https://...'
```

**Como trocar:**
1. Faça upload da sua foto no Cloudinary
2. Copie o link da imagem
3. Substitua a URL inteira entre as aspas

**Exemplo:**
```javascript
// Antes:
const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/...old-image.webp'

// Depois:
const HERO_IMAGE = 'https://cloudinary.com/...sua-nova-imagem.webp'
```

**2. Galeria de Produtos (Gallery.tsx)**
```
client/src/pages/Gallery.tsx
```

Procure por `SAMPLE_PRODUCTS` e edite as imagens dos produtos:
```javascript
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cozinha Infantil Rosa',
    category: 'cozinhas',
    description: 'Sua descrição aqui',
    image: 'https://cloudinary.com/...sua-imagem.webp'  // ← Edite aqui
  },
  ...
]
```

---

## ✏️ Como Editar Textos

Todos os textos podem ser editados diretamente no código. Procure pelo texto que quer mudar e substitua.

### Exemplos:

**Homepage - Título Principal**
Arquivo: `client/src/pages/Home.tsx`
```javascript
<h1 className="text-white mb-6 leading-tight">
  Móveis que integram sua casa, seus filhos e seus pets  // ← Edite aqui
</h1>
```

**Descrições de Produtos**
Arquivo: `client/src/pages/Gallery.tsx`
```javascript
{
  id: '1',
  name: 'Cozinha Infantil Rosa',
  category: 'cozinhas',
  description: 'Sua nova descrição aqui',  // ← Edite aqui
  image: '...'
}
```

**Seção "Por que escolher KASA SISSI?"**
Arquivo: `client/src/pages/Home.tsx`
Procure por `Value Proposition` e edite os textos dos 3 cards.

---

## 🎨 Como Mudar Cores

Todas as cores estão definidas em um único arquivo:
```
client/src/index.css
```

**Cores principais:**
- `--primary: #8B7355;` - Marrom natural (botões, destaque)
- `--secondary: #E8DCC8;` - Bege quente (fundos secundários)
- `--muted: #D4D0C8;` - Cinza claro (elementos neutros)
- `--background: #F8F7F5;` - Branco gelo (fundo principal)
- `--foreground: #3A3A3A;` - Cinza escuro (texto)

**Como mudar:**
1. Abra `client/src/index.css`
2. Procure pela cor que quer mudar
3. Substitua o código hex pela nova cor

**Exemplo:**
```css
/* Antes */
--primary: #8B7355;

/* Depois */
--primary: #FF6B6B;  /* Novo vermelho */
```

---

## 📞 Como Atualizar Contatos

**WhatsApp:**
Procure por `5541846815605` em todos os arquivos e substitua pelo novo número.

**Instagram:**
Procure por `instagram.com/kasa.sissi` e substitua pelo seu perfil.

**Mercado Livre:**
Procure por `mercadolivre.com.br/pagina/kasa_sissi` e substitua pelo seu link.

---

## ➕ Como Adicionar Novos Produtos

Arquivo: `client/src/pages/Gallery.tsx`

Procure por `SAMPLE_PRODUCTS` e adicione um novo objeto:

```javascript
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cozinha Infantil Rosa',
    category: 'cozinhas',
    description: 'Descrição...',
    image: 'https://...'
  },
  // ADICIONE AQUI:
  {
    id: '2',
    name: 'Seu Novo Produto',
    category: 'categoria',  // cozinhas, bancadas, pet, mesas, prateleiras, outros
    description: 'Descrição do seu novo produto',
    image: 'https://cloudinary.com/...sua-imagem.webp'
  },
];
```

---

## 🔗 Como Adicionar Novas Categorias

Arquivo: `client/src/pages/Gallery.tsx`

Procure por `CATEGORIES` e adicione:

```javascript
const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'cozinhas', label: 'Cozinhas Infantis' },
  // ADICIONE AQUI:
  { id: 'sua-categoria', label: 'Sua Categoria' },
];
```

Depois, ao adicionar produtos, use o `id` da categoria.

---

## 🚀 Como Publicar Mudanças

1. Faça as edições no código
2. Salve os arquivos
3. O site vai atualizar automaticamente (você verá no Preview)
4. Quando estiver satisfeito, clique em "Publish"

---

## ⚠️ Dicas Importantes

1. **Sempre faça backup**: Antes de grandes mudanças, crie um checkpoint
2. **Teste no mobile**: Abra o Preview em um celular para ver como fica
3. **Use URLs completas**: Sempre use `https://` nas imagens
4. **Nomes de arquivos**: Não mude nomes de arquivos ou pastas
5. **Sintaxe**: Cuidado com aspas, parênteses e chaves - um erro quebra o site

---

## 📱 Estrutura de Arquivos

```
client/
  src/
    pages/
      Home.tsx          ← Homepage
      Gallery.tsx       ← Galeria de produtos
      About.tsx         ← Sobre
      Contact.tsx       ← Contato
    components/
      Navigation.tsx    ← Menu superior
      Footer.tsx        ← Rodapé
    index.css           ← Cores e estilos globais
```

---

## 🆘 Precisa de Ajuda?

Se algo quebrar:
1. Verifique se não faltam aspas ou parênteses
2. Use "Rollback" para voltar a uma versão anterior
3. Fale conosco via WhatsApp

---

## 💡 Próximas Melhorias Sugeridas

- Adicionar formulário de contato por email
- Criar blog com dicas de decoração
- Adicionar depoimentos de clientes
- Integrar com sistema de pagamento

Boa edição! 🎨
