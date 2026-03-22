# Estrutura do Site KASA SISSI

## Arquitetura de Páginas

### 1. Homepage (/)
**Objetivo**: Apresentar a marca, criar conexão emocional e direcionar para catálogo

**Seções**:
- **Hero**: Imagem grande de ambiente com móvel + título "Móveis que integram sua casa e seus companheiros" + CTA para galeria
- **Proposta de Valor**: 3 cards (Funcionalidade, Estética, Integração) com ícones
- **Destaque Visual**: Galeria de 4-6 produtos em destaque com link para cada categoria
- **Depoimento/Lifestyle**: Imagem grande de ambiente real com móvel + texto sobre a filosofia
- **CTA Principal**: Botão grande para WhatsApp + links para Mercado Livre e Instagram
- **Rodapé**: Informações de contato, links sociais, newsletter

### 2. Galeria de Produtos (/galeria)
**Objetivo**: Mostrar portfólio completo, permitir filtro por categoria

**Seções**:
- **Filtros**: Botões para Cozinhas, Bancadas, Móveis Pet, Mesas, Prateleiras, Outros
- **Grid de Produtos**: Masonry layout (imagens de tamanhos variados)
- **Card de Produto**: Imagem + nome + preço (opcional) + botão "Ver mais" (abre modal)
- **Modal de Detalhes**: Imagem grande + descrição + botão WhatsApp

### 3. Sobre (/sobre)
**Objetivo**: Contar a história da marca, criar confiança

**Seções**:
- **Missão**: Texto sobre a proposta da KASA SISSI
- **Valores**: 4-5 valores principais (Funcionalidade, Sustentabilidade, Design, etc.)
- **Processo**: Como os móveis são feitos (se aplicável)
- **CTA**: Link para WhatsApp

### 4. Contato (/contato)
**Objetivo**: Facilitar comunicação multicanal

**Seções**:
- **WhatsApp**: Botão grande + número
- **Mercado Livre**: Link + descrição
- **Instagram**: Link + descrição
- **Email**: Formulário simples (opcional)

---

## Componentes Reutilizáveis

### ProductCard
- Imagem
- Nome do produto
- Preço (opcional)
- Botão "Ver mais"

### CategoryButton
- Ícone
- Nome da categoria
- Hover com sombra suave

### CTAButton
- Texto
- Ícone (WhatsApp, Mercado Livre, Instagram)
- Link para ação

### Modal
- Imagem grande
- Descrição
- Botão de ação
- Botão de fechar

---

## Fluxo de Dados

### Produtos
```json
{
  "id": "produto-1",
  "nome": "Cozinha Infantil Rosa",
  "categoria": "cozinhas",
  "descricao": "Cozinha de marcenaria para crianças de 4-10 anos",
  "preco": "R$ 1.200,00",
  "imagem": "https://cloudinary.com/...",
  "destaque": true
}
```

### Categorias
- Cozinhas Infantis
- Bancadas de Marcenaria
- Móveis Pet
- Mesas de Cabeceira
- Prateleiras Decorativas
- Mesas de Campo
- Mesas de Centro

---

## Estratégia de SEO

### Meta Tags
- Title: "KASA SISSI - Móveis Funcionais para Humanos e Pets"
- Description: "Móveis premium de marcenaria para integrar sua casa. Cozinhas infantis, bancadas, móveis pet e muito mais."
- Keywords: móveis, móveis funcionais, cozinhas infantis, móveis pet, marcenaria

### Estrutura de URLs
- `/` - Homepage
- `/galeria` - Galeria de produtos
- `/galeria/[categoria]` - Produtos por categoria
- `/sobre` - Sobre a marca
- `/contato` - Contato

### Schema Markup
- Organization (nome, logo, contato)
- Product (para cada item da galeria)
- LocalBusiness (endereço, telefone)

---

## Integração de Canais

### WhatsApp
- Botão flutuante (canto inferior direito)
- Link: `https://wa.me/5541988681605?text=Olá%20KASA%20SISSI!%20Gostaria%20de%20saber%20mais%20sobre...`

### Mercado Livre
- Link para loja do Mercado Livre
- Botão em seção de contato

### Instagram
- Link para perfil
- Botão em seção de contato
- Feed do Instagram (opcional, via plugin)

---

## Tecnologia

### Frontend
- React 19
- TailwindCSS 4
- Wouter (roteamento)
- shadcn/ui (componentes)

### Armazenamento de Imagens
- Cloudinary (gratuito, upload via dashboard)

### PWA
- Service Worker para offline
- Manifest.json para instalação
- Cache de imagens

### Analytics
- Umami (analytics nativa do Manus)

---

## Próximos Passos Após Desenvolvimento

1. **Upload de Imagens**: Criar conta Cloudinary gratuita, fazer upload das 25+ fotos
2. **Configuração de Domínio**: Apontar kasasissi.com.br para o site
3. **Publicação**: Usar botão "Publish" no Manus
4. **SEO**: Submeter sitemap ao Google Search Console
5. **Monitoramento**: Acompanhar analytics e conversões
