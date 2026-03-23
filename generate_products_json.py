#!/usr/bin/env python3
"""
Gera o products.json completo:
- 40 colagens com categorias definidas por IA
- 86 screenshots do Mercado Livre como categoria 'outros'
"""
import json
import uuid

CLOUD_NAME = "dp9rcls07"

# Carregar resultado da categorização
with open("/home/ubuntu/categorize_collages.json") as f:
    cat_data = json.load(f)

# Carregar todas as imagens da conta
with open("/home/ubuntu/Site/all_images_new.json") as f:
    all_images = json.load(f)

# Criar mapa public_id -> url para as imagens
img_map = {r["public_id"]: r["url"] for r in all_images}

# Processar colagens categorizadas
products = []
for item in cat_data["results"]:
    out = item["output"]
    filename = out.get("filename", item["input"])
    # Remover extensão para obter public_id
    public_id = filename.replace(".jpg", "").replace(".png", "").replace(".webp", "")
    url = img_map.get(public_id)
    if not url:
        # Tentar construir URL diretamente
        url = f"https://res.cloudinary.com/{CLOUD_NAME}/image/upload/f_auto,q_auto/{public_id}.jpg"

    category = out.get("category", "outros").strip().lower()
    # Normalizar categorias
    valid_cats = {"cozinha", "bancadas", "pet", "mesas-infantis", "prateleiras", "cabeceira", "outros"}
    if category not in valid_cats:
        category = "outros"

    products.append({
        "id": str(uuid.uuid4()),
        "name": out.get("name", "Produto KASA SISSI"),
        "category": category,
        "description": out.get("description", "Móvel artesanal KASA SISSI."),
        "image": url,
        "isCover": False,
        "isBanco": False,
    })

print(f"Colagens processadas: {len(products)}")

# Processar screenshots do Mercado Livre como 'outros' (sem categoria específica)
ml_images = [r for r in all_images if "Mercado_Libre" in r["public_id"] or "mercado" in r["public_id"].lower()]
print(f"Mercado Livre: {len(ml_images)}")

for i, r in enumerate(ml_images):
    products.append({
        "id": str(uuid.uuid4()),
        "name": f"Produto KASA SISSI",
        "category": "outros",
        "description": "Móvel artesanal KASA SISSI. Qualidade premium em madeira natural.",
        "image": r["url"],
        "isCover": False,
        "isBanco": False,
    })

print(f"Total de produtos: {len(products)}")

# Estatísticas por categoria
from collections import Counter
cats = Counter(p["category"] for p in products)
print("\nDistribuição por categoria:")
for cat, count in sorted(cats.items()):
    print(f"  {cat}: {count}")

# Salvar
output = {"products": products, "bancoProducts": []}
with open("/home/ubuntu/Site/client/src/data/products.json", "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"\nSalvo em client/src/data/products.json com {len(products)} produtos!")
