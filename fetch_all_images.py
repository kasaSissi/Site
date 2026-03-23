#!/usr/bin/env python3
"""
Busca todas as imagens do Cloudinary via Admin API e lista com URLs otimizadas.
"""
import json
import hashlib
import time
import urllib.request
import urllib.parse
import base64

CLOUD_NAME = "dipruvqks"
API_KEY = "249195267513556"
API_SECRET = "-r9WsfMzOIDSmHSjsqte6Snc_NU"

def make_auth_header():
    credentials = f"{API_KEY}:{API_SECRET}"
    encoded = base64.b64encode(credentials.encode()).decode()
    return {"Authorization": f"Basic {encoded}"}

def fetch_all_resources(next_cursor=None, all_resources=None):
    if all_resources is None:
        all_resources = []

    url = f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/resources/image"
    params = {
        "max_results": "500",
        "type": "upload",
    }
    if next_cursor:
        params["next_cursor"] = next_cursor

    query_string = urllib.parse.urlencode(params)
    full_url = f"{url}?{query_string}"

    req = urllib.request.Request(full_url, headers=make_auth_header())
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            data = json.loads(response.read().decode())
    except Exception as e:
        print(f"Erro na requisição: {e}")
        return all_resources

    resources = data.get("resources", [])
    all_resources.extend(resources)
    print(f"  Lote recebido: {len(resources)} imagens (total: {len(all_resources)})")

    cursor = data.get("next_cursor")
    if cursor:
        return fetch_all_resources(cursor, all_resources)
    return all_resources

def build_url(public_id, format="jpg"):
    return f"https://res.cloudinary.com/{CLOUD_NAME}/image/upload/f_auto,q_auto/{public_id}.{format}"

if __name__ == "__main__":
    print(f"Buscando imagens no Cloudinary ({CLOUD_NAME})...")
    resources = fetch_all_resources()
    print(f"\nTotal encontrado: {len(resources)} imagens\n")

    results = []
    for r in resources:
        public_id = r.get("public_id", "")
        fmt = r.get("format", "jpg")
        url = build_url(public_id, fmt)
        folder = r.get("folder", "")
        results.append({
            "public_id": public_id,
            "folder": folder,
            "format": fmt,
            "url": url,
            "width": r.get("width"),
            "height": r.get("height"),
            "created_at": r.get("created_at", ""),
        })

    # Salvar JSON completo
    with open("all_images.json", "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"Salvo em all_images.json")

    # Listar pastas encontradas
    folders = sorted(set(r["folder"] for r in results))
    print(f"\nPastas encontradas: {folders}")

    # Listar URLs
    print("\nURLs das imagens:")
    for r in results:
        print(r["url"])
