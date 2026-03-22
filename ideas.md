# Ideias de Design - KASA SISSI

## Contexto da Marca
A KASA SISSI vende móveis premium para integrar humanos e pets em espaços funcionais e esteticamente agradáveis. Os produtos são de alta qualidade, com acabamento em madeira natural e tons neutros (rosa, cinza, bege). A marca comunica: **casa de revista em modo vida real**, **gatificação estética**, **dog living**, **crianças fora de tela**, **móveis funcionais**.

---

## Resposta 1: Minimalismo Nórdico com Calor Terroso
**Probabilidade: 0.08**

### Design Movement
Escandinavo moderno com influência de design de interiores contemporâneo. Foco em funcionalidade, luz natural e materiais naturais.

### Core Principles
1. **Espaço respira**: Muita margem branca, layouts assimétricos, hierarquia clara
2. **Materialidade honesta**: Madeira, texturas naturais, tons terrosos (bege, cinza, marrom claro)
3. **Funcionalismo elegante**: Cada elemento serve um propósito visual e prático
4. **Luz e sombra sutil**: Profundidade através de sombras suaves, não contrastes agressivos

### Color Philosophy
- **Paleta**: Branco gelo (#F8F7F5), cinza claro (#D4D0C8), bege quente (#E8DCC8), marrom natural (#8B7355), cinza escuro (#3A3A3A)
- **Lógica**: Tons terrosos remetem à madeira dos móveis; branco/cinza criam respiro; marrom é usado apenas para destaque
- **Emoção**: Calor acessível, sofisticação sem frieza, confiança através da simplicidade

### Layout Paradigm
- **Hero**: Imagem grande de um móvel em ambiente real (não centrado) + texto alinhado à esquerda em coluna estreita
- **Galeria de produtos**: Grid assimétrico (2-3 colunas em desktop, 1 em mobile) com espaçamento gerado
- **Seções**: Alternância entre imagem à esquerda/texto à direita e vice-versa
- **Rodapé**: Informações espalhadas em 3 colunas, não centrado

### Signature Elements
1. **Divisores em forma de linha fina** (1px) que separam seções com elegância
2. **Cards com sombra mínima** (apenas base, sem blur excessivo)
3. **Tipografia em dois pesos**: Display (Playfair Display 700) + Body (Lato 400/500)

### Interaction Philosophy
- Hover suave: cards ganham sombra mínima adicional, não mudam de cor
- Transições: 200ms ease-out, nunca spring
- Botões: Fundo sólido em marrom natural, sem borda, hover com sombra

### Animation
- Fade-in ao scroll (0.6s, delay escalonado)
- Hover em imagens: zoom muito suave (1.02x)
- Botões: nenhuma animação, apenas sombra

### Typography System
- **Display**: Playfair Display 700, 48px (desktop) / 32px (mobile)
- **Heading**: Playfair Display 600, 32px (desktop) / 24px (mobile)
- **Body**: Lato 400, 16px
- **Caption**: Lato 500, 12px (uppercase, tracking +0.05em)

---

## Resposta 2: Brutalist Quente com Acessibilidade
**Probabilidade: 0.07**

### Design Movement
Brutalismo contemporâneo suavizado. Formas geométricas, tipografia grande e ousada, mas com paleta quente que humaniza.

### Core Principles
1. **Tipografia como arquitetura**: Letras grandes, negrito, ocupam espaço
2. **Formas geométricas simples**: Retângulos, quadrados, sem curves suaves
3. **Contraste intencional**: Fundo escuro com texto claro, ou vice-versa
4. **Honestidade visual**: Sem decoração, apenas o essencial amplificado

### Color Philosophy
- **Paleta**: Preto profundo (#1A1A1A), bege quente (#F5E6D3), terracota (#C85A3A), cinza neutro (#6B6B6B)
- **Lógica**: Terracota remete à terra e aos móveis; bege é fundo; preto é tipografia dominante
- **Emoção**: Força, modernidade, acessibilidade (alto contraste)

### Layout Paradigm
- **Hero**: Tipografia gigante (72px+) em preto sobre fundo bege, sem imagem
- **Seções**: Blocos de conteúdo com bordas geométricas, não arredondadas
- **Grid**: Estrito, 12 colunas, sem assimetria
- **Imagens**: Ocupam espaço cheio, sem margens internas

### Signature Elements
1. **Bordas grossas** (2-4px) em preto separando seções
2. **Tipografia em caps lock** para destaque (não todo o site, apenas títulos)
3. **Backgrounds em blocos de cor sólida** (sem gradientes)

### Interaction Philosophy
- Hover: Inversão de cores (fundo vira texto, texto vira fundo)
- Cliques: Feedback visual imediato (borda mais grossa)
- Sem transições suaves; mudanças são diretas

### Animation
- Nenhuma animação ao scroll
- Hover em botões: inversão instantânea
- Transições: 100ms linear (rápidas, não fluidas)

### Typography System
- **Display**: IBM Plex Mono 700, 64px (desktop) / 40px (mobile)
- **Heading**: IBM Plex Mono 600, 36px (desktop) / 24px (mobile)
- **Body**: IBM Plex Mono 400, 16px
- **Accent**: IBM Plex Mono 700, 14px (caps)

---

## Resposta 3: Warm Maximalism com Narrativa Visual
**Probabilidade: 0.09**

### Design Movement
Maximalismo contemporâneo com paleta quente. Inspirado em design editorial de revistas de lifestyle, com muita textura, padrões sutis e narrativa visual forte.

### Core Principles
1. **Narrativa visual**: Cada seção conta uma história (pet, criança, casal, etc.)
2. **Textura e padrão**: Fundo com padrão sutil (linho, papel), não plano
3. **Cores em camadas**: Múltiplas cores trabalhando juntas, não apenas 2-3
4. **Tipografia expressiva**: Fontes com personalidade, não genéricas

### Color Philosophy
- **Paleta**: Creme (#FBF8F3), rosa suave (#E8D4C8), terracota (#D17A6B), verde sálvia (#7A9B8E), ocre (#B8956A), preto (#2A2A2A)
- **Lógica**: Cores remetem aos móveis reais (rosa, terracota) + natureza (verde); creme é fundo; preto é tipografia
- **Emoção**: Aconchego, sofisticação, vida real, diversidade

### Layout Paradigm
- **Hero**: Imagem grande de ambiente com móvel + tipografia sobreposta em ângulo (não horizontal)
- **Seções**: Alternância de layouts (imagem grande + texto pequeno, depois texto grande + imagem pequena)
- **Galeria**: Masonry layout com imagens de tamanhos variados
- **Rodapé**: Informações em blocos coloridos, não linear

### Signature Elements
1. **Padrão de linho sutil** no fundo (opacity 5%)
2. **Tipografia em ângulo** (rotate 2-3 graus) em alguns títulos
3. **Bordas em cores diferentes** (não preto) separando seções

### Interaction Philosophy
- Hover em imagens: Filtro de cor sutil (overlay com cor da paleta)
- Hover em texto: Underline em cor complementar
- Transições: 300ms ease-in-out, fluidas

### Animation
- Parallax suave em imagens (não excessivo)
- Fade-in ao scroll com delay escalonado
- Hover em cards: elevação suave (shadow aumenta)

### Typography System
- **Display**: Cormorant Garamond 700, 56px (desktop) / 36px (mobile)
- **Heading**: Cormorant Garamond 600, 36px (desktop) / 24px (mobile)
- **Body**: Raleway 400, 16px
- **Accent**: Raleway 600, 14px (em cor de destaque)

---

## Decisão Final
Escolhi a **Resposta 1: Minimalismo Nórdico com Calor Terroso** porque:

1. **Alinha com a marca**: A KASA SISSI é sobre funcionalidade e estética; minimalismo nórdico é perfeito
2. **SEO-friendly**: Layouts limpos e bem estruturados favorecem crawlers
3. **Conversão**: Espaço respira, foco no produto, sem distrações
4. **Acessibilidade**: Contraste adequado, tipografia legível
5. **Diferenciação**: Não é brutalism (muito agressivo para móveis) nem maximalism (muito poluído)

### Implementação
- Fonte display: **Playfair Display** (elegância, madeira)
- Fonte body: **Lato** (legibilidade, modernidade)
- Cores principais: Branco gelo, cinza claro, bege quente, marrom natural
- Animações: Fade-in ao scroll, hover suave
- Layout: Assimétrico, imagens grandes, muito espaço branco
