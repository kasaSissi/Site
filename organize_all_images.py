#!/usr/bin/env python3
"""
Script para organizar TODAS as imagens do Cloudinary
"""

import json
from pathlib import Path

# Todos os links que você passou
all_links = [
    "https://res.cloudinary.com/dipruvqks/image/upload/20251206_224454_hvwr3r.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182747-COLLAGE_2_ry0poh.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182747-COLLAGE_gofssm.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182821-COLLAGE_lf5ua8.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182917-COLLAGE_lmj8u1.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183024-COLLAGE_vqjehx.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183108-COLLAGE_ne8msx.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183220-COLLAGE_ry3xzh.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183331-COLLAGE_rwjlhe.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183435-COLLAGE_gadxcj.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183520-COLLAGE_qz0k9b.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183556-COLLAGE_wk3l7x.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183648-COLLAGE_s4hx2c.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183735-COLLAGE_bjij0m.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183812-COLLAGE_m8v4hh.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183859-COLLAGE_1_vbqkwe.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183859-COLLAGE_jz9zxs.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183940-COLLAGE_gh1zpx.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184019-COLLAGE_9dyxkp.jpg",
    "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184104-COLLAGE_0hklrb.jpg",
]

# Descrições por categoria
descriptions = {
    "cozinha": [
        "Cozinha Infantil Premium em MDF. Espaço perfeito para crianças brincarem e aprender.",
        "Cozinha Infantil Completa com acabamento impecável. Funcional e decorativa.",
        "Cozinha Infantil Moderna. Design integrado à sua casa.",
    ],
    "bancadas": [
        "Bancada de Marcenaria Infantil. Perfeita para criar e explorar.",
        "Bancada Funcional em MDF Premium. Espaço criativo para crianças.",
        "Bancada de Trabalho Infantil. Design elegante e funcional.",
    ],
    "pet": [
        "Móvel Pet Elegante. Integra seu cão ou gato à decoração.",
        "Nicho Pet Moderno. Espaço confortável e decorativo.",
        "Móvel Pet Funcional. Beleza que acomoda.",
    ],
    "mesas-infantis": [
        "Mesa Infantil Versátil. Espaço para estudar, desenhar e brincar.",
        "Mesa Infantil Funcional. Design que cresce com a criança.",
        "Mesa Infantil Premium. Qualidade e estilo.",
    ],
    "prateleiras": [
        "Prateleira Decorativa. Organiza e embeleza seu espaço.",
        "Prateleira Funcional em MDF. Armazenamento com estilo.",
        "Prateleira Elegante. Integra-se perfeitamente à sua casa.",
    ],
    "outros": [
        "Móvel Funcional KASA SISSI. Casa para quem vive de verdade.",
        "Peça Decorativa e Funcional. Integra toda a família.",
        "Móvel Premium. Design pensado para a vida real.",
    ]
}

# Nomes por categoria
names = {
    "cozinha": [
        "Cozinha Infantil Rosa",
        "Cozinha Infantil Branca",
        "Cozinha Infantil Completa",
    ],
    "bancadas": [
        "Bancada Criativa",
        "Bancada de Marcenaria",
        "Bancada Premium",
    ],
    "pet": [
        "Nicho Pet Elegante",
        "Móvel Pet Moderno",
        "Nicho Pet Funcional",
    ],
    "mesas-infantis": [
        "Mesa Infantil Versátil",
        "Mesa de Estudos",
        "Mesa Infantil Premium",
    ],
    "prateleiras": [
        "Prateleira Decorativa",
        "Prateleira Funcional",
        "Prateleira Premium",
    ],
    "outros": [
        "Móvel Integrado",
        "Peça Decorativa",
        "Móvel Funcional",
    ]
}

# Distribuição de categorias (você pode ajustar)
# Vou distribuir as 20 imagens entre as categorias
distribution = {
    "cozinha": list(range(0, 3)),  # imagens 0-2
    "bancadas": list(range(3, 6)),  # imagens 3-5
    "pet": list(range(6, 9)),  # imagens 6-8
    "mesas-infantis": list(range(9, 12)),  # imagens 9-11
    "prateleiras": list(range(12, 15)),  # imagens 12-14
    "outros": list(range(15, 20)),  # imagens 15-19
}

# Gerar produtos
products = []
name_counters = {cat: 0 for cat in descriptions.keys()}
desc_counters = {cat: 0 for cat in descriptions.keys()}

for idx, link in enumerate(all_links):
    # Determinar categoria
    category = "outros"
    for cat, indices in distribution.items():
        if idx in indices:
            category = cat
            break
    
    # Obter nome e descrição
    name_idx = name_counters[category] % len(names[category])
    desc_idx = desc_counters[category] % len(descriptions[category])
    
    name = names[category][name_idx]
    description = descriptions[category][desc_idx]
    
    name_counters[category] += 1
    desc_counters[category] += 1
    
    # Criar produto
    product = {
        "id": f"produto-{idx+1}",
        "name": name,
        "category": category,
        "description": description,
        "image": link
    }
    
    products.append(product)
    print(f"[{category.upper()}] {idx+1}: {name}")

# Criar estrutura JSON
data = {
    "products": products,
    "bancoProducts": []  # Vazio por enquanto
}

# Salvar arquivo
output_path = Path(__file__).parent / "client" / "src" / "data" / "products.json"
output_path.parent.mkdir(parents=True, exist_ok=True)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\n✓ Arquivo salvo em: {output_path}")
print(f"  - {len(products)} produtos organizados por categoria")
print(f"\nResumo:")
for cat, indices in distribution.items():
    print(f"  - {cat}: {len(indices)} imagens")
