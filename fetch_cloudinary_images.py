#!/usr/bin/env python3
"""
Script para buscar imagens do Cloudinary usando a API Admin
"""

import json
import hashlib
import time
from pathlib import Path
import urllib.request
import urllib.error
import urllib.parse

# Configurações
CLOUD_NAME = "dipruvqks"  # Extraído do link da imagem
API_KEY = "249195267513556"
API_SECRET = "-r9WsfMzOIDSmHSjsqte6Snc_NU"
FOLDER = "Home"

def generate_auth_signature(params, api_secret):
    """Gera assinatura para autenticação na API do Cloudinary"""
    param_string = "&".join([f"{k}={v}" for k, v in sorted(params.items())])
    auth_string = f"{param_string}{api_secret}"
    signature = hashlib.sha1(auth_string.encode()).hexdigest()
    return signature

def get_cloudinary_images():
    """Busca imagens usando a Admin API"""
    try:
        url = f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/resources/search"
        
        # Parâmetros - buscar por pasta
        params = {
            'expression': f'folder:"{FOLDER}"',
            'max_results': '500',
            'api_key': API_KEY,
            'timestamp': str(int(time.time()))
        }
        
        # Gerar assinatura
        signature = generate_auth_signature(params, API_SECRET)
        params['signature'] = signature
        
        # Criar dados POST
        post_data = urllib.parse.urlencode(params).encode('utf-8')
        
        print(f"Buscando imagens da pasta '{FOLDER}'...")
        print(f"Cloud: {CLOUD_NAME}")
        
        # Fazer requisição POST
        req = urllib.request.Request(url, data=post_data, method='POST')
        req.add_header('Content-Type', 'application/x-www-form-urlencoded')
        
        with urllib.request.urlopen(req, timeout=30) as response:
            data = json.loads(response.read().decode())
        
        resources = data.get('resources', [])
        print(f"✓ Encontradas {len(resources)} imagens")
        
        return resources
    except urllib.error.HTTPError as e:
        print(f"✗ Erro HTTP {e.code}: {e.reason}")
        try:
            error_data = json.loads(e.read().decode())
            print(f"  Detalhes: {error_data}")
        except:
            pass
        return None
    except Exception as e:
        print(f"✗ Erro: {e}")
        import traceback
        traceback.print_exc()
        return None

def process_resources(resources):
    """Processa recursos e separa em categorias"""
    products = []
    banco_products = []
    
    for idx, resource in enumerate(resources, 1):
        tags = resource.get('tags', [])
        public_id = resource.get('public_id', '')
        secure_url = resource.get('secure_url', '')
        
        # Determinar se é banco
        is_banco = 'banco' in tags
        
        # Determinar categoria
        category = 'outros'
        categories = ['cozinha', 'bancadas', 'pet', 'mesas-infantis', 'prateleiras', 'outros']
        for tag in tags:
            if tag in categories:
                category = tag
                break
        
        # Criar produto
        product = {
            "id": f"produto-{idx}",
            "name": resource.get('display_name', f"Produto {idx}"),
            "category": category,
            "description": "Móvel funcional e elegante para sua casa.",
            "image": secure_url
        }
        
        if is_banco:
            product["isBanco"] = True
            banco_products.append(product)
            print(f"  [{idx}] BANCO: {public_id}")
        else:
            products.append(product)
            print(f"  [{idx}] {category.upper()}: {public_id}")
    
    return products, banco_products

def save_json(products, banco_products):
    """Salva dados em arquivo JSON"""
    output_path = Path(__file__).parent / "client" / "src" / "data" / "products.json"
    
    data = {
        "products": products,
        "bancoProducts": banco_products
    }
    
    try:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"\n✓ Arquivo salvo em: {output_path}")
        print(f"  - {len(products)} produtos em categorias")
        print(f"  - {len(banco_products)} imagens em Galeria de Fotos")
        return True
    except Exception as e:
        print(f"✗ Erro ao salvar arquivo: {e}")
        return False

def main():
    print("=" * 60)
    print("KASA SISSI - Fetch Cloudinary Images")
    print("=" * 60)
    
    # Buscar imagens
    resources = get_cloudinary_images()
    if not resources:
        print("\n✗ Não foi possível buscar as imagens")
        return False
    
    # Processar
    print("\nProcessando imagens...")
    products, banco_products = process_resources(resources)
    
    # Salvar
    print("\nSalvando arquivo JSON...")
    success = save_json(products, banco_products)
    
    if success:
        print("\n✓ Sucesso! Recarregue o site para ver as imagens.")
    
    return success

if __name__ == "__main__":
    main()
