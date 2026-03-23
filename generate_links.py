#!/usr/bin/env python3
"""
Script para gerar links do Cloudinary a partir dos nomes dos arquivos
"""

import json
from pathlib import Path

# Lista de nomes de arquivos
filenames = [
    "20260322_184357-COLLAGE_eltjbg.jpg",
    "20260322_184456-COLLAGE_ynuswk.jpg",
    "20260322_184526-COLLAGE_strfvx.jpg",
    "20260322_184559-COLLAGE_lzoy28.jpg",
    "20260322_184630-COLLAGE_w2n9mb.jpg",
    "20260322_184740-COLLAGE_lii8wq.jpg",
    "20260322_184907-COLLAGE_qe0zfr.jpg",
    "20260322_184956-COLLAGE_t9ylod.jpg",
    "20260322_185052-COLLAGE_ntk7uf.jpg",
    "20260322_185122-COLLAGE_lz4zen.jpg",
    "20260322_185208-COLLAGE_tlsdhc.jpg",
    "20260322_185240-COLLAGE_x6cqm1.jpg",
    "20260322_185319-COLLAGE_kkmnjr.jpg",
    "20260322_185430-COLLAGE_wxxg8j.jpg",
    "20260322_185608-COLLAGE_gxcev8.jpg",
    "20260322_185646-COLLAGE_ylpody.jpg",
    "20260322_185711-COLLAGE_moolwa.jpg",
    "20260322_185837-COLLAGE_k95lrn.jpg",
    "20260322_185938-COLLAGE_jph8tb.jpg",
    "20260322_190018-COLLAGE_nzrxay.jpg",
    "20260322_190107-COLLAGE_ogntyv.jpg",
    "20260322_190233-COLLAGE_s8ygrq.jpg",
    "IMG-20250611-WA0031_boh0vh.jpg",
    "IMG-20251214-WA0000_nv3uib.jpg",
]

# Base URL
BASE_URL = "https://res.cloudinary.com/dipruvqks/image/upload/f_auto,q_auto/"

# Gerar links
products = []
banco_products = []

for idx, filename in enumerate(filenames, 1):
    # Remover extensão para obter public_id
    public_id = filename.replace(".jpg", "").replace(".png", "")
    
    # Gerar URL
    image_url = f"{BASE_URL}{public_id}.jpg"
    
    # Determinar categoria (você pode ajustar isso depois)
    category = "outros"
    
    # Criar produto
    product = {
        "id": f"produto-{idx}",
        "name": f"Produto {idx}",
        "category": category,
        "description": "Móvel funcional e elegante para sua casa.",
        "image": image_url
    }
    
    # Adicionar à lista apropriada
    # Por enquanto, vou adicionar alguns como "banco" (galeria de fotos)
    # Você pode ajustar depois
    if idx > 20:  # Últimas imagens vão para banco
        product["isBanco"] = True
        banco_products.append(product)
        print(f"[BANCO] {idx}: {image_url}")
    else:
        products.append(product)
        print(f"[PRODUTO] {idx}: {image_url}")

# Criar estrutura JSON
data = {
    "products": products,
    "bancoProducts": banco_products
}

# Salvar arquivo
output_path = Path(__file__).parent / "client" / "src" / "data" / "products.json"
output_path.parent.mkdir(parents=True, exist_ok=True)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\n✓ Arquivo salvo em: {output_path}")
print(f"  - {len(products)} produtos em categorias")
print(f"  - {len(banco_products)} imagens em Galeria de Fotos")
print(f"\nTotal: {len(filenames)} imagens")
