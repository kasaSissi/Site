#!/usr/bin/env python3
"""
Script para organizar TODAS as imagens conforme categorias do usuário
"""

import json
from pathlib import Path

# Dados organizados pelo usuário
data_by_category = {
    "cozinha": [
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182747-COLLAGE_2_ry0poh.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182747-COLLAGE_gofssm.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182821-COLLAGE_lf5ua8.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_182917-COLLAGE_lmj8u1.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183024-COLLAGE_vqjehx.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183108-COLLAGE_ne8msx.jpg",
    ],
    "bancadas": [
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183220-COLLAGE_ry3xzh.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183331-COLLAGE_rwjlhe.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183435-COLLAGE_gadxcj.jpg",
    ],
    "pet": [
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183520-COLLAGE_qz0k9b.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183556-COLLAGE_wk3l7x.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183648-COLLAGE_s4hx2c.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183735-COLLAGE_bjij0m.jpg",
    ],
    "mesas-infantis": [
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183812-COLLAGE_m8v4hh.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183859-COLLAGE_jz9zxs.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_183940-COLLAGE_gh1zpx.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184019-COLLAGE_9dyxkp.jpg",
    ],
    "prateleiras": [
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184104-COLLAGE_0hklrb.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184357-COLLAGE_eltjbg.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184456-COLLAGE_ynuswk.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184526-COLLAGE_strfvx.jpg",
    ],
    "cabeceira": [
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184559-COLLAGE_lzoy28.jpg",
        "https://res.cloudinary.com/dipruvqks/image/upload/20260322_184630-COLLAGE_w2n9mb.jpg",
    ],
}

# Descrições por categoria
descriptions = {
    "cozinha": [
        "Cozinha Infantil Premium em MDF. Espaço perfeito para crianças brincarem e aprender a cozinhar.",
        "Cozinha Infantil Completa com acabamento impecável. Funcional e decorativa.",
        "Cozinha Infantil Moderna. Design integrado à sua casa.",
        "Cozinha Infantil Elegante. Qualidade premium para crianças de 4 a 10 anos.",
        "Cozinha Infantil Funcional. Móvel que cresce com a criança.",
        "Cozinha Infantil Versátil. Espaço para brincar e aprender.",
    ],
    "bancadas": [
        "Bancada de Marcenaria Infantil. Espaço para criar e explorar.",
        "Bancada Funcional em MDF Premium. Espaço criativo para crianças.",
        "Bancada de Trabalho Infantil. Design elegante e funcional.",
    ],
    "pet": [
        "Móvel Pet Elegante. Integra seu cão ou gato à decoração.",
        "Nicho Pet Moderno. Espaço confortável e decorativo.",
        "Móvel Pet Funcional. Beleza que acomoda.",
        "Nicho Pet Premium. Dog living integrado à sua casa.",
    ],
    "mesas-infantis": [
        "Mesa Infantil Versátil. Espaço para estudar, desenhar e brincar.",
        "Mesa Infantil Funcional. Design que cresce com a criança.",
        "Mesa Infantil Premium. Qualidade e estilo.",
        "Conjunto Mesa e Cadeiras. Perfeito para a infância integrada.",
    ],
    "prateleiras": [
        "Prateleira Decorativa. Organiza e embeleza seu espaço.",
        "Prateleira Funcional em MDF. Armazenamento com estilo.",
        "Prateleira Elegante. Integra-se perfeitamente à sua casa.",
        "Prateleira Premium. Design que organiza e decora.",
    ],
    "cabeceira": [
        "Móvel de Cabeceira Infantil. Funcional e elegante.",
        "Cabeceira Premium. Design pensado para o quarto infantil.",
    ],
}

# Nomes por categoria
names = {
    "cozinha": [
        "Cozinha Infantil Rosa",
        "Cozinha Infantil Branca",
        "Cozinha Infantil Completa",
        "Cozinha Infantil Moderna",
        "Cozinha Infantil Elegante",
        "Cozinha Infantil Versátil",
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
        "Nicho Pet Premium",
    ],
    "mesas-infantis": [
        "Mesa Infantil Versátil",
        "Mesa de Estudos",
        "Mesa Infantil Premium",
        "Conjunto Mesa e Cadeiras",
    ],
    "prateleiras": [
        "Prateleira Decorativa",
        "Prateleira Funcional",
        "Prateleira Elegante",
        "Prateleira Premium",
    ],
    "cabeceira": [
        "Móvel de Cabeceira",
        "Cabeceira Premium",
    ],
}

# Gerar produtos
products = []
product_id = 1

for category, links in data_by_category.items():
    for idx, link in enumerate(links):
        # Obter nome e descrição
        name = names[category][idx % len(names[category])]
        description = descriptions[category][idx % len(descriptions[category])]
        
        # Criar produto
        product = {
            "id": f"produto-{product_id}",
            "name": name,
            "category": category,
            "description": description,
            "image": link
        }
        
        products.append(product)
        print(f"[{category.upper()}] {product_id}: {name}")
        product_id += 1

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
for category, links in data_by_category.items():
    print(f"  - {category}: {len(links)} imagens")
